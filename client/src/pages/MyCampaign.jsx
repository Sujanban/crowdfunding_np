import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCampaignsByUserID } from '../app/feature/campaignSlice';
import LoggedUserCampaignCard from '../components/LoggedUserCampaignCard'
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import AddBankBanner from '../components/AddBankBanner';

const MyCampaign = () => {
  const navigate = useNavigate();
  const userId = useSelector(state => state.user.data._id)
  // redux
  const dispatch = useDispatch();
  const myCampaigns = useSelector(state => state.campaign.data)
  const isLoading = useSelector(state => state.campaign.isLoading)

  useEffect(() => {
    dispatch(fetchCampaignsByUserID(userId)).then(res => {
      if (res.payload.error) {
        navigate('/login')
      }
    })
  }, [])

  // popup contols
  const [popupVisible, setPopupVisible] = useState(false);
  return (
    <>
      <Navbar />
      {
        isLoading ? <div className='w-full flex justify-center items-center h-screen text-2xl'>
          <Loader />
        </div> : ''
      }
      <div className={`px-4 md:px-8 my-20 max-w-7xl mx-auto `}>
        <div className=' flex items-center justify-center space-x-2'>
          <h1 className='text-xl font-medium mx-auto border-b border-gray-300'>Manage campaigns</h1>
        </div>
        <div className=' py-12 md:py-20 md:grid grid-cols-4 gap-4 '>
          {
            myCampaigns.length > 0 && myCampaigns.map((campaign, index) =>
              <LoggedUserCampaignCard key={index} popupVisible={popupVisible} setPopupVisible={setPopupVisible} campaign={campaign} index={index} />
            )
          }
        </div>
        <AddBankBanner />
      </div>
      <Footer />
    </>
  )
}

export default MyCampaign