import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { UserContext, useUser } from '../contexts/userContext';
import { useCampaign } from '../contexts/campaignContext';

const Dashboard = () => {
  const { campaign, setCampaign, createCampaign } = useCampaign();
  const navigate = useNavigate();
  return (
    <div className='p-4 max-w-xl mx-auto flex justify-around items-center'>
      <Link to='/'>Home</Link><br />
      <Link to='/createCampaign'>Create Campaign</Link><br />
      <Link to='/manageFundraiserCategory'>Manage Category</Link>
      <Link to='/profile'>Profile</Link><br />
    </div>
  )
}

export default Dashboard