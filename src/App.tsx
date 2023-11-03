import React, { useState, useEffect } from 'react'

import Navbar from '../ui/Navbar/Navbar'
import Sidebar from '../ui/Sidebar/Sidebar'
import Home from '../ui/Home/Home'
import About from '../ui/About/About'
import Work from '../ui/Work/Work'
import Experience from '../ui/Experience/Experience'
import Contact from '../ui/Contact/Contact'

import Scroll from '../framer/Scroll/Scroll'
import Loader from '../framer/Loader/Loader'

import '../src/index.css'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <>
       {loading ? <Loader /> : 
       <>
      <Scroll />
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Work />
      <Contact />
      <Sidebar />
      </>
      }
    </>
  )
}

export default App
