package main

import (
	"college-japanece-point-backend/db"
	"log"

	"github.com/joho/godotenv"
)

func main() {
	envLoadError := godotenv.Load()
	if envLoadError != nil {
		log.Fatalln(envLoadError)
	}
	db.Init()
}
