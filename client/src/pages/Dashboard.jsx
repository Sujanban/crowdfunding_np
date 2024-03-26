import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { UserContext, useUser } from '../contexts/userContext';
import { useCampaign } from '../contexts/campaignContext';
import Navbar from '../components/Navbar'

const Dashboard = () => {
  const [file, setFile] = useState({});
  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('file', file)
    console.log(formData)
    try {
      const res = await axios.post('/api/campaign/upload', formData)
      console.log(res)
      console.log(formData)
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <Navbar />
      {/* <div className='p-4 max-w-xl mx-auto flex justify-around items-center'>
        <Link to='/'>Home</Link><br />
        <Link to='/createCampaign'>Create Campaign</Link><br />
        <Link to='/manageFundraiserCategory'>Manage Category</Link>
        <Link to='/profile'>Profile</Link><br />
      </div> */}
      <h1>Dashboard</h1>
      {/* <div>
        <form onSubmit={handleSubmit} enctype="multipart/form-data">
          <input type="file" name="file" onChange={(e) => setFile(e.target.files[0])} />
          <input type="submit" />
        </form>
        <img src="http://localhost:5000/static/file-1711334908649-271187486" alt="" />
      </div> */}
    </div>
  )
}

export default Dashboard