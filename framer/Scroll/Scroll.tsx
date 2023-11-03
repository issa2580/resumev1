// import React from 'react';
// import { motion, useAnimation } from 'framer-motion';

// function Scroll() {
//   const controls = useAnimation();

//   const handleScroll = () => {
//     const scrollY = window.scrollY;
//     const scrollHeight = document.body.scrollHeight - window.innerHeight;
//     const scrollProgress = scrollY / scrollHeight;
//     const windowWidth = window.innerWidth;
//     const scrolledWidth = scrollProgress * windowWidth;
//     controls.start({ width: scrolledWidth });
//   };

//   React.useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div style={{overflowX: 'hidden', overflowY: 'scroll' }}>
//       <motion.div
//         style={{
//           width: '0%',
//           height: '2px',
//           background: '#64ffda',
//           position: 'fixed',
//           bottom: '0',
//         }}
//         animate={controls}
//       />
//     </div>
//   );
// }

// export default Scroll;


import React from 'react';
import { motion, useAnimation } from 'framer-motion';

function Scroll() {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollHeight = document.body.scrollHeight - window.innerHeight;
    const scrollProgress = scrollY / scrollHeight;
    const windowWidth = window.innerWidth;
    const scrolledWidth = scrollProgress * windowWidth;
    controls.start({ width: scrolledWidth });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ height: '1px', background: '#64ffda', position: 'fixed', top: '80px', left: '0', width: '0' }}>
      <motion.div
        style={{
          width: '0%',
          height: '100%',
          background: '#64ffda',
        }}
        animate={controls}
      />
    </div>
  );
}

export default Scroll;
