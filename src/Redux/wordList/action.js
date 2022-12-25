import {
  FETCH_WORD_LIST_REQUEST,
  FETCH_WORD_LIST_SUCCESS,
  FETCH_WORD_LIST_FAILURE,
} from "./type";
import axios from "axios";

export const fetchWordsRequest = () => {
  return {
    type: FETCH_WORD_LIST_REQUEST,
  };
};

const fetchWordsSuccess = (Words) => {
  return {
    type: FETCH_WORD_LIST_SUCCESS,
    payload: Words,
  };
};

const fetchWordsFailure = (error) => {
  return {
    type: FETCH_WORD_LIST_FAILURE,
    payload: error,
  };
};

export const fetchWords = () => {
  return (dispatch) => {
    dispatch(fetchWordsRequest);

    axios
      .get("http://localhost:5000/wordList")

      .then((res) => {
        const Words = res.data;
        dispatch(fetchWordsSuccess(Words, " redux Words"));
      })

      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchWordsFailure(errorMsg));
      });
  };
};
