package db

import (
	"fmt"
	"github.com/spf13/viper"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/schema"
	"web_chat/server/model"
)

var DB *gorm.DB

func InitDb() *gorm.DB {
	driverName := viper.GetString("datasource.driverName")
	host := viper.GetString("datasource.host")
	port := viper.GetString("datasource.port")
	database := viper.GetString("datasource.database")
	username := viper.GetString("datasource.username")
	password := viper.GetString("datasource.password")
	charset := viper.GetString("datasource.charset")
	args := fmt.Sprintf("%s:%s@tcp(%s:%s)/%s?charset=%s&parseTime=true&loc=Local", username, password, host, port, database, charset)
	db, err := gorm.Open(mysql.New(mysql.Config{
		DriverName: driverName,
		DSN:        args,
	}), &gorm.Config{
		NamingStrategy: schema.NamingStrategy{
			SingularTable: true,
		},
	})
	if err != nil {
		panic("failed to connect database, err: " + err.Error())
	}
	autoMigrate(db)
	DB = db
	return db
}

func GetDB() *gorm.DB {
	return DB
}

func autoMigrate(DB *gorm.DB) {
	err := DB.AutoMigrate(&model.User{}, &model.User{}, &model.Community{})
	if err != nil {
		panic(err.Error())
	}
}
