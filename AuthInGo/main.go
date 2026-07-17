package main

import (
	"AuthInGo/app"
	"fmt"
	"log"
)

func main() {
	cfg := app.NewConfig(":3001")

	application := app.NewApplication(cfg)

	err := application.Run()
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Server stopped")
}
