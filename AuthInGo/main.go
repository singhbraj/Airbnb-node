package main

import (
	"AuthInGo/app"
	"fmt"
	"log"
)

func main() {
	cfg := app.Config{
		Addr: ":3001",
	}

	application := &app.Application{
		Config: cfg,
	}

	err := application.Run()
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Server stopped")
}
