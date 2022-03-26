import topicModel from "../db/model/topic.model.js"
import * as questionService from "./question.js"


function find(filter){
return topicModel.find(filter)
}
 
async function search (query){

// 1- get doc from topic model

let topic= await findOne({levels:$in[query.q]});

if(!!annotations && annotations.length!==0){

let qustionsFilter={
    annotations:{$in:[...topic.levels]}
}

let questions = await questionService.find(qustionsFilter)

return questions

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
