const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const Wanted = require("../models/Wanted.model");
const mongoose = require("mongoose");
const User = require("../models/User.model");
const Api = require("../services/ApiHandler");
const wantedApi = require("../services/ApiHandler");
const WantedApi = new Api()


router.get("/follow-list",isLoggedIn,(req,res)=>{
    const userID = req.session.user._id;
    const isLogin = !!req.session.user 
    User.findById(userID)
    .populate("favorites")
    .then((result)=>{
    res.render("follow-list", {
        isLogin,result
       });  
    })
    
  }); 

  router.get('/follow-details/:id',(req,res)=>{
    const id = req.params.id;
    Wanted
    .findById(id)
    .then(wanted =>{
          //res.send(wanted)
        res.render('follow-details',{wanted})
    })
    .catch(error =>{
        console.log('Error while getting the id',error)
    })
})
router.get('/follow-details/:id/delete', (req, res, next) => {
  const id = req.params.id;
  
  Wanted.findByIdAndDelete(id)
    .then(() => res.redirect('/follow-list'))
    .catch(error => next(error));
});




module.exports = router;