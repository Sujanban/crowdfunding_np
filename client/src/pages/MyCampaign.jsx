import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCampaignsByUserID } from '../app/feature/campaignSlice';
import Loading from '../components/Loading'
import LoggedUserCampaignCard from '../components/LoggedUserCampaignCard'
import { useNavigate } from 'react-router-dom';

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
          <Loading />
        </div> : ''
      }
      <div className={`md:px-8 my-12 md:py-20 max-w-7xl mx-auto `}>
        <div className='p-4 flex justify-center'>
          <h1 className='text-xl md:text-2xl font-semibold border-b-2 border-green-600'>Manage your campaigns</h1>
        </div>
        <div className=' py-12 md:py-20 md:grid grid-cols-4 gap-4 '>
          {isLoading ? <Loading /> :
            myCampaigns && myCampaigns.map((campaign, index) =>
              <LoggedUserCampaignCard key={index} popupVisible={popupVisible} setPopupVisible={setPopupVisible} campaign={campaign} index={index} />
            )
          }
        </div>
      </div>
      <div className='bg-slate-100'>
        <div className='px-4 md:px-8 py-12 md:py-20 flex  flex-wrap items-center justify-between max-w-5xl mx-auto'>
          <div className='relative md:hidden mx-auto'>
            <img className='h-32 ' src='https://img.icons8.com/bubbles/300/000000/bank-building.png' alt="" />
          </div>
          <div className='md:p-6 text-center md:text-left'>
            <h1 className='md:m-2 text-xl md:text-2xl font-semibold border-b-2 border-green-600'>Setup your Banking Details</h1>
            <p className='md:px-2'>Fillup your banking credentials in order to withdraw your money to the bank.</p>
            <p className='md:px-2'>No Charge Applied</p>
            <button className='my-3 py-2 px-6 bg-yellow-500 text-black text-xs md:text-md rounded-full'>Let's Start</button>
          </div>
          <div className='relative hidden md:flex'>
            <img className='-40' src='https://img.icons8.com/bubbles/300/000000/bank-building.png' alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default MyCampaign