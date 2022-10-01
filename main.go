package main

import( 
	"fmt"
	"net/http"
	"os"

	"github.com/joho/godotenv"
	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
	"github.com/unrolled/render"
)

func main(){
	godotenv.Load()
	router := chi.NewRouter()
	r := render.New()

	cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000", "https://girlsintech.netlify.app"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowCredentials: true,
	})

	router.Get("/", func(res http.ResponseWriter, req *http.Request){
		r.JSON(res, http.StatusOK, map[string]string{
			"message": "deployed on heroku",
		})
	})


	fmt.Println("start of project!")
	http.ListenAndServe(fmt.Sprintf(":%s", os.Getenv("PORT")), router)
}