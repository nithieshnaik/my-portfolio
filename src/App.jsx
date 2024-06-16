
import styles from'./App.module.css' ; 
import Navbar from './conponets/Nav/Navbar'; 
import Hero from './conponets/Hero/Hero'; 
import About from './conponets/about/About' ; 
import Experience from './conponets/Experience/Experience'; 

import Contact from './conponets/Contact/Contact';
import  Projects  from './conponets/Projects/Projects';

function App() {
  

  return (
    <>
       <div className={styles.App}>
          <Navbar/>
          <Hero/>
          <About/>
          <Experience/>  
          <Projects/>
          <Contact/>
          
          
         
        
       </div>
    </>
  )
}

export default App
