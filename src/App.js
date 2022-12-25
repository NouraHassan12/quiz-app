import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchWords } from "./Redux/wordList/action";
import "./App.css";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import wordList from "./Data/wordList";
function App() {
  const [name, setName] = useState();
  const [score, setScore] = useState(0);
  const dispatch = useDispatch();
  const all_words = useSelector((state) => state.wordList);

  useEffect(() => {
    dispatch(fetchWords());
  }, []);
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Routes>
          <Route
            path="/"
            exact
            element={<Home name={name} setName={setName} />}
          />

          <Route
            path="/quiz"
            element={
              <Quiz
                name={name}
                questions={wordList || all_words?.wordList}
                score={score}
                setScore={setScore}
              />
            }
          />

          <Route
            path="/result"
            element={
              <Result
                name={name}
                score={score}
                questions={wordList || all_words?.wordList}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
