import React, { useState } from "react";

export const quizData = [
  {
    question: "What is ReactJS?",
    answers: [
      "A JavaScript library for building user interfaces",
      "A programming language",
      "A database management system",
    ],
    correctAnswer: "A JavaScript library for building user interfaces",
  },
  {
    question: "What is JSX?",
    answers: [
      "A programming language",
      "A file format",
      "A syntax extension for JavaScript",
    ],
    correctAnswer: "A syntax extension for JavaScript",
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  if (quizCompleted) {
    return (
      <div
        style={{
          textAlign: "center",
          color: "red",
          fontSize: "24px",
          fontFamily: "Arial",
        }}
      >
        <h2>Quiz Completed!</h2>
        <p>Your score: {score}</p>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "Arial", margin: "20px", display: "flex" }}>
      <div
        style={{ width: "50%", padding: "20px", borderRight: "1px solid #ccc" }}
      >
        <h2>Question {currentQuestion + 1}</h2>
        <p>{quizData[currentQuestion].question}</p>
        {quizData[currentQuestion].answers.map((answer, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <label style={{ display: "flex", alignItems: "center" }}>
              <input
                type="radio"
                id={`answer-${index}`}
                name="answer"
                value={answer}
                checked={selectedAnswer === answer}
                onChange={() => handleAnswerClick(answer)}
                style={{ marginRight: "10px" }}
              />
              {answer}
            </label>
          </div>
        ))}
        <button
          onClick={handleNextQuestion}
          style={{
            backgroundColor: "red",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Next
        </button>
      </div>
      <div
        style={{
          width: "50%",
          padding: "20px",
          textAlign: "center",
          color: "red",
          fontSize: "24px",
        }}
      >
        {quizCompleted && (
          <div>
            <h2>Quiz Completed!</h2>
            <p>Your score: {score}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
