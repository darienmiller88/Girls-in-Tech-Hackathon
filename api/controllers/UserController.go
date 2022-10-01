package controllers

import (
	"Hackathon/api/database"
	"Hackathon/api/models"
	"net/http"

	"github.com/go-chi/chi"

	"gorm.io/gorm"

	"github.com/unrolled/render"
	// chi_render "github.com/go-chi/render"
)

type jsonBody map[string]interface{}

type UserController struct {
	r  render.Render
	db *gorm.DB
}

func (u *UserController) Init(){
	u.r  = *render.New()
	u.db =  database.GetDB()
}

func (u *UserController) GetUsers(res http.ResponseWriter, req *http.Request) {
	users := []models.User{}

	u.db.Find(&users)

	u.r.JSON(res, http.StatusOK, users)
}

func (u *UserController) GetUser(res http.ResponseWriter, req *http.Request){
	username := chi.URLParam(req, "username")
	user     := models.User{}

	u.db.Where("username = ?", username).Find(&user)

	u.r.JSON(res, http.StatusOK, user)
}

func (u *UserController) Signup(res http.ResponseWriter, req *http.Request){
	
}	

func (u *UserController) Signin(res http.ResponseWriter, req *http.Request){
	
}	