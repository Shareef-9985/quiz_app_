import React, { useState } from 'react';
import './createquiz.css'; // Ensure your CSS file is included
import { useNavigate } from 'react-router-dom';

const CreateQuiz = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag1, setTag1] = useState('');
  const [tag2, setTag2] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [timeLimit, setTimeLimit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    // Here you can handle saving the quiz
    console.log({ title, description, tags: [tag1, tag2], difficulty, timeLimit });
    // Navigate only after handling the submission logic
    navigate('/AddQuestions');
  };

  return (
    <div className="quiz-creation-form">
      <h1>Create Quiz</h1>
      <form onSubmit={handleSubmit}> {/* Add onSubmit handler */}
        <div>
          <label>Title:</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Tags:</label>
          <div>
            <input 
              type="text" 
              value={tag1} 
              onChange={(e) => setTag1(e.target.value)} 
              placeholder="Tag 1" 
              required 
            />
            <input 
              type="text" 
              value={tag2} 
              onChange={(e) => setTag2(e.target.value)} 
              placeholder="Tag 2" 
              required 
            />
          </div>
        </div>
        <div className='form'>
          <label>Difficulty:</label>
          <select 
            value={difficulty} 
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <div>
          <label>Time Limit (minutes):</label>
          <input 
            type="number" 
            value={timeLimit} 
            onChange={(e) => setTimeLimit(e.target.value)} 
            min="1" 
            required 
          />
        </div>
        <div className="form-action">
          <div className='cancel'>
            <button type="button" onClick={() => { 
              console.log('Cancelled'); 
              navigate('/AdminDashboard'); 
            }}>Cancel</button>
          </div>
          <div className='save'>
            <button type="submit">Save</button> {/* Make this a submit button */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateQuiz;
