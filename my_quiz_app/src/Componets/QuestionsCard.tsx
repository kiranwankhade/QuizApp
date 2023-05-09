import { type } from 'os';
import React from 'react'

//Types
import { AnswerObject } from '../App';

//style
import { Wrapper,ButtonWrapper } from './QuestionsCard.style';



type Props = {
    questions:string,
    answers:string[],
    callback: (e: React.MouseEvent<HTMLButtonElement>)=> void,
    userAnswer:  AnswerObject | undefined,
    questionNr: number,
    totalQuestions:number
}

//functional components
const QuestionsCard:React.FC<Props> = ({
    questions,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions
}) => (
    // What is dangerouslySetInnerHTML ? dangerouslySetInnerHTML is a property that you can use on HTML elements in a React application to programmatically set their content. Instead of using a selector to grab the HTML element, then setting its innerHTML , you can use this property directly on the element.
    <Wrapper>
        <p className='number'>
            Question: {questionNr}/{totalQuestions}
        </p>

        <p dangerouslySetInnerHTML={{__html:questions}}></p>

        <div>
        {answers?.map((answer) => (
            <ButtonWrapper
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
            >
            <div key={answer}>
            <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
            </div>
            </ButtonWrapper>
        ))}
    </div>
    </Wrapper>
  
)


export default QuestionsCard;
