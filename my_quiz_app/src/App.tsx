import React, { useState } from "react";
import loading1 from "./Images/LoadingTrans.gif";
import "./App.css";

import QuestionsCard from "./Componets/QuestionsCard";

//Types

import { Difficulty, QuestionState, fetchQuizQuestions } from "./API";
import { type } from "os";

//style
import { GlobalStyle , Wrapper } from "./App.styles";

// import QuestionsCard from './Componets/QuestionsCard';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

function App() {
  const [loading, setLoading] = useState(false);

  const [questions, setQuestions] = useState<QuestionState[]>([]);

  const [number, setNumber] = useState(0);

  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);

  const [score, setScore] = useState(0);

  const [gameOver, setGameOver] = useState(true);


  const [difficulty, setDifficulty] = React.useState(Difficulty.EASY);

  console.log(questions);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      difficulty
    );

    setQuestions(newQuestions);
    setScore(0);

    setUserAnswers([]);
    setNumber(0);

    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!gameOver){
      const answer = e.currentTarget.value;

      //check naswr againt the correct ans

      const correct =  questions[number].correct_answer === answer;

      //add score if ans is correct

      if(correct){
        setScore(prev  => prev+1)
      }

      //save ans in the array 

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer:questions[number].correct_answer
      }

      setUserAnswers(prev => [...prev,answerObject]);
    }
  };

  const nextQuestions = () => {
    //next question if not the last question 

    const nextQuestion = number+1;

    if(nextQuestion === TOTAL_QUESTIONS){
      setGameOver(true);
    }else{
      setNumber(nextQuestion);
    }
  };

  
  const handleDifficulty = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log('e:', e.target.value)
    // setDifficulty(e.target.value);
  };

  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <h1>MY QUIZ APP</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <>
        <button className="start" onClick={startQuiz}>
          START QUIZ
        </button>

        {/* <p>Select Difficulty</p>
        <select value={difficulty} onChange={handleDifficulty}>
          {
            Object.keys(Difficulty).map((diff) => (
              <option key={diff} value={ Difficulty[typeof diff]}>
                {diff}
              </option>
            ))
          }
        </select> */}
        </>

      ) : null}

      {!gameOver ? <p className="score">Score : {score}</p> : null}

      {loading ? <img src={loading1} style={{width:'100%', height:'50%',display:"flex",alignItems:'center',justifyContent:'center'}} alt="" /> : null}

      {!loading && !gameOver && (
        <QuestionsCard
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          questions={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}

      {!gameOver &&
      !loading &&
      userAnswers.length === number + 1 &&
      number !== TOTAL_QUESTIONS - 1 ? (
        <button className="next" onClick={nextQuestions}>
          Next Questions
        </button>
      ) : null}
    </Wrapper>
    </>
  );
}

export default App;
