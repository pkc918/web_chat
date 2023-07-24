package model

import "gorm.io/gorm"

type Community struct {
	gorm.Model
	Name    string `json:"name" gorm:"varchar(30);comment:群或好友名称"`
	Ownerid int64  `json:"ownerid" gorm:"not null;comment:消息来源的用户id"`
	Icon    string `json:"icon" gorm:"comment:图标"`
	Cate    int    `json:"cate" gorm:"comment:判断是群还是好友"`
	Memo    string `json:"memo" gorm:"comment:描述"`
}

const (
	COMMUNITY_CATE_COM = 0x01
)
