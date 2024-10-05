import React from 'react';
import { NavLink , useNavigate } from "react-router-dom";

import './App.css';

const AdminDashboard = () => {
  const navigate = useNavigate()
  const quizzes = [
    { title: 'Html Quiz', attempts: 30 },
    { title: 'Css Quiz', attempts: 20 },
    { title: 'Javascript Quiz', attempts: 15 },
  ];

  const userStatistics = [
    { username: 'User1', totalPoints: 120 },
    { username: 'User2', totalPoints: 150 },
    { username: 'User3', totalPoints: 90 },
  ];

  const recentActivities = [
    'User1 completed Html Quiz',
    'User2 attempted Css Quiz',
    'User3 started Javascript Quiz',
  ];

  const handleLogout = () => {
    // Handle your logout logic here (e.g., clear user data, tokens, etc.)
    console.log('Logged out');
    navigate('/AdminLogin'); // Redirect to login page after logout
};

  return (
    <div className="admin-dashboard">
          <div className="logout"  onClick={handleLogout}><button>LOGOUT</button></div>
          
      <h1 style={{color:'black'}}> Admin Dashboard</h1>
      <div className="Admin-top-bar">
                    <NavLink to="/ManageQuizzes" className="manage-quiz"></NavLink>
                    <NavLink to="/createquiz" className="create-quiz"></NavLink>

                </div>
      <div className='outsection'>
      <div className="section">
        <h3>Overview of Quizzes</h3>
        <ul>
          {quizzes.map((quiz, index) => (
            <li key={index}>{quiz.title} - Attempts: {quiz.attempts}</li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h3>User Statistics</h3>
        <ul>
          {userStatistics.map((user, index) => (
            <li key={index}>{user.username} - Total Points: {user.totalPoints}</li>
          ))}
        </ul>
      </div>
      <div className="section">
        <h3>Recent Activities</h3>
        <ul>
          {recentActivities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
