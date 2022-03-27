import questionModel from "../db/model/question.model.js";
import * as topicsService from "./topics.js"

function find(filter,skip){
return questionModel.find(filter,{_id:0 ,annotations:1 , number:1}).skip(skip).limit(10);
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

    let regexp=new RegExp(root, "i") 
    let s = root.toLowerCase()
    let topics= await topicsService.find(
        {
        levels:{
            $elemMatch:{
                $eq:root
            }
            }
        }
    )

    if(!!topics && topics.length!==0){
    let treeValues=[];
    topics.forEach((item)=>{
        if(item.levels!==0){
            // to  get the tree and sub tree;
            // we need to the index of the root
            // then we gonna start searching from it "root";
        let indexRoot=item.levels.indexOf(root);
         // starting slicing from index root 
        let tree= item.levels.slice(indexRoot)
        treeValues.push(...tree)
        }
    })
    // removing repeated topics
    let set=new Set([...treeValues]);
    let skip=query.s?Number(query.s):0;
    let questions = await find({annotations:{$elemMatch:{$in:[...set.values()] }}},skip)
    return {total:questions.length , questions:questions}
    }   

    return {total:0 , questions:[]}
}


export {find,create , findOne ,search,isQuestionsFound}
