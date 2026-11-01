const express=require("express")

const Products=express.Router()

const ProductController=require('../Controllers/ProductController')

Products.get('/products',ProductController.getProducts)

Products.get('/products/:id',ProductController.getProduct)


module.exports=Products