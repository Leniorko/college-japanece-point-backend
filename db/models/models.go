package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Game struct {
	ID              primitive.ObjectID `json:"_id,omitempty" bson:"_id,omitempy"`
	GameName        string             `json:"gameName"`
	GameID          string             `json:"id"`
	Developer       string             `json:"developer"`
	GameDescription string             `json:"gameDescription"`
	GamePrice       int                `json:"gamePrice"`
	Currency        string             `json:"currency"`
	IsInSale        bool               `json:"isInSale"`
	GameSalePrice   int                `json:"gameSalePrice"`
	Bought          bool               `json:"bought"`
	IsInCart        bool               `json:"isInCart"`
	HoursInGame     int                `json:"hoursInGame"`
	Images          struct {
		Vertical   []string `json:"vertical"`
		Horizontal []string `json:"horizontal"`
		Logo       string   `json:"logo"`
	} `json:"images"`
	Videos []string `json:"videos"`
}
