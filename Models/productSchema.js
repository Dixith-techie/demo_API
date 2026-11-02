const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:Number,
        required:true,
        lowercase:true
    },
    inStock:{
        type:Boolean,
        required:true
    }
})


module.exports=mongoose.model("Product",productSchema)