package controller

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

func Register(context *gin.Context) {
	// 做参数判断和结果返回，设计数据库操作，都调用 service 内封装的方法
	context.JSON(http.StatusOK, gin.H{
		"code": 200,
		"msg":  "注册成功",
	})
}
