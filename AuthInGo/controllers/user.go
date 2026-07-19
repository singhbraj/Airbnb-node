package controllers

import (
	"AuthInGo/services"
	"net/http"
	"fmt"
)

type UserController struct {
	UserService services.UserService
}

func NewUserController(_userService services.UserService) *UserController {
	return &UserController{
		UserService: _userService,
	}
}

func (uc *UserController) GetUserById(w http.ResponseWriter, r *http.Request) {
	uc.UserService.GetUserById()
	w.Write([]byte("User fetched successfully"))
}

func (uc *UserController) CreateUser(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Creating user in user controller")
	uc.UserService.CreateUser()
	w.Write([]byte("User created successfully"))
}


func (uc *UserController) LoginUser(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Login user in user controller")
	uc.UserService.LoginUser()
	w.Write([]byte("Login successful"))
}
