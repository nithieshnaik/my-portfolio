import React from 'react'   ;
import styles from "./Hero.module.css" ;
import {getimage} from "../../utiles"


export const Hero = () => {
  return (
     <section className={styles.container}> 
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Nithiesh Naik</h1> 
         <p className={styles.descripation}>
         I'm a full-stack developer with 1 years of experience using React and
          NodeJS. Reach out if you'd like to know more!
         </p> 
          <button className={styles.cssbtn}> <a href="mailto:nithieshnaik8gmail.com" className={styles.contactBtn}>
            Contact Me
         </a></button> 
      </div>
      <img src={getimage("hero/hero4.png")} 
      alt='Hero image of me' 
      className={styles.heroImg}/>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
     </section>
  )
}

export default Hero
