const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const Wanted = require("../models/Wanted.model");
const mongoose = require("mongoose");
const User = require("../models/User.model");
const Api = require("../services/ApiHandler");
const WantedApi = new Api()


router.get('/wanted',(req, res)=>{
    WantedApi
    .getAllWanted()
    .then((allWanted) => {
        console.log(allWanted.data.items)
        res.render(`wanted`, {Wanted: allWanted.data.items} )
    
    })
    .catch(err => console.log(err));
    
    
    
})

module.exports = router;