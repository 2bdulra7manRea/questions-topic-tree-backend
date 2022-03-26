import questionModel from "../db/model/question.model.js";




function find(filter){
return questionModel.find(filter)
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

export {find,create , findOne , isQuestionsFound}
