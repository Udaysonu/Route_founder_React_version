

const router=require("express").Router();
const userConroller=require("../controllers/userController.js")
const passport=require("../config/passport")
const jwt=require('jsonwebtoken');
const User =require("../models/usermodel");
const { json } = require("body-parser");
router.post("/signup",userConroller.createuser);
router.post("/logout",userConroller.logout);
router.get("/checkauth",userConroller.checkAuth)
// router.post("/signin",passport.authenticate('local',{
//     failureRedirect:"back"
// }),userConroller.checkAuth)
 

router.post('/getuser',authenticationTocken)
router.post('/signin',(req,res)=>{
    console.log("got request",req.body,'sd')

    const username=req.body.username;
    const password=req.body.password;
     User.findOne(req.body,(err,user)=>{
        console.log(user)
        if(user!=null)
        {console.log("entered")
             accessToken= jwt.sign(JSON.stringify([user]),"welcome")
             console.log("returned")
          return res.json({token:accessToken})
        }
    })
    
})



  function authenticationTocken(req,res){
    const authHeader=req.body.headers['Authorization']
    console.log("error cccccccccccccccccccccccccccc",authHeader)
    const token=authHeader 
     if(token==null)return res.sendStatus(401);
    jwt.verify(token,"welcome",(err,user)=>{
        var str = user;
        // console.log(user,err,'hhhhhhhhhhhhhhhhhhhhhhhhhh');
        // var obj =  JSON.parse((str));
        // console.log(obj)                
        //  JSON.parse(user);
        // console.log(user.password)
        // console.log(err,JSON.parse(user))
        
        req.user=user[0];
        // console.log('caleld',req.user)
        return res.json({user:req.user})
    })
}

module.exports=router;

