
const  User  = require("../models/User");
const Todo = require("../models/todo");

exports.createTodo = async(req,res)=> {
    try{
        console.log("creating todo")
        const {title, description, email} = req.body;
        console.log("EMAIL...", email);
        // const email = req.checkUser.email;
        // console.log("user details...", email);
        // console.log("in todo")
        // console.log("TOKEN...", usertoken)

        if(!title || !description){
            return res.statu(401).json({
                success:false,
                message:"All Fields Required!"
            })
        }

        

        const result = await Todo.create({
            title:title,
            description:description
        })

        //user details leke aao an usme todo ki entry dalo
        const user = await User.findOneAndUpdate({email:email},{
            $push:{
                todoCreated:result._id
            }
        },{new:true});

        console.log("USER DETAILS...", user);

        console.log("PRINTING RESULT...", result);
        return res.status(200).json({
            success:true,
            message:"Todo created suucessfully!",
        })

    }
    catch(error){
        return res.status(500).json({
            success:false,
            message:"cannot create Todo...try again later!"
        })
    }
}
