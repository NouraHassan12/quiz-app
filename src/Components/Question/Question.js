import * as React from "react";
import { Button } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Question.css";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  console.log(correct, "correct");
  const navigate = useNavigate();
  console.log(options, "options");
  console.log(selected, "selected");
  console.log(questions, "questions");
  console.log(currQues, questions?.length, "currQues currQuescurrQues");
  console.log(questions?.length, "number of questions");
  const [progress, setProgress] = React.useState(0);
  const realCiurrentquestion = currQues + 1;

  console.log(realCiurrentquestion, "realCiurrentquestion");
  console.log(progress, "progress");

  const handleSelect = (i) => {
    if (selected.desc == i.desc && selected.desc == correct) return "select";
    else if (selected.desc == i.desc && selected.desc !== correct)
      return "wrong";
    else if (i == correct) return "select";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i.desc == correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    if (currQues == questions?.length - 1) {
      navigate("/result");
    } else if (selected) {
      setCurrQues(currQues + 1);
      setSelected();
      setProgress((realCiurrentquestion / questions?.length) * 100);
    } else setError("Please select an option first");
  };

  const handleQuit = () => {
    setCurrQues(0);
    setQuestions();
  };
  function LinearProgressWithLabel(
    props: LinearProgressProps & { value: number }
  ) {
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress variant="determinate" {...props} />
        </Box>
        <Box sx={{ minWidth: 35 }}>
          <Typography variant="body2" color="text.primary">{`${Math.round(
            props.value
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }

  return (
    <div className="question">
      <Box sx={{ width: "100%" }}>
        <LinearProgressWithLabel value={progress} />
      </Box>
      <div className="singleQuestion">
        <h2>{questions[currQues].word}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i.id}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i.desc}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currQues == questions.length - 1 ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
