package controllers

import (
	"Hackathon/api/database"
	"Hackathon/api/models"

	"net/http"

	chi_render "github.com/go-chi/render"
	"github.com/unrolled/render"
	"gorm.io/gorm"
)

type TestController struct {
	r  render.Render
	db *gorm.DB
}

func (t *TestController) Init(){
	t.r  = *render.New()
	t.db =  database.GetDB()
}

func (t *TestController) PostTest(res http.ResponseWriter, req *http.Request){
	test := models.Test{}

	if err := chi_render.DecodeJSON(req.Body, &test); err != nil{
		t.r.JSON(res, http.StatusInternalServerError, jsonBody{"err": err.Error()})
		return
	}

	t.db.Create(&test)

	t.r.JSON(res, http.StatusOK, test)
}

func (t *TestController) GetTests(res http.ResponseWriter, req *http.Request){
	tests := []models.Test{}

	t.db.Find(&tests)

	t.r.JSON(res, http.StatusOK, tests)
}