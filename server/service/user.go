package service

import (
	"errors"
	"web_chat/server/db"
	"web_chat/server/model"
	reqModel "web_chat/server/model/request"
)

type UserService struct {
}

func (userService *UserService) Register(user model.User) (err error) {
	var DB = db.GetDB()
	// 建表
	err = DB.AutoMigrate(&user)
	if err != nil {
		return err
	}
	// 查表，判断是否已经注册
	result := DB.Where("email = ?", user.Email).First(&user)
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

func (userService *UserService) SignIn(signIn reqModel.SignIn) (err error) {
	var DB = db.GetDB()
	var user model.User
	// 查表
	result := DB.Where("email = ?", signIn.Email).First(&user)
	// 没查到
	if result.Error != nil {
		return result.Error
	}
	// 对比密码
	if signIn.PassWord == user.PassWord {
		// 返回登录数据
		return nil
	}
	return errors.New("密码错误！")
}
