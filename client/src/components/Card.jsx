import React from 'react'
import { Link } from 'react-router-dom'
import { GiUpgrade } from "react-icons/gi";

import { FaHeart } from "react-icons/fa";


const Card = ({ campaign, index }) => {
    return (
        // <Link className='my-2' to={`/campaign/${campaign._id}`} key={index}>
        //     <div className=' h-52 xl:h-72 bg-gray-100'>
        //         <img className='w-full h-full object-cover' src={campaign.thumbnail} alt="" />
        //     </div>
        //     <div className='py-4 grid gap-1'>
        //         <h1 className='font-semibold'>{campaign.campaignTitle.slice(0, 20)}</h1>
        //         <p className='text-xs'>{campaign.campaignDescription.slice(0, 40)}</p>
        //         <h1 className='text-lg'><b>$78,253</b> <span className='text-xs'>raised of <b className='text-green-600 text-lg'>${campaign.goalAmount}</b> goal</span></h1>
        //         <div className="w-full bg-gray-200 rounded-full h-2.5">
        //             <div className="bg-yellow-600 h-2.5 rounded-full w-2/3"></div>
        //         </div>
        //         <p className='flex items-center'><FaHeart color='red' /> <span className='px-2 text-sm'>5,253 Supporters</span></p>
        //     </div>
        // </Link>
        <Link className='my-2 shadow z-20' to={`/campaign/${campaign._id}`} key={index} >
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
                <h1 className='p-2 font-bold'>{campaign.campaignTitle.slice(0, 60)}</h1>
                <div className='px-2 pb-2 grid '>
                    <Link className='p-2 font-bold text-emerald-600 hover:bg-emerald-50 transition-all duration-300 text-center text-sm w-full rounded-md ring-1 ring-emerald-600' to={`/campaign/${campaign._id}`}>Donate</Link>
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

export default Card