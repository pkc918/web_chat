package controller

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"web_chat/server/model"
	reqModel "web_chat/server/model/request"
	"web_chat/server/service"
)

var r reqModel.Register
var userService service.UserService

func Register(context *gin.Context) {
	err := context.ShouldBindJSON(&r)
	if err != nil {
		context.JSON(http.StatusBadRequest, gin.H{
			"code": "400",
			"msg":  "参数错误",
			"data": r,
		})
		// 响应一个错误信息，参数问题
		return
	}

	// 这里要做验证，验证参数的格式等等

	// 合格数据
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
		context.JSON(http.StatusBadRequest, gin.H{
			"code": "400",
			"msg":  err.Error(),
			"data": nil,
		})
	}
}
