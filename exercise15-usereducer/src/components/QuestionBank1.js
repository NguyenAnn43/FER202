import React, { useReducer, useState, useEffect } from "react";
import { Button, Container, Card } from "react-bootstrap";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const initialState = {
  questions: [
    {
      id: 1,
      question: "What is the capital of Australia?",
      options: ["Sydney", "Canberra", "Melbourne", "Perth"],
      answer: "Canberra",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      id: 3,
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Pacific Ocean",
        "Arctic Ocean",
      ],
      answer: "Pacific Ocean",
    },
  ],
  currentQuestion: 0,
  selectedOption: "",
  score: 0,
  showScore: false,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SELECT_OPTION":
      return { ...state, selectedOption: action.payload };
    case "NEXT_QUESTION":
      const isCorrect =
        state.selectedOption === state.questions[state.currentQuestion].answer;
      return {
        ...state,
        score: isCorrect ? state.score + 1 : state.score,
        currentQuestion: state.currentQuestion + 1,
        selectedOption: "",
        showScore: state.currentQuestion + 1 === state.questions.length,
      };
    case "RESTART_QUIZ":
      return { ...initialState };
    default:
      return state;
  }
}

function QuestionBank1() {
  const [state, dispatch] = useReducer(quizReducer, initialState);
  const { questions, currentQuestion, selectedOption, score, showScore } =
    state;
  const [isCorrect, setIsCorrect] = useState(null);
  const [timeLeft, setTimeLeft] = useState(10);
  const [showFeedback, setShowFeedback] = useState(false); // Thêm state để kiểm soát hiển thị phản hồi

  useEffect(() => {
    setTimeLeft(10);
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [currentQuestion]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
    }
  }, [timeLeft]);

  useEffect(() => {
    if (showScore) {
      const highScore = localStorage.getItem("highScore");
      if (!highScore || score > parseInt(highScore)) {
        localStorage.setItem("highScore", score);
      }
    }
  }, [showScore, score]);

  const handleOptionSelect = (option) => {
    dispatch({ type: "SELECT_OPTION", payload: option });
  };

  const handleNextQuestion = () => {
    if (selectedOption) {
      // Kiểm tra xem người dùng đã chọn đáp án chưa
      const correct = selectedOption === questions[currentQuestion].answer;
      setIsCorrect(correct);
      setShowFeedback(true); // Hiển thị phản hồi
      dispatch({ type: "NEXT_QUESTION" });
    }
  };

  const handleRestartQuiz = () => {
    dispatch({ type: "RESTART_QUIZ" });
    setIsCorrect(null);
    setShowFeedback(false); // Ẩn phản hồi khi bắt đầu lại quiz
  };

  return (
    <Container className="mt-4">
      <Card className="p-4">
        {showScore ? (
          <div className="text-center">
            <h2>
              Your Score: {score} / {questions.length}
              <br />
              High Score: {localStorage.getItem("highScore") || 0}
            </h2>
            <Button variant="primary" onClick={handleRestartQuiz}>
              Restart Quiz
            </Button>
          </div>
        ) : (
          <div>
            <h4>
              Question {currentQuestion + 1} / {questions.length}:<br />
              {questions[currentQuestion].question}
            </h4>
            <div className="mt-3">
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                  key={index}
                  variant={
                    selectedOption === option ? "success" : "outline-secondary"
                  }
                  className="m-2"
                  onClick={() => handleOptionSelect(option)}
                >
                  {option}
                </Button>
              ))}
            </div>
            {showFeedback && ( // Chỉ hiển thị phản hồi khi showFeedback là true
              <div className="mt-3">
                {isCorrect !== null && (
                  <div className="mt-2">
                    {isCorrect ? (
                      <span className="text-success">
                        <FaCheckCircle /> Correct!
                      </span>
                    ) : (
                      <span className="text-danger">
                        <FaTimesCircle /> Incorrect! The correct answer is:{" "}
                        {questions[currentQuestion].answer}
                      </span>
                    )}
                  </div>
                )}
              </div>
            )}
            <div className="mt-3">
              Time Left:{" "}
              <span style={{ color: timeLeft < 5 ? "red" : "black" }}>
                {timeLeft}s
              </span>
            </div>
            <Button
              variant="primary"
              className="mt-3"
              disabled={!selectedOption}
              onClick={handleNextQuestion}
            >
              {currentQuestion === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}
            </Button>
          </div>
        )}
      </Card>
    </Container>
  );
}

export default QuestionBank1;
