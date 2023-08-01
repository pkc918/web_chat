package router

import (
	"github.com/gin-gonic/gin"
	"web_chat/server/controller"
	"web_chat/server/middleware"
)

// CollectRoute 路由
func CollectRoute(r *gin.Engine) *gin.Engine {
	r.Use(middleware.CORSMiddleware())
	g1 := r.Group("/api")
	{
		// 用户登录注册
		g1.POST("/auth/register", controller.Register)
		g1.POST("/auth/signIn", controller.SignIn)
		// 用户好友
		g1.POST("/contact/addContact", controller.AddContact)
		g1.GET("/contact/getContacts", controller.GetContacts)
		g1.GET("/contact/getContactInfo", controller.GetContactInfo)
		g1.POST("/contact/delContact", controller.DelContact)
		// 用户群聊
		g1.POST("/contact/addCommunity", controller.AddCommunity)
		g1.GET("/contact/getCommunities", controller.GetCommunities)
		g1.GET("/contact/getCommunity", controller.GetCommunityInfo)
		g1.POST("/contact/delCommunity", controller.DelCommunity)
		// ws 通信
		g1.GET("/chat", controller.ConnectChat)
	}

	return r
}
