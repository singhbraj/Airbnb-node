package router

import (
	"AuthInGo/controllers"
	"github.com/go-chi/chi/v5"
)

type Router interface {
  Register(router *chi.Mux)
}

func SetupRoutes(UserRouter Router) *chi.Mux {
	// Initialize Chi router
	chiRouter :=  chi.NewRouter()

	chiRouter.Get("/ping", controllers.Ping)

	UserRouter.Register(chiRouter)

	return chiRouter
}