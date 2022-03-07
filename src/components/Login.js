import React from 'react'
import './Login.css'
import {useState, useEffect} from 'react'
import SignUp from './SignUp';


function Login() {
    const [signIn, setSignIn] = useState(false);


    return (
      <div className="loginScreen">
        <div className="loginScreen__background">
           <img 
               className="loginScreen__logo"
               src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" 
           />

           <button onClick={() => setSignIn(true)}
           className="loginScreen__button">
                Sign In
           </button>

           <div className="loginScreen__gradient">
           </div>

           <div className="loginScreen_body">
              {signIn ? (
                  <SignUp/>
              ): (

                <>
                <h1>Unlimited films, TV programmes and more.</h1>
                <h2>Watch anymore, Cancel at any time.</h2>
                <h3>Ready to watch? Enter your email to create or restart your membership</h3>
                <div className="loginScreen__Input">
                    <form>
                      <input type="email" placeholder="Email Address" />
                      <button
                        onClick={() => setSignIn(true)}
                      className="loginScreen__getStarted">GET STARTED</button>
                    </form>
                </div>
              </>
            )}
           </div>
        </div>
      </div>
    )
}

export default Login
