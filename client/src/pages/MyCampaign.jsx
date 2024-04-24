import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import WarningPopup from '../components/WarningPopup'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCampaign, getCampaigns,fetchCampaignsByUserID } from '../app/feature/campaignSlice';
import bank from '../assets/images/bank.png'
import Loading from '../components/Loading'

// icons
import { CiBank } from "react-icons/ci";
import { BsBank } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";


import { Link, useNavigate } from 'react-router-dom';



const MyCampaign = () => {
  const navigate = useNavigate();
  // redux
  const dispatch = useDispatch();
  const myCampaigns = useSelector(state=>state.campaign.data)
  const isLoading = useSelector(state=>state.campaign.isLoading)
  // const myCampaigns = useSelector(getCampaigns);

  useEffect(() => {
    dispatch(fetchCampaignsByUserID()).then(res=>{
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

        <div className=' py-12 md:py-20 md:grid grid-cols-2 gap-4 '>
          { isLoading ? <Loading/> :
          myCampaigns && myCampaigns.map((campaign,index) =>
          <div key={index} className='md:grid grid-cols-3 bg-white rounded-lg my-1 md:shadow-lg p-4 '>
            <img className='col-span-1 w-full h-40 md:h-52 object-cover rounded-md ' src={campaign.thumbnail} alt="" />
            <div className='md:px-4 py-2 col-span-2'>
              <h1 className='text-lg md:text-xl font-semibold'>{campaign.campaignTitle.slice(0, 30)}</h1>
              <p className='text-sm md:text-inherit py-2 text-slate-600'>{campaign.campaignDescription.slice(0, 100)}</p>
              <div className='py-4 flex items-center justify-between'>
                <Link to={`/managecampaign/${campaign._id}`} className='py-3 px-4 flex items-center text-xs  text-black  rounded'><CiEdit size={15} />Manage Campaign</Link>
                <button
                  onClick={() => setPopupVisible(true)} className='py-3 text-xs px-4 flex items-center space-x-2 bg-green-600 text-white rounded'><CiCircleCheck size={15} />Mark Completed</button>
              </div>
            </div>
            {
              popupVisible && <WarningPopup setPopupVisible={setPopupVisible} id={campaign._id} />
            }
          </div>
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