const GlobalErrorHandler=(err,req,res,next)=>{
console.log(err)
let status=err.statusCode || 500;
let Message=err.message || "Internal server error occured!"

res.status(status).json({
    success:false,
    message:Message
})
}


module.exports=GlobalErrorHandler;