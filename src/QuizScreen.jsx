import React, { useState, useEffect } from 'react';
import './QuizScreen.css';
import { useNavigate } from 'react-router-dom';

const questions = [
  {
    question: "What is Full Form of HTML?",
    options: ["Hyper text Marking Language", "Higher text Marking Language", "Hyper Text Markup Language", "Hyper text Mark Language"],
  },
  // Add more questions as needed
];

const QuizScreen = () => {
    const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const totalQuestions = questions.length;

  useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      alert("Time's up!");
      handleSubmit();
    }
  }, [timeRemaining]);

  const handleOptionChange = (index) => {
    setSelectedOption(index);
  };

  const handlePrevious = () => {
    setCurrentQuestionIndex((prev) => Math.max(prev - 1, 0));
    setSelectedOption(null);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      setCurrentQuestionIndex((prev) => Math.min(prev + 1, totalQuestions - 1));
      setSelectedOption(null);
    } else {
      alert("Please select an option before proceeding.");
    }
  };

  const handleSubmit = () => {
    alert("Quiz submitted!");
  };

  return (
    <div className="qudgiz-screen">
      <h1 className="quiz-headdder">Quiz Platform</h1>
      <div className="s-container">
        <div className="quiz-bocdy">
          <h2>Question {currentQuestionIndex + 1}/{totalQuestions}:</h2>
          <p>{questions[currentQuestionIndex].question}</p>
          <div className="optidfons">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <div key={index} className="opdtion">
                <input
                  type="radio"
                  id={`option${index}`}
                  name="quiz-option"
                  checked={selectedOption === index}
                  onChange={() => handleOptionChange(index)}
                />
                <label htmlFor={`option${index}`} className="option-label">
                  {option}
                </label>
              </div>
            ))}
          </div>
          <div className="navigdation">
            <button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
              Previous
            </button>
            <button onClick={handleNext} disabled={currentQuestionIndex === totalQuestions - 1}>
              Next
            </button>
            <button onClick={() => {handleSubmit() ;  navigate('/ResultsDisplay');}}>   Submit</button>
           
           
           
          
           
          </div>
          <div className="tifmer">
            Timer: {timeRemaining} seconds
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizScreen;
