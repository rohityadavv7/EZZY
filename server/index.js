const express = require("express");
const app = express();
require("dotenv").config();
const database = require("./config/database"); 
const cors = require("cors");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 4000

app.use(cookieParser())
app.use(express.json());
app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true
    })
);

//routes le ao
const todoroutes = require("./routes/todos");

//MOUNTING
app.use("/api/v1", todoroutes);

app.use(cookieParser())
app.use(express.json());
app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true
    })
);

app.get("/", (req,res) => {
    return res.json({
        success:true,
        message:"Your server is up and running..."
    })
})

//server ko live krdo
app.listen(PORT, () => {
    console.log("app is running successfully!");
})

//database se connetion
database.connect();
