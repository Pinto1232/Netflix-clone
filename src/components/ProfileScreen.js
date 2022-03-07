import React from 'react'
import { useSelector } from 'react-redux'
import Nav from './Nav'
import './ProfileScreen.css'
import { selectUser } from '../features/userSlice'
import { auth } from "../firebase"

const ProfileScreen = () => {

    // Selecting the user from the user store
    const user = useSelector(selectUser);


    return (
        <div className="profileScreen">
            {/** Import Nav bar into the Profile Screen */}
            <Nav/>

            <div className="profileScreen__body">
                <h2>Edit Profile</h2>

                <div className="profileScreen__info">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" 
                    />
                <div className="profileScreen__details">
                    <h2>User {user.email} is logged</h2>
                    <div className="profileScreen__plans">
                        <h3>Profile Plans</h3>

                        <button
                         onClick={() => auth.signOut()}
                         className="profileScreen__signOut">Sign Out</button>
                    </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default ProfileScreen
