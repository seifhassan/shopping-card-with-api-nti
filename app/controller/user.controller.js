const userModel = require("../../database/models/user.model")

class User{
    static register = async(req,res)=>{
        try{
            const userData = new userModel(req.body)
            await userData.save()
            
            res.status(200).send({
                apiStatus:true,
                data: userData,
                message:"registered"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
        }
    }
    static login = async(req, res)=>{
        try{
            const userData = await userModel.login(req.body.email, req.body.password)
            const token = await userData.generateToken()
            res.status(200).send({
                apiStatus:true,
                data: {user:userData,token},
                message:"registered"
            })
        }
        catch(e){
            res.status(500).send({
                apiStatus:false,
                data:e,
                message:e.message
            })
    }
}}

module.exports = User