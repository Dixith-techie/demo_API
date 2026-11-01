const express=require("express")

const Users=express.Router()

const UserController=require('../Controllers/UserController')

Users.get('/users',UserController.getUsers)

Users.get('/users/:id',UserController.getUser)


module.exports=Users