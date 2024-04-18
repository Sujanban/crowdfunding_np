import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { logoutUser } from '../app/feature/userSlice';
import Navbar from '../components/Navbar'

const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user.data);
    const handleLogout = () => {
        dispatch(logoutUser())
    }
    return (
        <div>
            <Navbar />
            <div className='w-full max-w-7xl mx-auto'>
            <h1>Profile</h1>
            {
                user && (
                    <div>
                        <h1>{user.firstName}</h1>
                        <h1>{user.email}</h1>
                    </div>
                )
            }
            <button onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default Profile