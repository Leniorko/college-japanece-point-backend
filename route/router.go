package route

import (
	"log"
	"net/http"

	"github.com/gorilla/mux"
)

func Router() *mux.Router {
	router := mux.NewRouter()

	router.HandleFunc("/", routerTest).Methods("GET")

	return router
}

func routerTest(http.ResponseWriter, *http.Request) {
	log.Default().Println("Home hited")
}
