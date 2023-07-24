package service

import (
	"errors"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
	"web_chat/server/db"
	"web_chat/server/model"
	reqModel "web_chat/server/model/request"
	"web_chat/server/utils/request"
)

type UserService struct {
}

func (userService *UserService) Register(register reqModel.Register) (err error) {
	var DB = db.GetDB()
	var user model.User
	// 判断用户是否已经存在
	if request.IsEmailExist(DB, register.Email) {
		return errors.New("手机号已注册！")
	}
	// 校验手机号，邮箱格式是否正确
	if !request.IsTelephoneVerity(register.Mobile) {
		return errors.New("手机号格式不正确！")
	}
	// 密码加密
	password, err := bcrypt.GenerateFromPassword([]byte(register.PassWord), bcrypt.DefaultCost)
	if err != nil {
		return err
	}
	user = model.User{
		Email:    register.Email,
		Mobile:   register.Mobile,
		Avatar:   register.Avatar,
		Sex:      register.Sex,
		Nickname: register.Nickname,
		PassWord: string(password),
	}
	// 用户信息入库
	err = DB.Create(&user).Error
	if err != nil {
		return err
	}
	return nil
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
	err = bcrypt.CompareHashAndPassword([]byte(user.PassWord), []byte(signIn.PassWord))
	if err != nil {
		return err
	}
	return nil
}

func (userService *UserService) AddCont(cont reqModel.Contact) (err error) {
	var contact model.Contact
	result := db.DB.Where("ownerid = ? AND dstobj = ? AND cate = ?", cont.Ownerid, cont.Dstobj, model.CONCAT_CATE_USER).First(&contact)
	if result.RowsAffected == 1 {
		return errors.New("用户已经是好友了！")
	}
	// 开启事务
	_ = db.DB.Transaction(func(tx *gorm.DB) error {
		// 将 2 设置为 1 的好友
		if err := tx.Create(&model.Contact{
			Ownerid: cont.Ownerid,
			Dstobj:  cont.Dstobj,
			Cate:    model.CONCAT_CATE_USER,
		}).Error; err != nil {
			return err
		}

		// 将 1 设置为 2 的好友
		if err := tx.Create(&model.Contact{
			Ownerid: cont.Dstobj,
			Dstobj:  cont.Ownerid,
			Cate:    model.CONCAT_CATE_USER,
		}).Error; err != nil {
			return err
		}
		// 提交事务
		return nil
	})
	// 成功
	return nil
}
