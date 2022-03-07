import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { auth } from './firebase'

//Import the useDispatch hooks
import { useDispatch, useSelector  } from "react-redux"
import { login, logout, selectUser} from './features/userSlice';
import ProfileScreen from './components/ProfileScreen';



function App() {

  //this code enable me to check if the user is login and has access to all the movies 
  const user = useSelector(selectUser);

  //Dispatch the login action from my reducer objects
  const dispatch = useDispatch();


  //Create user effect for the browser stop refreshing while the user login
  useEffect(() => {
       const unsubscribe =  auth.onAuthStateChanged(userAuth => {
          if (userAuth) {
            //Logged in
            console.log(userAuth);

            // for the login action dispatch
            dispatch(
              login({
                uid: userAuth.uid,
                email: userAuth.email,
              })
            );
          }else {
            // logo out 
            dispatch(logout()); // logout need to be a method
          }
        });


        // Google base security
        return unsubscribe;
  }, [dispatch]) //Add dispatch here in order to redirect when click on sign out button


  return (
    <div className="App">
      <Router>
      {!user ? (
        <Login/>
      ): (
        <Switch>
        <Route path='/profile'>
           <ProfileScreen/>
        </Route>
        <Route path="/">
           <HomeScreen />
        </Route>
      </Switch>
      )}
      
      </Router>
    </div>
  );
}

export default App;
