package routes

import(
	"github.com/go-chi/chi"

	"Hackathon/api/controllers"
)

type TestRoutes struct{
	Router *chi.Mux
	controller controllers.TestController
}

func (t *TestRoutes) Init(){
	t.Router = chi.NewRouter()
	t.controller.Init()

	t.Router.Get("/", t.controller.GetTests)
	t.Router.Post("/", t.controller.PostTest)
}