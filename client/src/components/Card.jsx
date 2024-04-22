import React from 'react'
import { Link } from 'react-router-dom'

import { FaHeart } from "react-icons/fa";


const Card = ({ campaign, index }) => {
    return (
        <Link className='my-2' to={`/campaign/${campaign._id}`} key={index}>
            <div className=' h-52 bg-gray-100'>
                <img className='w-full h-full object-cover' src={campaign.thumbnail} alt="" />
            </div>
            <div className='py-4 grid gap-1'>
                <h1 className='font-semibold'>{campaign.campaignTitle.slice(0, 20)}</h1>
                <p className='text-xs'>{campaign.campaignDescription.slice(0, 40)}</p>
                <h1 className='text-lg'><b>$78,253</b> <span className='text-xs'>raised of <b className='text-green-600 text-lg'>${campaign.goalAmount}</b> goal</span></h1>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-yellow-600 h-2.5 rounded-full w-2/3"></div>
                </div>
                <p className='flex items-center'><FaHeart color='red' /> <span className='px-2 text-sm'>5,253 Supporters</span></p>
            </div>
        </Link>
    )
}

export default Card