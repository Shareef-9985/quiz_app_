import React, { useState } from 'react';
import './App.css';

const UserProfile = () => {
  const [user, setUser] = useState({
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    password: '', // Don't show passwords in plaintext
    score: 0,
  });

  const [tempUser, setTempUser] = useState(user); // Temporary state for editing
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTempUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditToggle = () => {
    if (isEditing) {
      // Reset tempUser to user when canceling edit
      setTempUser(user);
    }
    setIsEditing((prev) => !prev);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!tempUser.email) {
      setError('Email is required.');
      return;
    }
    setUser(tempUser); // Update user with tempUser values
    setIsEditing(false);
    setError('');
  };

  return (
    <div className="profile-container">
      <div className="profile-details">
        <h2 className='up'>User Profile</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSave}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <span>{user.username}</span> {/* Username is now displayed but not editable */}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            {isEditing ? (
              <input
                type="email"
                id="email"
                name="email"
                value={tempUser.email}
                onChange={handleChange}
                required
              />
            ) : (
              <span>{user.email}</span>
            )}
          </div>
          {isEditing && (
            <div className="form-group">
              <label htmlFor="password">New Password:</label>
              <input 
                type="password"
                id="password"
                name="password"
                value={tempUser.password}
                onChange={handleChange}
              />
            </div>
          )}
          <div className="form-action">
            <div className='cancel'>
              <button type="button" onClick={handleEditToggle}>
                {isEditing ? 'Cancel' : 'Edit'}
              </button>
            </div>
            <div className='save'>
              {isEditing && <button type="submit">Save</button>}
            </div>
          </div>
        </form>
      </div>
      <div className="score-container">
        <h2>Current Score</h2>
        <p>{user.score}</p>
      </div>
    </div>
  );
};

export default UserProfile;
