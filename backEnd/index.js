const express=require("express");
const app=express();
const PORT=8000;
const db=require("./config/mongoDB.js");


app.use('/',require("./routes/index.js"));
app.listen(PORT,function(err){
    if(err)
    {
        console.log("######## Error Occured in Starting Server #########");
    }
    else{
        console.log("******* Server Started Successfully ***********");
    }
})