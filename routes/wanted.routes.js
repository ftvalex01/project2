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
        //res.send(allWanted.data)
    })
    .catch(err => console.log(err));
})


router.post("/add-favorite", isLoggedIn ,(req, res) =>{
const query = ({
        aliases,
        description,
        dates_of_birth_used,
        hair,
        weight,
        heigth,
        occupations,
        remarks,
        nationality,
        title,
        subject,
        reward_text,
        field_offices,
        image,
        uid,
    }=req.body); 
   


    
    const userID = req.session.user._id;
    const idToCheck = req.body.uid
  
Wanted.find({uid: idToCheck})
    .then((wantedArr)=>{
        if(wantedArr.length === 0){
            Wanted.create(query)
            .then((result)=>{
                User.findByIdAndUpdate(userID,{$push:{favorites:result.id}})
                
                .then(()=>{
                    res.redirect('/follow-list')
                    //res.render('follow-list',{wanted:wanted})
                    //res.send(wanted)
                })
            })
        }else{
            User.findById(userID)
            .then((user)=>{
                if(!user.favorites.includes(wantedArr[0]._id)){
                   User.findByIdAndUpdate(userID,{$push:{favorites:wantedArr[0]._id}}) 
                   .then(()=>{
                       
                       res.redirect('/follow-list')
                   })
                }
            })
        } 
    })
})


module.exports = router;