import React, { useState, useEffect } from "react";

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

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setSelectedAnswer(null);

    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  useEffect(() => {
    // Reset state when quiz restarts
    if (showResult) {
      setCurrentQuestion(0);
      setScore(0);
      setShowResult(false);
    }
  }, [showResult]);

  if (showResult) {
    return (
      <div>
        <h2>Quiz Completed!</h2>
        <p>
          Your score: {score} out of {quizData.length}
        </p>
        <button onClick={() => setShowResult(false)}>Restart Quiz</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Question {currentQuestion + 1}</h2>
      <p>{quizData[currentQuestion].question}</p>
      <ul>
        {quizData[currentQuestion].answers.map((answer, index) => (
          <li key={index}>
            <label>
              <input
                type="radio"
                value={answer}
                checked={selectedAnswer === answer}
                onChange={() => handleAnswerSelect(answer)}
              />
              {answer}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleNextQuestion} disabled={!selectedAnswer}>
        {currentQuestion === quizData.length - 1 ? "Finish" : "Next"}
      </button>
    </div>
  );
};

export default Quiz;
