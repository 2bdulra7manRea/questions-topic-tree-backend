import { readFile } from 'fs/promises';
import {migrateQuestions} from "./questionMigrate.js"
import { migrateTopics } from './topicsMigrate.js';



function migratesData(){

  const json = JSON.parse(
    await readFile(
      new URL('./../data.json', import.meta.url)
    )
  );

  if(!json){
    console.info('no json being found')
    return;
  }

migrateQuestions(json[0]);
migrateTopics(json[1])
}



export default migratesData
//  storingData(json)