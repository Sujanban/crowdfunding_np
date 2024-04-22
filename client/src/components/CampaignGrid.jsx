import React, { useState, useEffect } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { MdSearch, MdTune } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { getCampaigns, fetchCampaign } from '../app/feature/campaignSlice'
import { fetchCategory, getCategories } from '../app/feature/categorySlice'
import Card from './Card';

const CampaignGrid = () => {
    const category = useSelector(getCategories)
    const campaign = useSelector(getCampaigns)

    const dispatch = useDispatch();






    const [filteredData, setFilteredData] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const handelFilter = (data) => {
        const filteredDataa = campaign.filter(campaign => campaign.category === data);
        setFilteredData(filteredDataa);
        setSelectedCategory(data);
    }


    const resetFilter = () => {
        setFilteredData(null);
        setSelectedCategory(null);
    }

    useEffect(() => {
        dispatch(fetchCategory())
        dispatch(fetchCampaign())
    }, [])

    return (
        <div className='px-4 py-20 mx-auto max-w-7xl'>
            <h1 className='relative px-4 text-xl md:text-3xl'>Explore Campaigns <span className='absolute left-0 bg-green-800 w-1.5 h-full'></span></h1>
            <div className='py-4 hidden md:flex items-center justify-between'>
                <div className='p-4 md:flex  space-x-3'>
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
                    <button onClick={resetFilter} className='text-sm py-2 px-6  flex items-center bg-gray-100 hover:bg-gray-200 transition-all duration-400 rounded-full'>Reset <MdTune /></button>
                </div>
            </div>
            <div className='py-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    filteredData ? filteredData.slice(0, 4).map((campaign, index) =>
                        <Card key={index} campaign={campaign} />
                    )
                        :
                        campaign && campaign.length > 0 && campaign.slice(0, 4).map((campaign, index) =>
                            <Card key={index} campaign={campaign} />
                        )
                }
                {
                    filteredData && filteredData.length === 0 && <div>No Campaigns Found</div>
                }

            </div>
            <div className='p-4 flex justify-center text-white'>
                <Link to='/explore' className='text-xs md:text-sm py-2 px-4 md:px-6  flex items-center bg-green-800 rounded-full'>Explore more <IoIosArrowDown /></Link>
            </div>
        </div>
    )
}

export default CampaignGrid