package router

import (
	"github.com/gin-gonic/gin"
	"web_chat/server/controller"
)

// CollectRoute 路由
func CollectRoute(r *gin.Engine) *gin.Engine {
	r.POST("/api/auth/register", controller.Register)
	r.POST("/api/auth/signIn", controller.SignIn)
	return r
}
