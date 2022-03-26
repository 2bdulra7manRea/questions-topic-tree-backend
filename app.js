import express from "express";
import questionsRouter from "./routes/questions.routes.js";
import topicsRouter from "./routes/topics.routes.js";

const app = express();


app.use(express.json())
app.use(express.urlencoded())


app.use('/topics/',topicsRouter);
app.use('/questions/',questionsRouter)


export default app