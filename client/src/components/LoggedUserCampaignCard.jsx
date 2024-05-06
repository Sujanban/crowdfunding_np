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
                        popupVisible && <WarningPopup setPopupVisible={setPopupVisible} id={campaign._id} delCampaign={true}/>
                    }
                </div>
                <div className=' grid grid-cols-3 text-center'>
                    <div className='p-1 ringg-1 border-r ring-emerald-100 '>
                        <p className='text-xs text-gray-500'>Raised</p>
                        <h1 className='font-bold'>₹ {donationRaised}</h1>
                    </div>
                    <div className='p-1 ringg-1 border-r ring-emerald-100 '>
                        <p className='text-xs text-gray-500'>Goals</p>
                        <h1 className='font-bold'>₹ {campaign.goalAmount}</h1>
                    </div>
                    <div className='p-1 ringg-1  ring-emerald-100 '>
                        <p className='text-xs text-gray-500'>Left</p>
                        <h1 className='font-bold'>₹ {campaign.goalAmount - donationRaised < 0 ? 0 : campaign.goalAmount - donationRaised}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card