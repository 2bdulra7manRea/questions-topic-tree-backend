// mongoDB config connections

import mongoose  from "mongoose"


mongoose.connect(process.env.DB_URL,(error)=>{

if(!!error){
    console.log(error)
}else{
    console.log('mongoDB is running....')
}

})




export default mongoose

