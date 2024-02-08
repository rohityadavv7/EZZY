// const express = require("express");
// const router = express.Router();

// const {createTodo} = require("../controllers/createTodo");
// // const {login} = require("../controllers/login");
// // const {signup} = require("../controllers/signup");

// router.post("/createTodo", createTodo);
// // router.post("/login", login);
// // router.post("signup", signup);

// module.exports = router;

const express  = require("express");
const router = express.Router();

//import controller
const {createTodo} = require("../controllers/createTodo");
const {signup} = require("../controllers/signup");
const {login} = require("../controllers/login");
const { getTodos } = require("../controllers/getTodos");

//define APi routes
router.post("/createTodo", createTodo);
router.post("/signup", signup);
router.post("/login", login);
router.get("/getTodos",getTodos);

module.exports = router;