import * as questionsService from "../services/questions.js"
const search=async (req,res)=>{
    const {query}=req;    
    if(!query.q){
    res.json([])
    return;
    }
    let results=await questionsService.search(query)
    res.json(results)
    }
    


export {search}