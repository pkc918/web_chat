package request

// Register User register request structure
type Register struct {
	Email    string `json:"email"`
	Mobile   string `json:"mobile"`
	PassWord string `json:"password"`
	Avatar   string `json:"avatar"`
	Sex      byte   `json:"sex"`
	Nickname string `json:"nickname"`
}

// SignIn User signIn request structure
type SignIn struct {
	Mobile   string `json:"mobile"`
	Email    string `json:"email"`
	PassWord string `json:"password"`
}
