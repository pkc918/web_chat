package controller

import (
	"github.com/gin-gonic/gin"
	reqModel "web_chat/server/model/request"
	"web_chat/server/service"
	"web_chat/server/utils/response"
)

var contactService service.ContactService

func AddCont(context *gin.Context) {
	var c reqModel.Contact
	err := context.ShouldBindJSON(&c)
	if err != nil {
		response.FailWithMessage("参数错误", context)
		return
	}
	if c.Ownerid == c.Dstobj {
		response.FailWithMessage("无法添加自己为好友", context)
	}
	// 添加好友/群
	err = contactService.AddContact(c)
	if err != nil {
		response.FailWithMessage(err.Error(), context)
		return
	}
	response.OkWithMessage("添加成功", context)
}

func GetContacts(context *gin.Context) {
	var c reqModel.Contact
	err := context.Bind(&c)
	if err != nil {
		response.FailWithMessage("参数错误", context)
		return
	}
	// 查询用户好友列表
	data, err := contactService.GetContacts(c)
	if err != nil {
		response.FailWithMessage(err.Error(), context)
		return
	}
	response.OkWithData(data, context)
}

func DelContact(context *gin.Context) {
	var c reqModel.Contact
	err := context.ShouldBindJSON(&c)
	if err != nil {
		response.FailWithMessage("参数错误", context)
		return
	}
	// 添加好友/群
	err = contactService.DelContact(c)
	if err != nil {
		response.FailWithMessage(err.Error(), context)
		return
	}
	response.OkWithMessage("删除成功", context)
}
