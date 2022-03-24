
import { readFile } from 'fs/promises';

const json = JSON.parse(
  await readFile(
    new URL('./../data.json', import.meta.url)
  )
);


function storeData(array){

addQuestions(array[0]);
addTopics(array[1])
}


function addQuestions(data){
// storing in questions collection
};





function addTopics(){}



displayData(json)