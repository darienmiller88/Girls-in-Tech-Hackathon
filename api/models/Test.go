package models

type Test struct{
	TestMessage string `json:"test_message" gorm:"type:string"`
}