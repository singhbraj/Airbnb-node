package router

import (
	"AuthInGo/controllers"

	"github.com/go-chi/chi/v5"
)

type UserRouter struct {
	UserController *controllers.UserController
}

func NewUserRouter(_userController *controllers.UserController) Router {
	return &UserRouter{
		UserController: _userController,
	}
}

func (ur *UserRouter) Register(router *chi.Mux) {
	router.Get("/profile", ur.UserController.GetUserById)
	router.Post("/signup", ur.UserController.CreateUser)
	router.Post("/login", ur.UserController.LoginUser)
}
