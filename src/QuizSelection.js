import React, { useState } from 'react';
import './QuizSelection.css';
import { useNavigate} from 'react-router-dom';

const QuizSelection = () => {
  const quizzes = [
    { title: 'Quiz 1', description: 'HTML quiz', questions: 5, timeLimit: 5, tags: ['HTML'], difficulty: 'Easy' },
    { title: 'Quiz 2', description: 'CSS quiz', questions: 5, timeLimit: 5, tags: ['CSS'], difficulty: 'Easy' },
    { title: 'Quiz 3', description: 'JAVASCRIPT quiz', questions: 5, timeLimit: 5, tags: ['JAVASCRIPT'], difficulty: 'Easy' },
    { title: 'Quiz 4', description: 'HTML quiz', questions: 10, timeLimit: 10, tags: ['HTML'], difficulty: 'Medium' },
    { title: 'Quiz 5', description: 'CSS quiz', questions: 10, timeLimit: 10, tags: ['CSS'], difficulty: 'Medium' },
    { title: 'Quiz 6', description: 'JAVASCRIPT quiz', questions: 10, timeLimit: 10, tags: ['JAVASCRIPT'], difficulty: 'Medium' }, 
    { title: 'Quiz 7', description: 'HTML quiz', questions: 15, timeLimit: 15, tags: ['HTML'], difficulty: 'Hard' },
    { title: 'Quiz 8', description: 'CSS quiz', questions: 15, timeLimit: 15, tags: ['CSS'], difficulty: 'Hard' },
    { title: 'Quiz 9', description: 'JAVASCRIPT quiz', questions: 15, timeLimit: 15, tags: ['JAVASCRIPT'], difficulty: 'Hard' },
    // Add more quizzes as needed
  ];
  const navigate = useNavigate()
  const [selectedTag, setSelectedTag] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [selectedTimeLimit, setSelectedTimeLimit] = useState('');

  const filteredQuizzes = quizzes.filter(quiz => 
    (selectedTag === '' || quiz.tags.includes(selectedTag)) &&
    (selectedDifficulty === '' || quiz.difficulty === selectedDifficulty) &&
    (selectedTimeLimit === '' || quiz.timeLimit === Number(selectedTimeLimit)) 
  );

  const handleStartQuiz = (quiz) => {
    console.log(`Starting ${quiz.title}`);
  };

  return (
    <div className="quiz-selection-container">
      <h1>Select a Quiz</h1>
      <div className="filters">
       
        <select onChange={(e) => setSelectedTag(e.target.value)}>
          <option value="">Select Tag</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JAVASCRIPT">JAVASCRIPT</option>
        </select>
        <select onChange={(e) => setSelectedDifficulty(e.target.value)}>
          <option value="">Select Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <select onChange={(e) => setSelectedTimeLimit(e.target.value)}>
          <option value="">Select Time Limit</option>
          <option value={5}>5 min</option>
          <option value={10}>10 min</option>
          <option value={15}>15 min</option>
        </select>
      </div>
      <div className="quiz-list">
        
        {filteredQuizzes.length > 0 ? (
          filteredQuizzes.map((quiz, index) => (
          <div key={index} className="quiz-card">
            <h2>{quiz.title}</h2>
            <p>{quiz.description}</p>
            <p>Number of Questions: {quiz.questions}</p>
            <p>Time Limit: {quiz.timeLimit} min</p>
            <p>Tags: {quiz.tags.join(', ')}</p>
            {/* <button onClick={() => handleStartQuiz(quiz)}>Start Quiz</button> */}
            <button  onClick={() =>  {handleStartQuiz(quiz) ; navigate('/QuizScreen');}}>Start Quiz</button>
            {/* <button  onClick={() => { console.log(`Starting ${quiz.title}`) ; navigate('/QuizScreen');}}></button> */}

          </div>
        ))
      ) : (
        <p>No quizzes found.</p>
      )}
    </div>
  </div>
);
};
export default QuizSelection;
