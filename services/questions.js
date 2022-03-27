import questionModel from "../db/model/question.model.js";
import * as topicsService from "./topics.js"

function find(filter){
return questionModel.find(filter,{_id:0 ,annotations:1 , number:1})
}


function create(doc){

return questionModel.create(doc)

}


function findOne(filter){

return questionModel.findOne(filter)

}


async function isQuestionsFound(){

    const question=await findOne()
    if(!!question && !!question._id){
        return true
    }

return false
}



async function search (query){  
    let root= query.q;
    
    let topics= await topicsService.find({levels:{$in:[root]}})
    
    
    if(!!topics && topics.length!==0){
    
    let set=new Set();
    topics.forEach((item)=>{
        if(item.levels!==0){
        let indexRoot=item.levels.indexOf(root);
        item.levels.slice(indexRoot).forEach((o)=>{
        set.add(o)    
        })}
    })
    let questions = await find({annotations:{$in:[...set.values()]}})
    return {total:questions.length , questions:questions}
    }    
    return []
}


export {find,create , findOne ,search,isQuestionsFound}
