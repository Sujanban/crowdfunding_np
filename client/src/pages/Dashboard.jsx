import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { UserContext, useUser } from '../contexts/userContext';
import { useCampaign } from '../contexts/campaignContext';

const Dashboard = () => {
  // contexts
  const { user, setUser } = useUser();
  console.log(user)
  const {campaign,setCampaign,createCampaign} = useCampaign();


  const navigate = useNavigate();
  axios.get('/dashboard').then((res) => {
    if (res.data.error) {
      toast.error(res.data.error);
      navigate('/login')
    }
  })

// const createCampaign = () => {
//   axios.post('/createCampaign', campaign).then((res) => {
//     if (res.data.error) {
//       toast.error(res.data.error);
//     } else {
//       toast.success(res.data.message);
//     }
//   })
// }
  


    return (
      <div>
        <h1 className='p-4'>
          <Link to='/'>Home</Link>
          <Link to='/profile'>Profile</Link>
          <button onClick={createCampaign}>create campaign</button>
        </h1>
      </div>
    )
  }

  export default Dashboard