const express=require("express")

const Users=express.Router()

const UserController=require('../Controllers/UserController')

Users.get('/users',UserController.getUsers)

Users.get('/users/:id',UserController.getUser)

Users.post('/users',UserController.postUser)

Users.put("/users/:id",UserController.putUser)

Users.delete('/users/:id',UserController.deleteUser)

module.exports=Users