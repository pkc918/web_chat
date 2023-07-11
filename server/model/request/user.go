package request

// Register User register structure
type Register struct {
	Email    string `json:"email"`
	Mobile   string `json:"mobile"`
	PassWord string `json:"passWord"`
	Avatar   string `json:"avatar"`
	Sex      byte   `json:"sex"`
	Nickname string `json:"nickname"`
}
