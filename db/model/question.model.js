import mongoose from "mongoose";




const question = new mongoose.Schema({
number:{type:Number ,required:true , unique:true ,index:true},
annotations:{type:Array,index:true}

},{autoIndex:false})

question.index({
annotations:1,
})




export default mongoose.model('question',question)