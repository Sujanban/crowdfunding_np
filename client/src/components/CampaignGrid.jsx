import React, { useState,useEffect } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { MdSearch, MdTune } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import {getCampaigns,fetchCampaign} from '../app/feature/campaignSlice'
import { fetchCategory, getCategories } from '../app/feature/categorySlice'

const CampaignGrid = () => {
    const category = useSelector(getCategories)
    const campaign = useSelector(getCampaigns)

    const dispatch = useDispatch();






    const [filteredData, setFilteredData] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isloading, setIsLoading] = useState(false);
    const handelFilter = (data) => {
        const filteredDataa = campaign.filter(campaign => campaign.category === data);
        setFilteredData(filteredDataa);
        console.log(filteredDataa);
        setSelectedCategory(data);
    }

    useEffect(() => {
        dispatch(fetchCategory())
        dispatch(fetchCampaign())
    },[])

    return (
        <div className='px-4 py-20 mx-auto max-w-7xl'>
            <h1 className='relative px-4 text-3xl'>Explore Campaigns <span className='absolute left-0 bg-green-800 w-1.5 h-full'></span></h1>
            <div className='py-4 flex items-center justify-between'>
                <div className='p-4 flex space-x-3'>
                    {
                        category && category.slice(0, 4).map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handelFilter(item.category)}
                                className={`${selectedCategory === item.category ? 'border-2 border-green-500 text-sm py-2 px-6  flex items-center bg-gray-100 hover:bg-gray-200 transition-all duration-400 rounded-full' : 'text-sm py-2 px-6  flex items-center bg-gray-100 hover:bg-gray-200 transition-all duration-400 rounded-full'} `}>{item.category} <IoIosArrowDown /></button>
                        ))
                    }
                </div>
                <div className='p-4'>
                    <button onClick={() => setFilteredData(null)} className='text-sm py-2 px-6  flex items-center bg-gray-100 hover:bg-gray-200 transition-all duration-400 rounded-full'>Reset <MdTune /></button>
                </div>
            </div>
            <div className='py-4 grid grid-cols-4 gap-4'>
                {
                    filteredData ? filteredData.slice(0, 4).map((campaign, index) =>
                        <Link to={`/campaign/${campaign._id}`} key={index}>
                            <div className=' h-72 bg-gray-100'>
                                <img className=' w-full h-full object-cover' src={campaign.thumbnail} alt="" />
                            </div>
                            <div className='p-4 grid gap-1'>
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
                        :
                        campaign && campaign.slice(0, 4).map((campaign, index) =>
                            <Link to={`/campaign/${campaign._id}`} key={index}>
                                <div className=' h-72 bg-gray-100'>
                                    <img className=' w-full h-full object-cover' src={campaign.thumbnail} alt="" />
                                </div>
                                <div className='p-4 grid gap-1'>
                                    <h1 className='font-semibold'>{campaign.campaignTitle.slice(0,20)}</h1>
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

            </div>
            <div className='p-4 flex justify-center text-white'>
                <Link to='/explore' className='text-sm py-2 px-6  flex items-center bg-green-800 rounded-full'>Explore more <IoIosArrowDown /></Link>
            </div>
        </div>
    )
}

export default CampaignGrid