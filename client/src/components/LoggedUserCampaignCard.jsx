import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GiUpgrade } from "react-icons/gi";

import { FaHeart } from "react-icons/fa";
import axios from 'axios';
import WarningPopup from './WarningPopup';


const Card = ({ popupVisible, setPopupVisible, campaign, index }) => {
    const [donations, setDonations] = useState([]);
    const donationRaised = donations.reduce((acc, curr) => acc + curr.amount, 0);
    const fetchDonationByCampaign = async () => {
        const res = await axios.get(`/api/donation/fetchDonationByCampaign/${campaign._id}`);
        setDonations(res.data)
    }
    useEffect(() => {
        fetchDonationByCampaign()
    }, [])
    return (
        <div key={index}>
            <div className='my-4 h-40 relative'>
                <img className='w-full h-full object-cover rounded-t-xl' src={campaign.thumbnail?.url} alt="" />
            </div>
            <div className='grid gap-1 bg-gradient-to-b from-emerald-50'>
                <Link to={`/campaign/${campaign._id}`}>
                    <h1 className='p-2 font-medium'>{campaign.campaignTitle.slice(0, 60)}</h1>
                </Link>
                <div className='grid grid-cols-2 gap-2'>
                    <Link to={`/managecampaign/${campaign._id}`}
                        className='py-2 px-2 flex items-center justify-center text-xs rounded border border-emerald-200 text-emerald-600 bg-emerald-50 hover:bg-emerald-100 transition-all duration-300'>Manage Campaign</Link>
                    <button
                        onClick={() => setPopupVisible(true)}
                        className='py-3 text-xs px-4 flex items-center justify-center space-x-2 border border-orange-200 bg-orange-50 hover:bg-orange-100 text-orange-600 transition-all duration-300  rounded '>Mark Completed</button>
                    {
                        popupVisible && <WarningPopup setPopupVisible={setPopupVisible} id={campaign._id} delCampaign={true} />
                    }
                </div>
                <div className=' grid grid-cols-3 text-center'>
                    <div className='p-1 ringg-1 border-r ring-emerald-100 '>
                        <p className='text-xs text-gray-500'>Raised</p>
                        <h1 className='font-medium'>₹ {donationRaised}</h1>
                    </div>
                    <div className='p-1 ringg-1 border-r ring-emerald-100 '>
                        <p className='text-xs text-gray-500'>Goals</p>
                        <h1 className='font-medium'>₹ {campaign.goalAmount}</h1>
                    </div>
                    <div className='p-1 ringg-1  ring-emerald-100 '>
                        <p className='text-xs text-gray-500'>Left</p>
                        <h1 className='font-medium'>₹ {campaign.goalAmount - donationRaised < 0 ? 0 : campaign.goalAmount - donationRaised}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card