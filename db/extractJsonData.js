

// import fs from "fs"

// import xlsx from "xlsx"




// function convertToJson(){
// const file= xlsx.readFile("low.xlsx")
// const sheetNames=file.SheetNames;
// const sheetsLength=sheetNames.length;
// const parseData=[]


// for (let i = 0; i < sheetsLength; i++) {
// // convert to json
// const data=xlsx.utils.sheet_to_json(file.Sheets[sheetNames[i]])
// // first sheet;    
// data.shift();
// parseData.push(data)



// }


// generateJsonFile(parseData);



// }


// function generateJsonFile(data){

//     try {
//         fs.writeFileSync('data.json', JSON.stringify(data))
//     } catch (err) {
//         console.error(err)
//     }
// }




// convertToJson()