package model

import "gorm.io/gorm"

// 好友 / 群聊
const (
	CONCAT_CATE_USER     = 0x01
	CONCAT_CATE_COMUNITY = 0x02
)

type Contact struct {
	gorm.Model
	Ownerid int64  `json:"ownerid" gorm:"not null;comment:消息来源的用户id"`
	Dstobj  int64  `json:"dstobj" gorm:"not null;comment:消息接受的用户id"`
	Cate    int    `json:"cate" gorm:"comment:判断消息是给用户还是群：0x01用户，0x02群"`
	Memo    string `json:"memo" gorm:"comment:发送的消息"`
}
