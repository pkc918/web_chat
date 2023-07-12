package service

import (
	"errors"
	"web_chat/server/db"
	"web_chat/server/model"
)

type UserService struct {
}

var DB = db.GetDB()

func (userService *UserService) Register(user model.User) (err error) {
	// 建表
	err = DB.AutoMigrate(&user)
	if err != nil {
		return err
	}
	// 查表，判断是否已经注册
	result := DB.Where("mobile = ?", user.Mobile).First(&user)
	if result.Error != nil {
		return result.Error
	}
	if result.RowsAffected != 1 {
		// 用户信息入库
		err = DB.Create(&user).Error
		if err != nil {
			return err
		}
		return nil
	}

	return errors.New("手机号已注册！")
}
