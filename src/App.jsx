import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './Component/Navbar.jsx';
import Footer from './Component/LandingPage/Footer.jsx';
import LandingPage from './Component/LandingPage/HeroSection.jsx';
import SeekerProfile from './Component/Profiles/JobSeekerProfile.jsx'
import RecruiterProfile from './Component/Profiles/RecruiterProfile.jsx'
import  SeekerReg from './Component/Auth/SeekerReg/seek.jsx'
import  RecruiterReg from './Component/Auth/RecruiterRegistration.jsx'

import JobDetail from './Component/JobDetail.jsx';
import UserDetail from './Component/UserDetail.jsx';
import RecruiterHome from './Component/RecruiterHome.jsx';
import JobPosting from './Component/JobPosting.jsx';
import Login from './Component/Login.jsx';
import Admin from './Component/Admin.jsx';



function App() {
  const router = createBrowserRouter([{
    path:"/",
    element:<><Navbar/><LandingPage/></>
  },{
    path:"seeker-profile",
    element: <><Navbar/><SeekerProfile/></>
  },{
    path:"recruiter-profile",
    element: <><Navbar/><RecruiterProfile/></>
  },{
    path:"seeker-reg",
    element: <><Navbar/><SeekerReg/></>
  },{
    path:"recruiter-reg",
    element: <><Navbar/><RecruiterReg/></>
  },{
    path:"job-detail",
    element: <><Navbar/><JobDetail/></>
  },{
    path:"user-detail",
    element: <><Navbar/><UserDetail/></>
  },{
    path:"recruiter-home",
    element: <><Navbar/><RecruiterHome/></>
  },{
    path:"job-posting",
    element: <><Navbar/><JobPosting/></>
  },{
    path:"login",
    element: <><Navbar/><Login/></>
  },{
    path:"admin",
    element: <><Navbar/><Admin/></>
  },
// Job Detail page, User Detail Page , Recruiter Home , New Job Posting Page , Login Page, Admin Page 

])

  return (
    <>
      <RouterProvider router ={router}/>
      <br/>
      <hr/>
      <br/>
      <Footer/>
      
    </>
  )
}

export default App