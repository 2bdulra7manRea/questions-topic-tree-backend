import express from "express";

const questionsRouter=express.Router();




questionsRouter.get('',(req,res)=>{



res.end('welcome!')

});






export default questionsRouter


