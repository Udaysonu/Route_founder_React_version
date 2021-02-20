const router=require("express").Router();


router.use("/user",require("./userRouter.js"));
module.exports=router;