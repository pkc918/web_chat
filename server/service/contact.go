package service

import (
	"errors"
	"gorm.io/gorm"
	"web_chat/server/db"
	"web_chat/server/model"
	reqModel "web_chat/server/model/request"
)

type ContactService struct {
}

func (contactService *ContactService) AddContact(cont reqModel.Contact, cate int) (err error) {
	var contact model.Contact
	result := db.DB.Where("ownerid = ? AND dstobj = ? AND cate = ?", cont.Ownerid, cont.Dstobj, cate).First(&contact)
	if result.RowsAffected == 1 {
		return errors.New("用户已经是好友了！")
	}
	// 开启事务
	err = db.DB.Transaction(func(tx *gorm.DB) error {
		// 将 2 设置为 1 的好友
		if err := tx.Create(&model.Contact{
			Ownerid: cont.Ownerid,
			Dstobj:  cont.Dstobj,
			Cate:    cate,
		}).Error; err != nil {
			return err
		}

		// 将 1 设置为 2 的好友
		if err := tx.Create(&model.Contact{
			Ownerid: cont.Dstobj,
			Dstobj:  cont.Ownerid,
			Cate:    cate,
		}).Error; err != nil {
			return err
		}
		// 提交事务
		return nil
	})
	if err != nil {
		return err
	}
	// 成功
	return nil
}

func (contactService *ContactService) GetContacts(id string, cate int) (contacts []model.Contact, err error) {
	if err = db.DB.Where("ownerid = ? AND cate = ?", id, cate).Find(&contacts).Error; err != nil {
		return nil, nil
	}
	return contacts, nil
}

func (contactService *ContactService) DelContact(cont reqModel.Contact, cate int) (err error) {
	var contact model.Contact
	result := db.DB.Where("ownerid = ? AND dstobj = ?", cont.Ownerid, cont.Dstobj).First(&contact)
	if result.RowsAffected != 1 {
		return errors.New("你们已经不是好友了")
	}
	// 开启事务
	err = db.DB.Transaction(func(tx *gorm.DB) error {
		if err := tx.Where("ownerid = ? AND dstobj = ? AND cate = ?", cont.Ownerid, cont.Dstobj, cate).Delete(&model.Contact{}).Error; err != nil {
			return err
		}

		if err := tx.Where("ownerid = ? AND dstobj = ? AND cate = ?", cont.Dstobj, cont.Ownerid, cate).Delete(&model.Contact{}).Error; err != nil {
			return err
		}
		return nil
	})
	if err != nil {
		return err
	}
	return nil
}

func (contactService *ContactService) GetContactInfo(id string, cate int) (user model.User, err error) {
	if err = db.DB.Where("id = ? AND cate = ?", id, cate).Find(&user).Error; err != nil {
		return model.User{}, nil
	}
	return user, nil
}
