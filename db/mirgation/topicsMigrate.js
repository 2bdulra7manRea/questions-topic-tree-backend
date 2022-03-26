import { create, isTopicsFound } from "../../services/topic.js"



export const migrateTopics=async (topics)=>{


    if(!topics || topics.length===0 || await isTopicsFound() ){
        console.info('the migration of topics is done before')
        return;
    }



    for (let i = 0; i < topics.length; i++) {
    console.log('in loop')    
    let topic={
        levels:[...Object.values(topics[i])]
    }
    let d=await create(topic)
    console.log(d);
    }
}
    
    
    
    