import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { FaHeart } from 'react-icons/fa6';
import { BsLightningCharge } from 'react-icons/bs'

const Card = ({ campaign, index }) => {
    const [donations, setDonations] = useState([]);
    const fetchDonationByCampaign = async () => {
        const res = await axios.get(`/api/donation/fetchDonationByCampaign/${campaign._id}`);
        setDonations(res.data)
    }

    const calculateGoalPercent = () => {
        const data = Math.round((campaign.raisedAmount / campaign.goalAmount) * 100);
        if (data > 100) {
            return 100
        }
        return data
    }
    useEffect(() => {
        fetchDonationByCampaign()
    }, [])
    return (
        <div className=' shadow-lg rounded-lg'>
            <Link className='z-20' to={`/campaign/${campaign._id}`} key={index} >
                <div className='h-40 bg-gray-100 relative'>
                    {
                        campaign.featured && <div>
                            <div className='absolute -z-10 -right-2 bottom-0 rotate-45 w-4 h-4 bg-emerald-600'></div>
                            <div className='absolute flex items-center space-x-2 p-1 px-3 -right-3 bottom-2 text-xs bg-emerald-600 text-white'><BsLightningCharge /> <span>Featured</span></div>
                        </div>
                    }
                    <div className='absolute left-2 bottom-2 p-2'>
                        <div className=' h-10 w-10 flex items-center justify-center animate-pulse text-emerald-600 bg-white rounded-full text-xl outline outline-offset-2 outline-emerald-600 outline-1'>
                            <p className='relative'>{calculateGoalPercent()}<span className='absolute text-[8px]'>%</span></p>
                        </div>
                    </div>
                    <img className='rounded-t-lg w-full h-full object-cover' src={campaign.thumbnail?.url} alt="" />
                </div>

                <div className='p-4 grid gap-1'>
                    <h1 className='font-medium'>{campaign.campaignTitle.slice(0, 40)}</h1>
                    <h1 className='text-sm text-gray-500'><b className='text-black/70'>${campaign.raisedAmount}</b> raised of ${campaign.goalAmount}</h1>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className={`bg-emerald-600 h-1.5 rounded-full`} style={{ width: `${calculateGoalPercent()}%` }}></div>
                    </div>
                    <p className='flex items-center text-gray-500'><FaHeart color='red' /> <span className='px-2 text-sm'>{donations.length} Supporters</span></p>
                </div>
            </Link>
        </div>
    )
}

export default Card