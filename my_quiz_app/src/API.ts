import { type } from "os";
import { shufflerArray } from "./Utils";


export type Question = {
    category:string,
    correct_answer:string,
    difficulty:string,
    incorrect_answers: string[],
    question:string,
    type :string
}


//want the both correct_answer and incorrect_answers in one go so created new type

export type QuestionState = Question & {answers:string[]}








export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard"
}

export const fetchQuizQuestions = async (amount:number,difficulty :Difficulty) =>{
    const endPoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;


    
    const data = await (await fetch(endPoint)).json() // first await for jason conversion and second one is for fetch;

    // console.log('data:', data)

    return data.results.map((question:Question)=>(
        {
            ...question,
            answers:shufflerArray([...question.incorrect_answers,question.correct_answer])
        }
    ))
}