import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCampaign, getCampaigns } from '../app/feature/campaignSlice';
import bank from '../assets/images/bank.png'

// icons
import { CiBank } from "react-icons/ci";
import { BsBank } from "react-icons/bs";
import { Link } from 'react-router-dom';



const MyCampaign = () => {
  const dispatch = useDispatch();
  const myCampaigns = useSelector(getCampaigns);
  console.log(myCampaigns)

  useEffect(() => {
    dispatch(fetchCampaign())
  }, [])
  return (
    <>
      <Navbar />
      <div className='px-8 py-20 max-w-7xl mx-auto'>
        <div className='p-4 flex justify-center'>
          <h1 className='text-2xl font-semibold border-b-2 border-green-600'>Manage your campaigns</h1>
        </div>

        <div className='px-8 py-20 md:grid grid-cols-2 gap-4 '>
          {
            myCampaigns && myCampaigns.map((campaign) =>
              <div className='flex bg-white rounded-lg shadow-lg p-4 '>
                <img className='w-60 h-52 object-cover rounded-md ' src={campaign.thumbnail} alt="" />
                <div className='px-4 py-2'>
                  <h1 className='text-xl font-semibold'>{campaign.campaignTitle.slice(0, 30)}</h1>
                  <p className='py-2 text-slate-600'>{campaign.campaignDescription.slice(0, 100)}</p>
                  <div className='py-4'>
                    <Link to={`/managecampaign/${campaign._id}`} className='py-3 px-4 bg-green-600 text-white text-sm rounded'>Manage Campaign</Link>
                  </div>
                </div>
              </div>
            )
          }
        </div>
        </div>

        <div className='bg-slate-100'>
          <div className='px-8 py-20 flex items-center justify-between max-w-5xl mx-auto'>
            <div className='p-6'>
              <h1 className='m-2 text-2xl font-semibold border-b-2 border-green-600'>Setup your Banking Details</h1>
              <p className='px-2'>Fillup your banking credentials in order to withdraw your money to the bank.</p>
              <p className='px-2'>No Charge Applied</p>
              <button className='my-3 py-2 px-6 bg-yellow-500 text-black  rounded-full'>Let's Start</button>
            </div>
            <div className='relative '>
              {/* <div className='absolute h-72 w-72 rounded-full bg-yellow-200 blur-3xl'></div> */}
              {/* <CiBank size={200} /> */}
              <img className='-40' src='https://img.icons8.com/bubbles/300/000000/bank-building.png' alt="" />
            </div>
            {/* <div className='flex items-center'>
            <CiBank size={200} />
            <div>
              <h1 className='p-2 text-xl'>Setup your Banking Details</h1>
              <p className='px-2'>Fillup your banking credentials in order to withdraw your money to the bank.</p>
              <p className='p-2'>No Charge Applied</p>
            </div>
          </div>
          <button className='py-4 px-8 bg-yellow-500 text-black  rounded'>Let's Start</button> */}
          </div>
        </div>

      {/* </div> */}

      <Footer />
    </>
  )
}

export default MyCampaign