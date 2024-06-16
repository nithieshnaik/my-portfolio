import React from 'react' 
import styles from './Contact.module.css'   
import { getimage  } from '../../utiles'


const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
    <div className={styles.text}>
      <h2>Contact</h2>
      <p>Feel free to reach out!</p>
    </div>
    <ul className={styles.links}>
      <li className={styles.link}>
        <img src={getimage("Contact/emailIcon.png")} alt="Email icon" />
        <a href="mailto:myemail@email.com">nithieshnaik8@gmail.com</a>
      </li>
      <li className={styles.link}>
        <img
          src={getimage("Contact/linkedinIcon.png")}
          alt="LinkedIn icon"
        />
        <a href="https://www.linkedin.com/in/nithiesh-naik-17bb7a245/">linkedin.com/nithieshnaik</a>
      </li>
      <li className={styles.link}>
        <img src={getimage("Contact/githubIcon.png")} alt="Github icon" />
        <a href="https://github.com/nithieshnaik
        ">github.com/nithieshnaik</a>
      </li>
    </ul>
  </footer>
  )
}

export default Contact
