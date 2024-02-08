
const Todo = require("../models/todo")
const User = require("../models/User")

exports.getTodos = async(req,res) => {
    try{

        console.log("in gettodos")


        // console.log("PRINTING EMAIL IN TODOS...",email);

        //find kro user ko
        const userDetails = await User.find({},{
            firstName:true,
            lastName:true,
            email:true,
            image:true,
            password:true,
            todoCreated:true
        }).populate("todoCreated").exec();

        if(!userDetails){
            return res.status(403).json({
                success:false,
                message:"User details not found"

            })
        }

        console.log("PRINTING USER DETAILS...",userDetails);

        return res.status(200).json({
            success:true,
            message:"user details fetched successfully",
            userDetails
        })
    }
    catch(error){
        console.log(error);
        return res.status(500).json({
            success:false,
            message:"Could not fetch todos, try again later!!"
        })
    }
}