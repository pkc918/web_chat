package controller

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"web_chat/server/db"
	"web_chat/server/model"
	reqModel "web_chat/server/model/request"
)

func Register(context *gin.Context) {
	var r reqModel.Register
	var user model.User

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

	// 多前端传递过来的注册数据做数据库处理
	// 1. 用户是否已经注册

	DB := db.GetDB()
	err = DB.AutoMigrate(&user)
	if err != nil {
		return
	}
	result := DB.Where("mobile = ?", r.Mobile)
	if result.RowsAffected != 1 {
		// 不存在用户
		// 3. 注册成功，入库
		user = model.User{
			Email:    r.Email,
			Mobile:   r.Mobile,
			PassWord: r.PassWord,
			Avatar:   r.Avatar,
			Sex:      r.Sex,
			Nickname: r.Nickname,
		}

		DB.Create(&user)
		// 做参数判断和结果返回，设计数据库操作，都调用 service 内封装的方法
		context.JSON(http.StatusOK, gin.H{
			"code": 200,
			"msg":  "注册成功",
		})
	}
	// 存在用户报已经注册
}
