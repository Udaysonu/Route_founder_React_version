

const router=require("express").Router();
const userConroller=require("../controllers/userController.js")
const passport=require("../config/passport")

router.post("/signup",userConroller.createuser);
router.post("/logout",userConroller.logout);
router.post("/signin",passport.authenticate('local',{
    failureRedirect:"back"
}),userConroller.checkAuth)

module.exports=router;

