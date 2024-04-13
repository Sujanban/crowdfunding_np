import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/userContext';
import { toast } from 'react-hot-toast'

const Profile = () => {
    const { user, setUser } = useUser();
    const navigate = useNavigate();
    const handleLogout = () => {
        axios.get('/api/auth/logout').then((res) => {
            setUser(null);
            if (res.data.message) {
                toast.success("Logout Successful");
                localStorage.removeItem('user');
                navigate('/');
            }
        })
    }
    return (
        <div>
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
    )
}

export default Profile