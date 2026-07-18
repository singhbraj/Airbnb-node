package router

import (
	"github.com/go-chi/chi/v5"
	"AuthInGo/controllers"
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
  router.Post("/register", ur.UserController.RegisterUser)
}