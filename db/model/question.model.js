import mongoose from "mongoose";




const question = new mongoose.Schema({
number:{type:Number ,required:true , unique:true ,index:true},
annotations:{type:Array, ref:"topics" ,index:true}



},{autoIndex:false})



question.index({
annotations:1,
number:-1
})




export default mongoose.model('question',question)