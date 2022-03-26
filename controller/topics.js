import * as topicsService from "./../services/topic.js"

const search=async (req,res)=>{
const {query}=req;    
if(!query.q){
res.json([])
return;
}
let values=await topicsService.search(query)
res.json(values)
}

export {search}