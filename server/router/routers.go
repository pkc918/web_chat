package router

import (
	"github.com/gin-gonic/gin"
	"web_chat/server/controller"
)

func CollectRoute(r *gin.Engine) *gin.Engine {
	r.POST("/api/auth/register", controller.Register)
	return r
}
