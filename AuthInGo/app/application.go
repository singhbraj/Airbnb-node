package app

import (
	"fmt"
	"net/http"
	"time"

	"AuthInGo/config/env"
	db "AuthInGo/db/repositories"
	"AuthInGo/router"
	"AuthInGo/controllers"
	"AuthInGo/services"
)

// Config holds the configuration for the application
type Config struct {
	Addr string
}

type Application struct {
	Config Config
	Store  *db.Storage
}

// Constructor for the Config struct
func NewConfig() Config {
	port := env.GetString("PORT", ":8080")

	return Config{
		Addr: port,
	}
}

// Constructor for the Application struct
func NewApplication(config Config) *Application {
	return &Application{
		Config: config,
		Store:  db.NewStorage(),
	}
}

func (app *Application) Run() error {

	ur := db.NewUserRepository()
	us := services.NewUserService(ur)
	uc := controllers.NewUserController(us)
	uRouter := router.NewUserRouter(uc)

	server := &http.Server{
		Addr:         app.Config.Addr,
		Handler:      router.SetupRoutes(uRouter),
		ReadTimeout:  10 * time.Second,
		WriteTimeout: 30 * time.Second,
		IdleTimeout:  30 * time.Second,
	}

	fmt.Println("Starting server on", app.Config.Addr)

	return server.ListenAndServe()
}
