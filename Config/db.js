const mongoose=require('mongoose')


const connectDB= async ()=>{
try{
    await mongoose.connect(process.env.MONGO_DB_URI)
    console.log("Mongo DB server connected successfully!")
}
catch(error){
    console.error(`An error occured! Failed to connect with DataBase:${error}`);
    process.exit(1);
}
}


module.exports=connectDB;