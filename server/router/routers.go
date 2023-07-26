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
		g1.POST("/contact/addContact", controller.AddContact)
		g1.GET("/contact/getContacts", controller.GetContacts)
		g1.GET("/contact/getContactInfo", controller.GetContactInfo)
		g1.POST("/contact/delContact", controller.DelContact)

		g1.POST("/contact/addCommunity", controller.AddCommunity)
		g1.GET("/contact/getCommunities", controller.GetCommunities)
		g1.GET("/contact/getCommunity", controller.GetCommunityInfo)
		g1.POST("/contact/delCommunity", controller.DelCommunity)
	}

	return r
}
