import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfile } from '../app/feature/userSlice';

const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.data)
    useEffect(() => {
        dispatch(fetchUserProfile())
    }, [])
    return (
        <div>
            <Navbar />
            <div className='w-full max-w-7xl mx-auto'>
                <div className='px-8 py-20'>
                <h1 className='text-2xl font-semibold '>User Profile</h1>
                <p><span>Name: {user.firstName} {user.lastName}</span></p>
                <p>Email: {user.email}</p>
                <p>User Role: {
                    user.role == 0 ? 'User' : Admin}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile