import React from 'react';
import './Leaderboard.css'; // Add your styling file

const LeaderBoard = () => {
    // Sample data for demonstration
    const users = [
        { name: 'User1', points: 120 },
        { name: 'User2', points: 95 },
        { name: 'User3', points: 80 },
        { name: 'User4', points: 75 },
        { name: 'User5', points: 60 },
    ];

    // Assume this is the current user
    const currentUser = { name: 'YourUser', points: 85 };

    // Sort users by points
    const sortedUsers = [...users, currentUser].sort((a, b) => b.points - a.points);

    // Find the current user's rank
    const userRank = sortedUsers.findIndex(user => user.name === currentUser.name) + 1;

    return (
        <div className='maincontainer'>
            <h1>Quiz Platform</h1>
        <div className="leaderboard-container">
            
            <h2>Leaderboard</h2>
            <ul className="leaderboard-list">
                {sortedUsers.map((user, index) => (
                    <li key={index}>
                        {index + 1}. {user.name} - [{user.points}] points
                    </li>
                ))}
            </ul>
            <div className="user-rank">
                <h3>Your Rank: {userRank}</h3>
                <p>Your Score: [{currentUser.points}] points</p>
            </div>
        </div>
        </div>
    );
}

export default LeaderBoard;
