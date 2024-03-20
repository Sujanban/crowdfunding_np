import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const Dashboard = () => {
  const navigate = useNavigate();
   axios.get('/dashboard').then((res) => {
    if(res.data.error){
      toast.error(res.data.error);
      navigate('/login')
    }
  })
  return (
    <div>
      <h1 className='p-4'>
        <Link to='/'>Home</Link>
        <Link to='/profile'>Profile</Link>
      </h1>
    </div>
  )
}

export default Dashboard