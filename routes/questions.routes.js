import express from "express";
import { getQuestions } from "../controller/questions.js";

const questionsRouter=express.Router();




questionsRouter.get('',getQuestions)






export default questionsRouter


