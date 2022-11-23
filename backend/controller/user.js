
const { v4: uuidv4 } = require('uuid');


const User = require('../models/user');



const createUser = async(req,res) =>{

    let user = new User();
    user.uid = uuidv4();
    user.email = req.body.email;
    user.name = req.body.name;
    user.type = req.body.type;

    try{
        await user.save();
    }catch(err){
        return res.status(500).json({"Message" : err.message});
    }


    return res.status(200).json({"Message":"User added"});
}

const listUser = async(req,res) =>{
    let showUser;
    try{
        showUser = await User.find({$or: [{type : "interviewer"},{type : "interviewee"}]});

    }catch(err){
        return res.status(500).json({"Message" : err.message});
    }

    return res.status(200).json(showUser);

}

const listUserById = async(req,res) =>{
    let uid  = req.params.id

    let showUser;
    try{
        showUser = await User.find({uid : uid});

    }catch(err){
        return res.status(500).json({"Message" : err.message});
    }

    return res.status(200).json(showUser[0]);
}



module.exports = {
    createUser,
    listUser,
    listUserById
}