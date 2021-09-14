const router = require("express").Router();
const isLoggedIn = require("../middleware/isLoggedIn");
const Wanted = require("../models/Wanted.model");
const mongoose = require("mongoose");
const User = require("../models/User.model");
const Api = require("../services/ApiHandler");
const WantedApi = new Api()


router.get('/wanted',isLoggedIn,(req, res)=>{
    WantedApi
    .getAllWanted()
    .then((allWanted) => {
        /* console.log(allWanted.data.items) */
        res.render(`wanted`, {Wanted: allWanted.data.items})
        
    })
    .catch(err => console.log(err));
})


router.post("/add-favorite", isLoggedIn ,(req, res) =>{
    const query = { name, status, species, gender, image, apiId } = req.body
    const idToCheck = req.body.apiId;
        Character.find({apiId: idToCheck})
        .then (charArray => {
            //comprobar si ese apiId ya esta en db characters
            if (charArray.length === 0) {
                Character
                    .create(query)
                    .then(result => {
                      User
                        .findByIdAndUpdate(req.user._id,{$push : {favorites : result._id}})
                        .then(()=>{
                            res.redirect("/characters")
                        })
                    })
                    .catch(err => console.log(err))
            } else {
                User
                .findById(req.user._id)
                .then((user)=>{
                    if (!user.favorites.includes(charArray[0]._id)){
                        User
                        .findByIdAndUpdate(req.user._id,{$push : {favorites : charArray[0]._id}})
                        .then(()=>{
                            res.redirect("/characters")
                        })
                    }else{res.redirect("/characters")}
                })
                .catch((err)=>{
                console.log(err)
                })
                
                
                
            }
        }) 
    })


module.exports = router;