const UsersDB=require('../DB/Users.json')

const Users=UsersDB.users

const getUsers=(req,res)=>{
    res.status(200).json({"success":true, "data":Users})
}

const getUser=(req,res)=>{
    const Id=Number(req.params.id);
    const user=Users.find(ele=>ele.id===Id);
    if(user){
        res.status(200).json({"success":true, "data":user})
    }
    else{
        res.status(404).json({"success":false, "message":"User not found!"})
    }
}
module.exports={getUsers,getUser}