import React, { useState } from 'react';
import './AddQuestions.css';
import { useNavigate } from 'react-router-dom';


const AddQuestions = () => {
  const navigate = useNavigate();

  const [question, setQuestion] = useState('');
  const [answers, setAnswers] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [tags, setTags] = useState(['', '']);

  const handleAnswerChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleTagChange = (index, value) => {
    const newTags = [...tags];
    newTags[index] = value;
    setTags(newTags);
  };

  const validateInputs = () => {
    if (!question) {
      alert("Question cannot be empty.");
      return false;
    }
    if (answers.some(answer => !answer)) {
      alert("All answers must be provided.");
      return false;
    }
    if (!correctAnswer) {
      alert("Correct answer cannot be empty.");
      return false;
    }
    if (!answers.includes(correctAnswer)) {
      alert("Correct answer must be one of the provided answers.");
      return false;
    }
    if (tags.some(tag => !tag)) {
      alert("All tags must be provided.");
      return false;
    }
    return true;
  };

  const handleAddQuestion = () => {
    if (validateInputs()) {
      console.log({
        question,
        answers,
        correctAnswer,
        tags,
      });
      // resetFields();
      alert("Question added successfully!");
    }
  };

  const handleSave = () => {
    if (validateInputs()) {
      alert("Question saved!");
      console.log("Question saved!");
      resetFields();
    }
  };

  const handleCancel = () => {
    resetFields();
  };

  const resetFields = () => {
    setQuestion('');
    setAnswers(['', '', '', '']);
    setCorrectAnswer('');
    setTags(['', '']);
  };

  return (
    <div className="add-question-screen">
      <h1 className="add-header">Add Questions</h1>
      <div className="question-form">
        <div className="form-group">
          <label>Question:</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>
        {answers.map((answer, index) => (
          <div key={index} className="form-group">
            <label>Answer {index + 1}:</label>
            <input
              type="text"
              value={answer}
              onChange={(e) => handleAnswerChange(index, e.target.value)}
              required
            />
          </div>
        ))}
        <div className="form-group">
          <label>Correct Answer:</label>
          <input
            type="text"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Tags:</label>
          {tags.map((tag, index) => (
            <input
              key={index}
              type="text"
              value={tag}
              onChange={(e) => handleTagChange(index, e.target.value)}
              placeholder={`Tag ${index + 1}`}
            />
          ))}
        </div>
        <div className="form-action">
          
          <button onClick={handleAddQuestion}>Add Question</button>
          <div className="save">
          <button  onClick={handleSave}>Save</button></div>
          <div className='cancel'>
          <button onClick={ ()=> {handleCancel() ; navigate('/CreateQuiz') }}>Cancel</button></div>

        </div>
      </div>
    </div>
  );
};

export default AddQuestions;
