package request

import (
	"gorm.io/gorm"
	"web_chat/server/model"
)

// IsEmailExist 判断邮箱是否已经注册
func IsEmailExist(db *gorm.DB, email string) bool {
	var user model.User
	result := db.Where("email = ?", email).First(&user)
	if result.RowsAffected != 1 {
		return false
	}
	return true
}

// IsTelephoneVerity 验证手机号格式
func IsTelephoneVerity(telephone string) bool {
	if len(telephone) != 11 {
		return false
	}
	return true
}
