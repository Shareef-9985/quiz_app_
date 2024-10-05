import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import LandPage from './LandPage';
import HomePage from './HomePage';
import AForgotPswd from './AForgotPswd';
import QuizScreen from './QuizScreen';
import AddQuestions from './AddQuestions';

import UForgotPass from './UForgotPswd';
import AdminLogin from './AdminLogin';
import UserProfile from './UserProfile';
import QuizSelection from './QuizSelection';
import AdminDashboard from './AdminDashboard';
import CreateQuiz from './CreateQuiz';
import ManageQuizzes from './ManageQuizzes';
import LeaderBoard from './LeaderBoard';


import ResultsDisplay from './ResultsDisplay';

// import Navbar from "./Navbar";

const App = () => {
  return (
    <div>
      
  {/* <div className='admin-container'>
      <Routes>
      
         
        </Routes>
        </div> */}
      <div className="app-container">
        <Routes>
        <Route path="/" element={<LandPage />} />
          <Route path='/RegisterPage' element={<RegisterPage/>} />
          <Route path='/UForgotPass' element={<UForgotPass/>} />
          <Route path='/AdminLogin' element={<AdminLogin/>} />
          <Route  path="/LoginPage" element={<LoginPage />} />
          <Route  path="/Profile" element={<UserProfile />} />
          <Route  path="/QuizSelection" element={<QuizSelection />} />
          <Route  path="/AdminDashboard" element={<AdminDashboard />} />
          <Route  path="/CreateQuiz" element={<CreateQuiz />} />
          <Route  path="/ManageQuizzes" element={<ManageQuizzes />} />
          <Route  path="/QuizScreen" element={<QuizScreen />} />
          <Route  path="/ResultsDisplay" element={<ResultsDisplay />} />
          <Route  path="/AForgotPswd" element={<AForgotPswd />} />
          <Route  path="/AddQuestions" element={<AddQuestions />} />
          <Route  path="/LeaderBoard" element={<LeaderBoard />} />









          



        
          <Route path="/home" element={<HomePage />} />
       
         

        </Routes>
        {/* <React.Fragment> 
            <AForgotPswd/>
            </React.Fragment> */}
      </div>
      </div>
  )
}
export default App
