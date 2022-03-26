import app from "./app.js";
import 'dotenv/config' 

import "./db/mirgation/migration.js"
import "./db/config.js"

const PORT=process.env.PORT||3000

app.listen(PORT,()=>{

console.log('the server is runnig on port',PORT)

})