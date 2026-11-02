const NotFound404=(req,res,next)=>{
const error=new Error(`Route not found:${req.path}`)
error.statusCode=404;
next(error)
}

module.exports=NotFound404;