import { Button, TextField } from "@material-ui/core";
import { useState } from "react";
import Img from "../../Images/Online_test.png";
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../Components/ErrorMessage/ErrorMessage";
import "./Home.css";

const Home = ({ name, setName }) => {
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name) {
      setError(true);
      return;
    } else {
      navigate("/quiz");
    }
  };

  return (
    <div className="content">
      <div className="Quiz">
        <span style={{ fontSize: 30 }}>Quiz</span>
        <div className="student_data">
          {error && <ErrorMessage>Please Fill all the feilds</ErrorMessage>}
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img src={Img} className="banner" alt="quiz app" />
    </div>
  );
};

export default Home;
