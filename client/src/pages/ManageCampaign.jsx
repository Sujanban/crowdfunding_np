import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
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