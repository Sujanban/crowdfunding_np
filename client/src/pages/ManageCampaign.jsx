import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { fetchCategory, getCategories } from '../app/feature/categorySlice'
import { postCamaign, updateCampaign, deleteCampaign } from '../app/feature/campaignSlice'


import axios from 'axios'
import CampaignUpdates from '../components/CampaignUpdates'

const CreateCampaign = () => {
  return (
    <>
      <Navbar />
      <CampaignUpdates />
      <Footer />
    </>
  )
}

export default CreateCampaign