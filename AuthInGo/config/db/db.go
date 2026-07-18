package config

import (
	"database/sql"
	"fmt"

	env "AuthInGo/config/env"

	"github.com/go-sql-driver/mysql"
)

func SetupDB() (*sql.DB, error) {
  cfg := mysql.NewConfig()

  cfg.User = env.GetString("DB_USER", "root")
  cfg.Passwd = env.GetString("DB_PASSWORD", "")
  cfg.Net = "tcp"
  cfg.Addr = env.GetString("DB_ADDR", "127.0.0.1:3306")
  cfg.DBName = env.GetString("DB_NAME", "auth_dev")

  fmt.Println("Conneecting to database...")

  db, err := sql.Open("mysql", cfg.FormatDSN())
  if err != nil {
    fmt.Printf("Failed to connect to database: %v\n", err)
	return nil, err
  }

	
 fmt.Println("Trying to ping database...")
  pingErr := db.Ping()
  if pingErr != nil {
    fmt.Printf("Failed to ping database: %v\n", pingErr)
	return nil, pingErr
  }

  fmt.Println("Connected to database",cfg.DBName)

  return db, nil
}
