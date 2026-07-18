package env

import (
	"fmt"
	"os"
	"strconv"

	"github.com/joho/godotenv"
)

func Load() {
	err := godotenv.Load()
	if err != nil {
		fmt.Println("Error loading .env file")
		return
	}
}

func GetString(key string, fallback string) string {
	// load()
	value, exists := os.LookupEnv(key)
	if !exists {
		return fallback
	}
	return value
}

func GetInt(key string, fallback int) int {
	// load()
	value, exists := os.LookupEnv(key)
	if !exists {
		return fallback
	}

	num, err := strconv.Atoi(value)
	if err != nil {
		return fallback
	}
	return num
}

func GetBool(key string, fallback bool) bool {
	// load()
	value, exists := os.LookupEnv(key)
	if !exists {
		return fallback
	}
	boolValue, err := strconv.ParseBool(value)
	if err != nil {
		return fallback
	}
	return boolValue
}


