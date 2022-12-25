import {
  FETCH_SCORE_LIST_REQUEST,
  FETCH_SCORE_LIST_SUCCESS,
  FETCH_SCORE_LIST_FAILURE,
} from "./type";

const initialState = {
  loading: false,
  scoresList: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SCORE_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SCORE_LIST_SUCCESS:
      return {
        loading: false,
        scoresList: action.payload,
        error: "",
      };

    case FETCH_SCORE_LIST_FAILURE:
      return {
        loading: false,
        scoresList: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
