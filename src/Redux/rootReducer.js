import { combineReducers } from "redux";
import wordListReducer from "./wordList/reducer";
import scoresListReducer from "./scoreList/reducer";

const rootReducer = combineReducers({
  wordList: wordListReducer,
  scoresList: scoresListReducer,
});

export default rootReducer;
