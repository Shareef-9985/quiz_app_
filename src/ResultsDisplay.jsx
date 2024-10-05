import React from 'react';
import './ResultsDisplay.css';
import { Link } from 'react-router-dom';

const ResultsDisplay = ({ score, correctAnswers, incorrectAnswers }) => {
  const handleShareResults = () => {
    alert("Results shared!");
  };

  const handleRetakeQuiz = () => {
    alert("Retaking quiz...");
    // Logic to reset quiz state can go here
  };

  const handleReturnHome = () => {
    alert("Returning to home...");
    // Logic to navigate to home can go here
  };

  return (
    <div className="results-display">
      <h1 className="results-header">Quiz Platform</h1>
      <div className="results-container">
        <h2>Your Score: {score}</h2>
        <p>Correct Answers: {correctAnswers}</p>
        <p>Incorrect Answers: {incorrectAnswers}</p>
        <div className="actionns">
          <button onClick={handleShareResults}>Share Results</button>
          <button onClick={handleRetakeQuiz}>Retake Quiz</button>
        </div>
        <Link to='/Home'>
        <button onClick={handleReturnHome} className="home-button">Return to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default ResultsDisplay;
