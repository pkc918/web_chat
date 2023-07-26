package controller

import (
	"github.com/gin-gonic/gin"
	"github.com/gorilla/websocket"
	"log"
	"net/http"
	"sync"
)

type Client struct {
	Conn      *websocket.Conn
	DataQueue chan []byte
	GroupSets interface{}
}

var clientMap map[int64]*Client = make(map[int64]*Client, 0)

// 读写锁
var rwlocker sync.RWMutex

var upgrader = &websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

func ConnectChat(context *gin.Context) {
	// 检测 token 合法性

	conn, err := upgrader.Upgrade(context.Writer, context.Request, nil)
	if err != nil {
		log.Println(err.Error())
		return
	}
	// 创建一个实例
	client := &Client{
		Conn:      conn,
		DataQueue: make(chan []byte, 50),
		GroupSets:
	}
}
