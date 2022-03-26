// mongoDB config connections

import mongoose  from "mongoose"
import migratesData from "./mirgation/migration.js"


// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://petro:ausbildung@questionscluster.pawtr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });




mongoose.connect(process.env.DB_URL,(error)=>{

if(!!error){
    console.log(error)
}else{
    migratesData();
    console.log('mongoDB is running....')
}

})




export default mongoose

