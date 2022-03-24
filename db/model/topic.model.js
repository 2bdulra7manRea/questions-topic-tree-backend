import mongoose from "mongoose";


const topic = new mongoose.Schema({


levels:[{type:String}],

questionsIds:[]

},{autoIndex:false})

topic.index({
levels:1
})


export default mongoose.model('topic',topic)