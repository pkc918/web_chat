package service

import (
	"errors"
	"web_chat/server/db"
	"web_chat/server/model"
)

type UserService struct {
}

func (userService *UserService) Register(user model.User) (err error) {
	// 多前端传递过来的注册数据做数据库处理
	// 1. 用户是否已经注册
	DB := db.GetDB()
	err = DB.AutoMigrate(&user)
	if err != nil {
		return err
	}

	result := DB.Where("mobile = ?", user.Mobile).First(&user)
	if result.Error != nil {
		return result.Error
	}
	if result.RowsAffected != 1 {
		// 不存在用户
		// 3. 注册成功，入库
		err = DB.Create(&user).Error
		if err != nil {
			return err
		}
		return nil
	}
	return errors.New("手机号已注册！")
}
