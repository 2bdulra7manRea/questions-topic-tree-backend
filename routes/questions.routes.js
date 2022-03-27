import express from "express";
import { search } from "../controller/questions.js";

const questionsRouter=express.Router();

questionsRouter.get('/search',search)

export default questionsRouter


