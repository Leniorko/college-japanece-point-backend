package db

import (
	"context"
	"log"
	"os"
	"time"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func Init() *mongo.Client {

	ctx, ctxCancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer ctxCancel()

	client, connectionError := mongo.Connect(ctx, options.Client().ApplyURI(os.Getenv("DATABASE")))
	if connectionError != nil {
		log.Fatalf("Error during CONNECTION: %v", connectionError)
	}

	pingError := client.Ping(ctx, nil)
	if pingError != nil {
		log.Fatalf("Error during PING: %v", pingError)
	}

	log.Default().Println("Sucsessfuly connected to MongoDB!")

	return client
}
