package routes

import(
	"github.com/go-chi/chi"

	"Hackathon/api/controllers"
	"Hackathon/api/middlewares"
)

type TestRoutes struct{
	Router *chi.Mux
	controller controllers.TestController
}

func (t *TestRoutes) Init(){
	t.Router = chi.NewRouter()
	t.controller.Init()

	t.Router.With(middlewares.Auth).Get("/", t.controller.GetTests)
	t.Router.With(middlewares.Auth).Post("/", t.controller.PostTest)
}