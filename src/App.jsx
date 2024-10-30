import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Navbar from './Component/Navbar.jsx';
import Footer from './Component/LandingPage/Footer.jsx';
import LandingPage from './Component/LandingPage/HeroSection.jsx';
import SeekerProfile from './Component/Profiles/JobSeekerProfile.jsx'
import RecruiterProfile from './Component/Profiles/RecruiterProfile.jsx'
import  SeekerReg from './Component/Auth/JobseekerRegistration.jsx'
import  RecruiterReg from './Component/Auth/RecruiterRegistration.jsx'



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
  },


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