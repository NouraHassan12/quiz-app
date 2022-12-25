import * as React from "react";
import { CircularProgress } from "@material-ui/core";
import { useState } from "react";
import Question from "../../Components/Question/Question";
import speech from "../../Data/speech";
import "./Quiz.css";

const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
  const [currQues, setCurrQues] = useState(0);

  return (
    <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>

      {questions ? (
        <>
          <div className="quizInfo">
            <span>Score : {score}</span>
          </div>
          <Question
            currQues={currQues}
            setCurrQues={setCurrQues}
            questions={questions}
            options={speech}
            correct={questions[currQues]?.pos}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
