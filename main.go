package main

import (
	"college-japanece-point-backend/db"
	"college-japanece-point-backend/route"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"
)

func main() {
	envLoadError := godotenv.Load()
	if envLoadError != nil {
		log.Fatalln(envLoadError)
	}
	dbClient := db.Init()
	log.Default().Println(dbClient)

	r := route.Router()
	http.ListenAndServe(":"+os.Getenv("PORT"), r)
}
