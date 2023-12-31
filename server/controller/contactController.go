package controller

import (
	"github.com/gin-gonic/gin"
	"web_chat/server/model"
	reqModel "web_chat/server/model/request"
	"web_chat/server/service"
	"web_chat/server/utils/response"
)

var contactService service.ContactService

func AddContact(context *gin.Context) {
	var c reqModel.Contact
	err := context.ShouldBindJSON(&c)
	if err != nil {
		response.FailWithMessage("参数错误", context)
		return
	}
	if c.Ownerid == c.Dstobj {
		response.FailWithMessage("无法添加自己为好友", context)
	}
	// 添加好友
	err = contactService.AddContact(c, model.CONCAT_CATE_USER)
	if err != nil {
		response.FailWithMessage(err.Error(), context)
		return
	}
	response.OkWithMessage("添加成功", context)
}

func GetContacts(context *gin.Context) {
	id := context.Query("ownerid")
	// 查询用户好友列表
	data, err := contactService.GetContacts(id, model.CONCAT_CATE_USER)
	if err != nil {
		response.FailWithMessage(err.Error(), context)
		return
	}
	response.OkWithData(data, context)
}

func GetContactInfo(context *gin.Context) {
	id := context.Query("ownerid")
	// 获取id用户的详情信息
	data, err := contactService.GetContactInfo(id, model.CONCAT_CATE_USER)
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
	// 删除好友/群
	err = contactService.DelContact(c, model.CONCAT_CATE_USER)
	if err != nil {
		response.FailWithMessage(err.Error(), context)
		return
	}
	response.OkWithMessage("删除成功", context)
}

func AddCommunity(context *gin.Context) {

}

func GetCommunities(context *gin.Context) {
	id := context.Query("ownerid")
	// 查询用户群列表
	data, err := contactService.GetContacts(id, model.CONCAT_CATE_COMUNITY)
	if err != nil {
		response.FailWithMessage(err.Error(), context)
		return
	}
	response.OkWithData(data, context)
}

func GetCommunityInfo(context *gin.Context) {
	id := context.Query("ownerid")
	// 获取id用户的详情信息
	data, err := contactService.GetContactInfo(id, model.CONCAT_CATE_COMUNITY)
	if err != nil {
		response.FailWithMessage(err.Error(), context)
		return
	}
	response.OkWithData(data, context)
}

func DelCommunity(context *gin.Context) {
	var c reqModel.Contact
	err := context.ShouldBindJSON(&c)
	if err != nil {
		response.FailWithMessage("参数错误", context)
		return
	}
	// 删除好友/群
	err = contactService.DelContact(c, model.CONCAT_CATE_COMUNITY)
	if err != nil {
		response.FailWithMessage(err.Error(), context)
		return
	}
	response.OkWithMessage("删除成功", context)
}
