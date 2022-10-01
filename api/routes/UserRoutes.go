package routes

import(
	"github.com/go-chi/chi"

	"Hackathon/api/controllers"
)

type UserRoutes struct{
	Router *chi.Mux
	controller controllers.UserController
}

func (u *UserRoutes) Init(){
	u.Router = chi.NewRouter()
	u.controller.Init()

	u.Router.Get("/", u.controller.GetUsers)
	u.Router.Get("/{username}", u.controller.GetUser)
}