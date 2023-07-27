package controller

import (
	"github.com/gin-gonic/gin"
	"web_chat/server/ws"
)

func ConnectChat(context *gin.Context) {
	hub := ws.NewHub()
	go hub.Run()
	ws.ServeWs(hub, context.Writer, context.Request)
}
