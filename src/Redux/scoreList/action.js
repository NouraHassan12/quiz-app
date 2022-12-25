import {
  FETCH_SCORE_LIST_REQUEST,
  FETCH_SCORE_LIST_SUCCESS,
  FETCH_SCORE_LIST_FAILURE,
} from "./type";
import axios from "axios";

export const fetchScoresRequest = () => {
  return {
    type: FETCH_SCORE_LIST_REQUEST,
  };
};

const fetchScoresSuccess = (Scores) => {
  return {
    type: FETCH_SCORE_LIST_SUCCESS,
    payload: Scores,
  };
};

const fetchScoresFailure = (error) => {
  return {
    type: FETCH_SCORE_LIST_FAILURE,
    payload: error,
  };
};

export const fetchScores = () => {
  return (dispatch) => {
    dispatch(fetchScoresRequest);

    axios
      .get("http://localhost:5000/scoreList")

      .then((res) => {
        const Scores = res.data;
        console.log(Scores, "Scores");
        dispatch(fetchScoresSuccess(Scores, " redux Scores"));
      })

      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchScoresFailure(errorMsg));
      });
  };
};
