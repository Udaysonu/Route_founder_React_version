const router=require("express").Router();


router.use("/user",require("./userRouter.js"));
router.use("/algo",require("./algorithms.js"));
module.exports=router;