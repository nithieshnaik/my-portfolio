import React ,{useState} from 'react';
import Styles from './Navbar.module.css' ;
import {getimage} from '../../utiles';


const Navbar = () => { 
    const [ menuOpen ,setMenuOpen] = useState(false) ;
  return (
   <nav  className={Styles.navbar}>
    <a  className ={Styles.title} href='/'>Portfolio</a> 
    <div className={Styles.menu}> 
            <img className={Styles.menuBtn} src={ 
                menuOpen 
                ?getimage("nav/closeIcon.png")
                :getimage("nav/menuIcon.png")} 
                alt='memu-buttton' 
                onClick={()=>setMenuOpen(!menuOpen)} />
        <ul className={`${Styles.menuitems} ${menuOpen && Styles.menuOpen}`}
             onClick={()=>setMenuOpen(false)}
             >
            <li>
                <a href='#about'>About</a>
            </li>
            <li>
                 <a href='#experience'>Experience</a>
            </li>
            <li> 
                <a href='#projects'>Projects</a>
            </li>
            <li> 
                <a href='#Contact'>Contact</a>
            </li>

        </ul>
    </div>
   </nav>
  ) 
}

export default Navbar
