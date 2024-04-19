import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaHeart } from "react-icons/fa";
import axios from 'axios'
import { Link } from 'react-router-dom'
import CtaBanner from '../components/CtaBanner';
import Card from '../components/Card';

import { MdTune } from "react-icons/md";

import { useSelector, useDispatch } from 'react-redux';
import { fetchCategory, getCategories } from '../app/feature/categorySlice'
import { fetchCampaign, getCampaigns } from '../app/feature/campaignSlice'

const Explore = () => {
    const category = useSelector(getCategories)
    const campaign = useSelector(getCampaigns)



    const dispatch = useDispatch();


    const [filteredCampaign, setFilteredCampaign] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isloading, setIsLoading] = useState(false);
    const handleFilter = (data) => {
        setIsLoading(true);
        const filteredData = campaign.filter(campaign => campaign.category === data);
        setFilteredCampaign(filteredData);
        setSelectedCategory(data);
        setIsLoading(false);
    }

    const resetFilter = () => {
        setFilteredCampaign(null);
        setSelectedCategory(null);
    }

    // counting filtered campaign length
    console.log(filteredCampaign)
    const filteredItemCount = (cat) => {
        return campaign && campaign.filter(item => item.category === cat).length;
    }


    useEffect(() => {
        dispatch(fetchCategory())
        dispatch(fetchCampaign())
    }, [])


    return (
        <>
            <Navbar />

            {/* Explore banner */}
            <div className='explore_banner '>
                <div className='bg-gradient-to-r from-black to-transparent'>
                    <div className='px-4 py-20 mx-auto max-w-7xl text-white '>
                        <h1 className='py-4 text-3xl font-semibold'>Make a difference</h1>
                        <p className=' text-2xl max-w-xl'>Thousands are crowdfunding for various causes. Support a fundraiser today.</p>
                    </div>
                </div>
            </div>

            {/* explore main */}
            <div className=' py-20 max-w-7xl mx-auto'>
                <h1 className='relative px-4 text-3xl'>Explore Campaigns <span className='absolute left-0 bg-green-800 w-1.5 h-full'></span></h1>
                <div className=' py-4 flex justify-between items-center'>
                    <h1 className='pt-8 text-xl font-semibold'>Filter by</h1>
                    <div className='p-4'>
                        <button onClick={resetFilter} className='text-sm py-2 px-6  flex items-center bg-gray-100 hover:bg-gray-200 transition-all duration-400 rounded-full'>Reset <MdTune /></button>
                    </div>
                </div>

                {/* grid of campaign cards */}

                <div className='py-4 grid grid-cols-5 gap-2'>
                    {/* {isloading ? <Loading /> : null} */}
                    <div className='col-span-1'>
                        <div className='p-2 grid gap-4'>
                            <div className='grid gap-4 w-full '>
                                {
                                    category && category.map((item, index) =>
                                        <button
                                            key={index}
                                            onClick={() => handleFilter(item.category)}
                                            className={`${selectedCategory === item.category ? 'border-2 border-green-500 text-sm py-2 px-6 flex items-center bg-gray-100 hover:bg-gray-200 transition-all duration-400 justify-between' : 'text-sm py-2 px-6  flex items-center bg-gray-100 hover:bg-gray-200 transition-all duration-400 justify-between'}`}><h1>{item.category}</h1> <span className='flex justify-center items-center h-6 w-6 text-xs rounded-full bg-yellow-600 text-white'>{filteredItemCount(item.category)}</span> </button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className='col-span-4 grid grid-cols-3 gap-2'>
                        {
                            filteredCampaign ? filteredCampaign.map((campaign, index) =>
                                <Card key={index} campaign={campaign} />
                            ) : campaign && campaign.map((campaign, index) =>

                                <Card key={index} campaign={campaign} />

                            )
                        }
                        {
                            filteredCampaign && filteredCampaign.length === 0 && <h1>No campaign found</h1>
                        }
                    </div>



                </div>
            </div>
            <CtaBanner />
            {/* footer */}
            <Footer />
        </>
    )
}

export default Explore