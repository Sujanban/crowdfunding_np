import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WarningPopup from '../components/WarningPopup'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCampaign, getCampaigns, fetchCampaignsByUserID } from '../app/feature/campaignSlice';
import bank from '../assets/images/bank.png'
import Loading from '../components/Loading'

// icons
import { CiBank } from "react-icons/ci";
import { BsBank } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";


import { Link, useNavigate } from 'react-router-dom';
import { GiUpgrade } from 'react-icons/gi'
import axios from 'axios'



const MyCampaign = () => {
  const navigate = useNavigate();
  const userId = useSelector(state => state.user.data._id)
  // redux
  const dispatch = useDispatch();
  const myCampaigns = useSelector(state => state.campaign.data)
  const isLoading = useSelector(state => state.campaign.isLoading)
  // const myCampaigns = useSelector(getCampaigns);

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
      <div className={`md:px-8 my-12 md:py-20 max-w-7xl mx-auto `}>
        <div className='p-4 flex justify-center'>
          <h1 className='text-xl md:text-2xl font-semibold border-b-2 border-green-600'>Manage your campaigns</h1>
        </div>

        <div className=' py-12 md:py-20 md:grid grid-cols-4 gap-4 '>
          {isLoading ? <Loading /> :
            myCampaigns && myCampaigns.map((campaign, index) =>
              <Link className='my-2 shadow z-20' key={index} >
                <div className=' h-40 relative'>
                  <div>
                    <div className='absolute -z-10 -right-2 bottom-0 rotate-45 w-4 h-4 bg-emerald-600'></div>
                    <div className='absolute p-1 px-3 -right-3 bottom-2 text-xs bg-emerald-600 text-white'>Featured Campaign</div>
                  </div>
                  <div className='absolute top-2 left-2 px-2 py-1 text-xs bg-white rounded-md'>
                    <p>6 Days Left</p>
                  </div>
                  <div className='absolute left-2 bottom-2 p-2'>
                    <GiUpgrade className='p-2 animate-pulse text-emerald-600 bg-white rounded-full text-3xl outline outline-offset-2 outline-white outline-1' />
                  </div>
                  <img className='w-full h-full object-cover rounded-t-xl' src={campaign.thumbnail} alt="" />
                </div>
                <div className='grid gap-1 bg-gradient-to-b from-emerald-50'>
                  <Link to={`/campaign/${campaign._id}`}>
                    <h1 className='p-2 font-bold'>{campaign.campaignTitle.slice(0, 60)}</h1>
                  </Link>
                  <div className='px-2 pb- grid grid-cols-2 gap-2'>
                    <Link to={`/managecampaign/${campaign._id}`}
                      className='py-3 px-4 flex items-center justify-center text-xs rounded border border-emerald-200 text-emerald-600 bg-emerald-50 hover:bg-emerald-100 transition-all duration-300'>Manage Campaign</Link>
                    <button
                      onClick={() => setPopupVisible(true)}
                      className='py-3 text-xs px-4 flex items-center justify-center space-x-2 border border-orange-200 bg-orange-50 hover:bg-orange-100 text-orange-600 transition-all duration-300  rounded '>Mark Completed</button>
                    {
                      popupVisible && <WarningPopup setPopupVisible={setPopupVisible} id={campaign._id} />
                    }
                  </div>

                  <div className=' grid grid-cols-3 text-center'>
                    <div className='p-1 ringg-1 border-r ring-emerald-100 '>
                      <p className='text-xs text-gray-500'>Raised</p>
                      <h1 className='font-bold'>₹ 120,500</h1>
                    </div>
                    <div className='p-1 ringg-1 border-r ring-emerald-100 '>
                      <p className='text-xs text-gray-500'>Goals</p>
                      <h1 className='font-bold'>₹ {campaign.goalAmount}</h1>
                    </div>
                    <div className='p-1 ringg-1  ring-emerald-100 '>
                      <p className='text-xs text-gray-500'>Left</p>
                      <h1 className='font-bold'>₹ 10,000</h1>
                    </div>
                  </div>
                </div>
              </Link>
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

      {/* </div> */}

      <Footer />
    </>
  )
}

export default MyCampaign