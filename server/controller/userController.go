package controller

import (
	"github.com/gin-gonic/gin"
	"web_chat/server/model"
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
	// 这里要做验证，验证参数的格式等等

	// 数据拼装
	user := &model.User{
		Email:    r.Email,
		Mobile:   r.Mobile,
		PassWord: r.PassWord,
		Avatar:   r.Avatar,
		Sex:      r.Sex,
		Nickname: r.Nickname,
	}
	// 注册
	err = userService.Register(*user)
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
