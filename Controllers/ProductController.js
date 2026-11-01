const ProductsDB=require("../DB/Products.json")
const Products=ProductsDB.products;

const getProducts=(req,res)=>{
const sortBy=req.query.sortBy;
const sort=Number(req.query.sort);

let sortedProduct=[...Products];

if(sortBy==="price"){
    if(sort===1){
        sortedProduct.sort((prev,next)=>{
        return prev.price-next.price
    
    })
}
    else{
        sortedProduct.sort((prev,next)=>{
        return next.price-prev.price
    })
    }
}
else if(sortBy==="stock"){
    if(sort===1){
        sortedProduct.sort((prev,next)=>{
        return prev.stock-next.stock
    })
    }
    else{
        sortedProduct.sort((prev,next)=>{
        return next.stock-prev.stock
    })
    }
}

res.status(200).json({"success":true,"data":sortedProduct})
}

const getProduct=(req,res)=>{
const Id=Number(req.params.id);

let product=Products.find((val,ind)=>{
    return val.id===Id
})

if(product){
    res.status(200).json({"success":true,
    "data":product})
}
else{
    res.status(404).json({"success":false,
        "message":"Item not found!"})
}
}

module.exports={getProducts,getProduct}