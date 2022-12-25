import { useEffect } from "react";
import { Button } from "@material-ui/core";
import "./Result.css";
import scoreList from "../../Data/scoreList";
import { fetchScores } from "../../Redux/scoreList/action";
import { useDispatch, useSelector } from "react-redux";
const Result = ({ score, questions }) => {
  const dispatch = useDispatch();
  const all_scores = useSelector((state) => state.scoresList);
  const _scores = scoreList || all_scores?.scoresList;
  const questions_Number = questions.length;
  useEffect(() => {
    dispatch(fetchScores());
  }, []);
  const attchived_score = (score / questions_Number) * 100;

  let count = 0;
  for (let score of _scores) {
    if (score < attchived_score) {
      count = count + 1;
    }
  }

  const attchived_rank = (count / _scores.length) * 100;

  return (
    <div className="result">
      <span>Final Score :{Math.round(attchived_score)}%</span>
      <span
        className="rank"
        style={{ color: Math.round(attchived_rank) > 50 ? "green" : "red" }}
      >
        Your Rank :{Math.round(attchived_rank)}%
      </span>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;
