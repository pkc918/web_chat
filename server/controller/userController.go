package controller

import (
	"github.com/gin-gonic/gin"
	reqModel "web_chat/server/model/request"
	resModel "web_chat/server/model/response"
	"web_chat/server/service"
	"web_chat/server/utils/response"
)

var userService service.UserService

func Register(context *gin.Context) {
	var r reqModel.Register
	err := context.ShouldBindJSON(&r)
	if err != nil {
		response.FailWithMessage("参数错误", context)
		// 响应一个错误信息，参数问题
		return
	}
	// 注册
	err = userService.Register(r)
	if err != nil {
		response.FailWithMessage(err.Error(), context)
		return
	}
	response.OkWithMessage("注册成功", context)
}

func SignIn(context *gin.Context) {
	var s reqModel.SignIn
	err := context.ShouldBindJSON(&s)
	if err != nil {
		response.FailWithMessage("参数错误", context)
		return
	}
	// 登录
	err = userService.SignIn(s)
	if err != nil {
		response.FailWithMessage(err.Error(), context)
		return
	}
	response.OkWithDetailed(&resModel.SignIn{
		Token: "token",
	}, "登录成功", context)
}
