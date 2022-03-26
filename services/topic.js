import topicModel from "../db/model/topic.model.js"
import * as questionService from "./question.js"


function find(filter){
return topicModel.find(filter)
}
 
async function search (query){
console.time('search');
// 1- get doc from topic model

let root= query.q;

let topics= await find({levels:{$in:[root]}})


if(!!topics && topics.length!==0){

let set=new Set();
topics.forEach((item)=>{
    if(item.levels!==0){
    let indexRoot=item.levels.indexOf(root);
    item.levels.slice(indexRoot).forEach((o)=>{
    set.add(o)    
    })}
})

let questions = await questionService.find({annotations:{$in:[...set.values()]}})
console.timeEnd('search');
return {total:questions.length , questions:questions}
}

return []
}

function create(doc){

return topicModel.create(doc)

}


function findOne(filter){

    return topicModel.findOne(filter)
    
}


async function isTopicsFound(){
const topic=await findOne()
if(!!topic && !!topic._id){
    return true
}

return false
}
    
export {find,create,findOne , isTopicsFound , search}
