import topicModel from "../db/model/topic.model.js"


function find(filter){
return topicModel.find(filter,{_id:0 , levels:1})
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
    
export {find,create,findOne , isTopicsFound}
