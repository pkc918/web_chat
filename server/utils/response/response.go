package response

import (
	"github.com/gin-gonic/gin"
	"net/http"
)

type Response struct {
	Code int         `json:"code"`
	Data interface{} `json:"data"`
	Msg  string      `json:"msg"`
}

const (
	ERROR   = 7
	SUCCESS = 0
)

// Result 统一的返回
func Result(code int, data interface{}, msg string, context *gin.Context) {
	context.JSON(http.StatusOK, Response{
		code,
		data,
		msg,
	})
}

// Ok 普通操作成功返回
func Ok(context *gin.Context) {
	Result(SUCCESS, map[string]interface{}{}, "操作成功", context)
}

// OkWithMessage 自定义成功返回 message
func OkWithMessage(message string, context *gin.Context) {
	Result(SUCCESS, map[string]interface{}{}, message, context)
}

// OkWithData 自定义成功返回 data
func OkWithData(data interface{}, context *gin.Context) {
	Result(SUCCESS, data, "查询成功", context)
}

// OkWithDetailed 自定义成功 result
func OkWithDetailed(data interface{}, message string, context *gin.Context) {
	Result(SUCCESS, data, message, context)
}

// Fail 普通操作失败返回
func Fail(context *gin.Context) {
	Result(ERROR, map[string]interface{}{}, "操作失败", context)
}

// FailWithMessage 普通操作失败返回
func FailWithMessage(message string, context *gin.Context) {
	Result(ERROR, map[string]interface{}{}, message, context)
}

// FailWithDetailed 自定义成功 result
func FailWithDetailed(data interface{}, message string, context *gin.Context) {
	Result(ERROR, data, message, context)
}
