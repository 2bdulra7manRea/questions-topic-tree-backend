import mongoose from "mongoose";


const topic = new mongoose.Schema({

levels:{type:Array}

},{autoIndex:false})

topic.index({
levels:1
})


export default mongoose.model('topics',topic)