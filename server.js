const express=require("express")
require("dotenv").config()
const ProductsRoutes=require("./Routes/Products")
const UsersRoutes=require('./Routes/Users')
const path=require('path')

const app=express()
app.use(express.json())


app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"Templates","index.html"))
})


app.use("/api",ProductsRoutes)
app.use("/api",UsersRoutes)

const PORT=process.env.PORT || 3000
app.listen(PORT,"0.0.0.0",()=>{
    console.log(`Server running in local on http://localhost:${PORT}`)
})