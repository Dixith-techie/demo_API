const express=require("express")

const Products=express.Router()

const ProductController=require('../Controllers/ProductController')

Products.get('/products',ProductController.getProducts)

Products.get('/products/:id',ProductController.getProduct)

Products.post('/products',ProductController.postProduct)

Products.put("/products/:id",ProductController.putProduct)

Products.delete("/products/:id",ProductController.deleteProduct)


module.exports=Products