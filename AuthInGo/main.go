package main

import (
	"AuthInGo/app"
	"AuthInGo/config/env"
	"fmt"
	"log"
)

func main() {
	env.Load()

	cfg := app.NewConfig()

	application := app.NewApplication(cfg)

	err := application.Run()
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Server stopped")
}
