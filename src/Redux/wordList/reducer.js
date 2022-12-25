import {
  FETCH_WORD_LIST_REQUEST,
  FETCH_WORD_LIST_SUCCESS,
  FETCH_WORD_LIST_FAILURE,
} from "./type";

const initialState = {
  loading: false,
  wordList: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORD_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_WORD_LIST_SUCCESS:
      return {
        loading: false,
        wordList: action.payload,
        error: "",
      };

    case FETCH_WORD_LIST_FAILURE:
      return {
        loading: false,
        wordList: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
