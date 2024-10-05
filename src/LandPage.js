import { NavLink } from "react-router-dom";
// import Navbar from "./Navbar";
import { useNavigate } from 'react-router-dom'
import './App.css';



const LandPage = () => {
    const navigate = useNavigate("");
  return (
    
    <div className='landcontainer'>
        {/* <Navbar/> */}
        <NavLink to='/AdminLogin' className='admin-link'>ADMIN</NavLink>
        {/* <div className='admin'>
            

        </div> */}
         <div className="container">
    <h2>Quiz Platform!</h2>
    {/* <NavLink  to='/LoginPage'>Register Here </NavLink> */}
    <button type="submit" onClick={()=> navigate('/LoginPage')}>Login</button>
    <h2>Login and Boost your skills by participate in quizes</h2 >
    <h2>take a Test and Develope your knowledge </h2>
  </div>
  
  </div>
  )
}

export default LandPage