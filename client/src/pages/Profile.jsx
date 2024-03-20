import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    useEffect(() => {
        axios.get('/profile').then((res) => {
            setUser(res.data);
            if(res.data.error){
                navigate('/login')
            }
        })
    }, [])

    const handleLogout = () => {
        axios.get('/logout').then((res) => {
            setUser(null);
            if(res.data.message){
                console.log(res.data.message)
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