const express = require("express");
const router = express.Router();

const {setUserName} = require("../Controllers/setuserName");


router.post("/setusername",setUserName);

module.exports = router;



// localhost:3001/user/setusername