package main

import (
	"fmt"
	"net/http"
	"os"

	"Hackathon/api/routes"
	"Hackathon/api/database"

	"github.com/go-chi/chi"
	"github.com/go-chi/chi/middleware"
	"github.com/go-chi/cors"
	"github.com/joho/godotenv"
	"github.com/unrolled/render"
)

func main(){
	godotenv.Load("./env/.env")
	database.InitDB()

	index  := routes.Index{}
	router := chi.NewRouter()
	r      := render.New()

	newCors := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000", "https://girlsintech.netlify.app"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowCredentials: true,
	})

	index.Init()
	router.Use(newCors.Handler)
	router.Use(middleware.Logger)

	router.Mount("/api/v1", index.Router)
	router.Get("/", func(res http.ResponseWriter, req *http.Request){
		r.JSON(res, http.StatusOK, map[string]string{
			"message": "deployed on heroku",
		})
	})

	fmt.Println("Listening on port:", os.Getenv("PORT"))
	http.ListenAndServe(fmt.Sprintf(":%s", os.Getenv("PORT")), router)
}