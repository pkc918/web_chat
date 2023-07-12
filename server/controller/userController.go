package controller

import (
	"github.com/gin-gonic/gin"
	"web_chat/server/model"
	reqModel "web_chat/server/model/request"
	"web_chat/server/service"
	"web_chat/server/utils/response"
)

var r reqModel.Register
var userService service.UserService

func Register(context *gin.Context) {
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
	}
}
