import * as questionsService from "../services/questions.js"
const search=async (req,res)=>{
    try {
        const {query}=req;    
        if(!query.q){
        res.json([])
        }
        let results=await questionsService.search(query)
        res.json(results)
    } catch (error) {
        res.json({message:error})
    }
}
    
export {search}
