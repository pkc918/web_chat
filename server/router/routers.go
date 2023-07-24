package router

import (
	"github.com/gin-gonic/gin"
	"web_chat/server/controller"
)

// CollectRoute 路由
func CollectRoute(r *gin.Engine) *gin.Engine {
	g1 := r.Group("/api")
	{
		g1.POST("/auth/register", controller.Register)
		g1.POST("/auth/signIn", controller.SignIn)
		g1.POST("/contact/add", controller.AddCont)
	}

	return r
}
