const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt")
require("dotenv").config();
const cookie = require("cookie");


exports.login = async(req,res) => {
    try{
        //details leke ao
        const {email, password} = req.body;

        //validate
        if(!email || !password){
            return res.status(401).json({
                success:false,
                message:"all fields mendatory!"
            })
        }

        //check for user
        const checkUser = await User.findOne({email});

        if(!checkUser){
            return res.status(402).json({
                success:false,
                message:"User not registered, sign up first"
            })
        }

        //password verify krlo and then token create krlo
        if(bcrypt.compare(password, checkUser.password)){
            //payload bnalo
            const payload = {
                email:checkUser.email,
                id:checkUser._id
            }

            //token bnalo
            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn:"24hr"
            })

            //user m token daldo
            checkUser.token = token,
            checkUser.password = undefined

            //token k lie cookie bnalo
            const options = {
                expires : new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly:true
            }

            console.log("PRINTING USER DETAILS.....", checkUser);
            
            res.cookie("token", token, options).status(200).json({
                success:true,
                message:"user logged in successfully!",
                token,
                checkUser
            })

        }else{
            return res.status(403).json({
                success:false,
                message:"Something went wrong, try again later!"
            })
        }
        
    }catch(error){
        console.log(error)
        return res.status(500).json({
            success:false,
            message:"Cannot log in, try again!"
            
        })
    }
}