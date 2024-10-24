import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Component/Navbar.jsx';
import Footer from './Component/Footer.jsx';
import Lpage from './Component/Lpage.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Lpage/>
      <br/>
      <hr/>
      <br/>
      <Footer/>

    </>
  )
}

export default App