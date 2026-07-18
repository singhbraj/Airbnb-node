package main

import (
	"AuthInGo/app"
	DBconfig "AuthInGo/config/db"
	"AuthInGo/config/env"
	"fmt"
	"log"
)

func main() {
	env.Load()

	cfg := app.NewConfig()

	application := app.NewApplication(cfg)
    DBconfig.SetupDB()

	err := application.Run()
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Server stopped")
}
