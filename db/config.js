// mongoDB config connections

import mongoose  from "mongoose"
import migratesData from "./mirgation/migration.js"


let url="mongodb+srv://petro:pmp@questionscluster.pawtr.mongodb.net/pencileDB?retryWrites=true&w=majority"

mongoose.connect(url,(error)=>{

if(!!error){
    console.log(error)
}else{
    migratesData();
    console.log('mongoDB is running....')
}

})




export default mongoose

