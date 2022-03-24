import express from "express";

const topicsRouter=express.Router();



topicsRouter.get('search',(req,res)=>{

// req.params
// search by topic name


})


topicsRouter.get('',(req,res)=>{



res.end('welcome!')

});






export default topicsRouter


