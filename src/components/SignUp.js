import React, {useRef} from 'react'
import { auth } from '../firebase';
import './SignUp.css'

function SignUp() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    //Registration setup 
    const register = (e) => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) => {
            console.log(authUser);
        })
        .catch((error) => {
            alert(error.message);
        });
    };



    //Login setup
    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        });
    };
    
    return ( 
        <div className="signupScreen">
            <form>
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder="Email Address" />  
                <input ref={passwordRef} placeholder="Password" type="password"/>
                <button type="submit" onClick={signIn}>Sign In</button>

                <h4>
                 <span className="signupScreen_gray"> New to Netflix?</span>
                 <span className="signupScreen_link" onClick={register}>Sign Up Now</span> 
                 </h4>
            </form>
        </div>
    )
}

export default SignUp
 