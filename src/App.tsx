import { useState, useEffect } from 'react'

import Navbar from '../ui/Navbar/Navbar'
import Sidebar from '../ui/Sidebar/Sidebar'
import Home from '../ui/Home/Home'
import About from '../ui/About/About'
import Work from '../ui/Work/Work'
import Experience from '../ui/Experience/Experience'
import Contact from '../ui/Contact/Contact'

import Scroll from '../framer/Scroll/Scroll'
import Loader from '../framer/Loader/Loader'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

import '../src/index.css'

function App() {
  const [loading, setLoading] = useState(true)

  const [refScroll, inViewScroll] = useInView({
    triggerOnce: true,
  });

  const [refNavbar, inViewNavbar] = useInView({
    triggerOnce: true,
  });

  const [refHome, inViewHome] = useInView({
    triggerOnce: true,
  });

  const [refExperience, inViewExperience] = useInView({
    triggerOnce: true,
  });

  const [refAbout, inViewAbout] = useInView({
    triggerOnce: true,
  });

  const [refContact, inViewContact] = useInView({
    triggerOnce: true,
  });

  const [refWork, inViewWork] = useInView({
    triggerOnce: true,
  });
  

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])

  return (
    <>
       {loading ? <Loader /> : 
       <>
          <motion.div
            ref={refScroll}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: inViewScroll ? 0 : 100, opacity: inViewScroll ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Scroll />
          </motion.div>
          <motion.div
            ref={refNavbar}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: inViewNavbar ? 0 : 100, opacity: inViewNavbar ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
          </motion.div>
          <motion.div
            ref={refHome}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: inViewHome ? 0 : 100, opacity: inViewHome ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Home />
          </motion.div>
          <motion.div
            ref={refAbout}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: inViewAbout ? 0 : 100, opacity: inViewAbout ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <About />
          </motion.div>
          <motion.div
            ref={refExperience}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: inViewExperience ? 0 : 100, opacity: inViewExperience ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Experience />
          </motion.div>
          <motion.div
            ref={refWork}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: inViewWork ? 0 : 100, opacity: inViewWork ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Work />
          </motion.div>
          <motion.div
            ref={refContact}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: inViewContact ? 0 : 100, opacity: inViewContact ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Contact />
          </motion.div>
          <Sidebar />
       </>
      }
    </>
  )
}

export default App
