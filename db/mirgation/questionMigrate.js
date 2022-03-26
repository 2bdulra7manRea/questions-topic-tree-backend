
import {create, isQuestionsFound} from "../../services/question.js"


export const migrateQuestions=async (questions)=>{

if(!questions || questions.length===0 || await isQuestionsFound()){
    console.info('the migration of questions is done before ')
    return;
}



for (let i = 0; i < questions.length; i++) {
console.log('in loop')    
let question={
    number:1,
    annotations:[]
}

for (const key in questions[i]) {

    if(key==='Question number'){
        question.number=questions[i][key]
    }else{
        question.annotations.push(questions[i][key])
    }
}

let d=await create(question)
console.log(d);
}



}







