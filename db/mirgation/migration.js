import { readFile } from 'fs/promises';
import {migrateQuestions} from "./questionMigrate.js"
import { migrateTopics } from './topicsMigrate.js';


const json = JSON.parse(
  await readFile(
    new URL('./../data.json', import.meta.url)
  )
);


function storingData(data){
migrateQuestions(data[0]);
migrateTopics(data[1])
}



storingData(json)