package main

import (
	"log"

	"github.com/joho/godotenv"
)

func main() {
	envLoadError := godotenv.Load()
	if envLoadError != nil {
		log.Fatalln(envLoadError)
	}
}
