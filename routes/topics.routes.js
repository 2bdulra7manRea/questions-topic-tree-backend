import express from "express";
import { search } from "../controller/topics.js";

const topicsRouter=express.Router();



topicsRouter.get('/search',search)







export default topicsRouter


