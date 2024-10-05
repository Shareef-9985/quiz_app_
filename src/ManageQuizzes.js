import React, { useState } from 'react';
import './ManageQuizzes.css';

const ManageQuizzes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const quizzes = [
    { id: 1, title: 'Quiz 1', tags: ['HTML'], description: 'HTML quiz description' },
    { id: 2, title: 'Quiz 2', tags: ['CSS'], description: 'CSS quiz description' },
    { id: 3, title: 'Quiz 3', tags: ['JAVASCRIPT'], description: 'JavaScript quiz description' },
    // Add more quizzes as needed
  ];

  const filteredQuizzes = quizzes.filter(quiz => 
    quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    quiz.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleEdit = (id) => {
    console.log(`Editing quiz with ID: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Deleting quiz with ID: ${id}`);
  };

  const handleViewDetails = (id) => {
    console.log(`Viewing details for quiz with ID: ${id}`);
  };

  return (
    <div className="manage-quizzes-container">
      <h1>Manage Quizzes</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title or tags..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="quiz-list">
        {filteredQuizzes.map((quiz) => (
          <div key={quiz.id} className="quiz-item">
            <span>{quiz.title}</span>
            <button onClick={() => handleViewDetails(quiz.id)}>View Details</button>
            <button onClick={() => handleEdit(quiz.id)}>Edit</button>
            <button onClick={() => handleDelete(quiz.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageQuizzes;

