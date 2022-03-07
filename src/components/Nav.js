import React from 'react'
import './Nav.css'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router';


const Nav = () => {
   const [show, setShow] = useState(false);

   // Add the history to allow me when user push the back button
   const history = useHistory();

   //This code will allow the menu to have the hover effect
   const transitionNavBar = () => {
       if (window.scrollY > 100) {
           setShow(true);
       }else {
           setShow(false);
       }
   }

   useEffect(() => {
       window.addEventListener("scroll", transitionNavBar);
       return () => {
           window.removeEventListener("scroll", transitionNavBar)
       }
   }, [])


    return (
        <div className={`nav ${show && "nav__black"}`}>
         <div className="nav__contents">
            <img 
                //This code redirect to a page when a button is clicked
                onClick={() => history.push('/')}
                className="nav__logo"
                src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="logo" 
            />
       
            <img
                //This code redirect to a page when a button is clicked
                onClick={() => history.push('/profile')}
                className="nav__avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" 
            />    
         </div>

       </div>
    )
}

export default Nav;