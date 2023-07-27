package ws

import (
	"bytes"
	"fmt"
	"github.com/gorilla/websocket"
	"log"
	"net/http"
	"time"
)

const (
	writeWait      = 10 * time.Second
	pongWait       = 60 * time.Second
	pingPeriod     = (pongWait * 9) / 10
	maxMessageSize = 512
)

var (
	newline = []byte{'\n'}
	space   = []byte{' '}
)

// 升级websocket协议
var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024, // 连接读取缓冲区大小
	WriteBufferSize: 1024, // 连接写入缓冲区大小
}

type Client struct {
	hub *Hub
	// The websocket connection.
	conn *websocket.Conn
	// Buffered channel of outbound messages.
	send chan []byte
}

func (c *Client) readPump() {
	defer func() {
		c.hub.unregister <- c
		c.conn.Close()
	}()
	// 设置读取消息的最大限制大小
	c.conn.SetReadLimit(maxMessageSize)
	// 设置读取超时时间
	c.conn.SetReadDeadline(time.Now().Add(pongWait))
	c.conn.SetPongHandler(func(string) error { c.conn.SetReadDeadline(time.Now().Add(pongWait)); return nil })
	for {
		// 先读取c发送过来的信息
		_, message, err := c.conn.ReadMessage()
		if err != nil {
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
				log.Printf("error: %v", err)
			}
			break
		}
		// 去除消息中的空白字符
		message = bytes.TrimSpace(bytes.Replace(message, newline, space, -1))
		fmt.Println("读：", string(message))
		// 将读取到的消息进行广播
		c.hub.broadcast <- message
	}
}

func (c *Client) writePump() {
	// 创建一个定时器，定期发送 ping 维持连接
	ticker := time.NewTicker(pingPeriod)
	defer func() {
		ticker.Stop()
		c.conn.Close()
	}()
	// 死循环处理不断待发送的消息
	for {
		select {
		// send 中取出待发送的消息
		case message, ok := <-c.send:
			// 设置写入消息的过期时间
			c.conn.SetWriteDeadline(time.Now().Add(writeWait))
			if !ok {
				// 通知关闭连接
				c.conn.WriteMessage(websocket.CloseMessage, []byte{})
				return
			}
			// 创建一个 Writer 用于向客户端发送 text 消息
			w, err := c.conn.NextWriter(websocket.TextMessage)
			if err != nil {
				return
			}
			w.Write(message)
			fmt.Println("写：", string(message))

			// 将等待被发送的消息，写给客户端
			n := len(c.send)
			for i := 0; i < n; i++ {
				w.Write(newline)
				w.Write(<-c.send)
			}

			if err := w.Close(); err != nil {
				return
			}
		// 定时 ping
		case <-ticker.C:
			c.conn.SetWriteDeadline(time.Now().Add(writeWait))
			if err := c.conn.WriteMessage(websocket.PingMessage, nil); err != nil {
				return
			}
		}
	}
}

// ServeWs handles websocket requests from the peer.
func ServeWs(hub *Hub, w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
		return
	}
	client := &Client{hub: hub, conn: conn, send: make(chan []byte, 256)}
	client.hub.register <- client
	go client.writePump()
	go client.readPump()
}
