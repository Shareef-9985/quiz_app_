

import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './HomePage.css'

const HomePage = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDifficulty, setSelectedDifficulty] = useState('All');
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

    const filteredQuizzes = quizzes.filter(quiz =>
        (selectedDifficulty === 'All' || quiz.difficulty === selectedDifficulty) &&
        quiz.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleLogout = () => {
        // Handle your logout logic here (e.g., clear user data, tokens, etc.)
        console.log('Logged out');
        navigate('/LoginPage'); // Redirect to login page after logout
    };

    return (
        <div className="home-container">
            <div className="logout"  onClick={handleLogout}><button>LOGOUT</button></div>
            
            <header>
                <h1>Quiz Platform</h1>
            
                <div className="top-bar">
                    <NavLink to="/profile" className="profile-link"></NavLink>
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search quizzes..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </header>

            <NavLink to='/QuizSelection' className="quizselect" ></NavLink>
            <div className="categories">

                <h2>Categories:</h2>
                <div className='cate'>
                    <span className={selectedDifficulty === 'All' ? 'highlight' : ''} onClick={() => setSelectedDifficulty('All')}>All</span>

                    <span className={selectedDifficulty === 'Easy' ? 'highlight' : ''} onClick={() => setSelectedDifficulty('Easy')}>Easy</span>
                    <span className={selectedDifficulty === 'Medium' ? 'highlight' : ''} onClick={() => setSelectedDifficulty('Medium')}>Medium</span>
                    <span className={selectedDifficulty === 'Hard' ? 'highlight' : ''} onClick={() => setSelectedDifficulty('Hard')}>Hard</span>
                </div>
            </div>

            <div className="quizzes">
                <h2>Available Quizzes:</h2>
                <ul className="quiz-list">
                    {filteredQuizzes.length > 0 ? (
                        filteredQuizzes.map((quiz) => (
                            <li key={quiz.id}>
                                <h3>{quiz.title}</h3>
                                <p>{quiz.description}</p>
                                <p>Difficulty: {quiz.difficulty}</p>
                                <button
                                    className='sd'
                                    onClick={() => {
                                        console.log(`Starting ${quiz.title}`);
                                        navigate('/QuizScreen');
                                    }}
                                >

                                </button>

                            </li>
                        ))
                    ) : (
                        <p>No quizzes found.</p>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default HomePage;
