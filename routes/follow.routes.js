const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const Wanted = require("../models/Wanted.model");
const mongoose = require("mongoose");
const User = require("../models/User.model");
const Api = require("../services/ApiHandler");
const wantedApi = require("../services/ApiHandler");
const WantedApi = new Api()



router.get("/follow-list",isLoggedIn,(req,res)=>{
    const isLogin = !!req.session.user 
    res.render("../views/follow-list.hbs", {
      isLogin
    });
  }); 

module.exports = router;