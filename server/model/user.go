package model

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Email    string `json:"email" gorm:"not null;unique;comment:用户邮箱"`
	Mobile   string `json:"mobile" gorm:"varchar(20);not null;unique;comment:用户手机号"`
	PassWord string `json:"password" gorm:"size:255;not null;comment:用户登录密码"`
	Avatar   string `json:"avatar" gorm:"comment:用户头像url"`
	Sex      byte   `json:"sex" gorm:"comment:性别：{0: 女，1: 男，2: 未知}"`
	Nickname string `json:"nickname" gorm:"default:未设置昵称;comment:用户昵称"`
	Enable   int    `json:"enable" gorm:"default:1;comment:用户是否被冻结 1正常 2冻结"`
}
