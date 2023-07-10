package main

import (
	"database/sql"
	"web_chat/server/initialize"
	"web_chat/server/router"

	"github.com/gin-gonic/gin"
)

func main() {
	var port string
	initialize.InitConfig()

	initPort := initialize.GetPort()
	db := initialize.InitDb()
	sqlDb, _ := db.DB()
	defer func(sqlDb *sql.DB) {
		_ = sqlDb.Close()
	}(sqlDb)

	r := gin.Default()
	r = router.CollectRoute(r)
	if initPort != "" {
		port = ":" + initPort
	}
	panic(r.Run(port)) // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
