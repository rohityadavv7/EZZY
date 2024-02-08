const User = require("../models/User")
const bcrypt = require("bcrypt");

exports.signup = async(req,res)=> {
    try{
        console.log("in signup")

        //req body se data nikaal lo
        const{firstName, lastName,email,password,confirmPassword} = req.body;

        //validation'
        if(!firstName || !lastName || !email || !password || !confirmPassword){
            return res.status(401).json({
                success:false,
                message:"All fields mendatory"
            })
        }

        //check if user already exists
        const checkUser = await User.findOne({email});
        if(checkUser){
            return res.status(403).json({
                success:false,
                message:"User already registered, Please log In too your account!"
            })
        }

        let hashedPassword = await bcrypt.hash(password, 10);

        const userDetails = await User.create({
            firstName:firstName,
            lastName:lastName,
            email:email,
            password:hashedPassword,
            image:`https://api.dicebear.com/7.x/thumbs/svg`
        });

        console.log("PPRINTING USER DETAILS....", userDetails);
        
        return res.status(200).json({
            success:true,
            message:"User created successfully!",
            userDetails
        })



    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Cannot log in user, please try again later!"
        })
    }
}