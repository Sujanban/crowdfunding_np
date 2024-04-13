import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaHeart } from "react-icons/fa";
import axios from 'axios'

import soil from '../assets/images/icons8-soil-100.png'
import marine from '../assets/images/icons8-marine-pollution-100.png'
import greenhouse from '../assets/images/icons8-greenhouse-effect-100.png'
import health from '../assets/images/health.png'
import disaster from '../assets/images/disaster.png'
import car from '../assets/images/car.png'
import food from '../assets/images/food.png'
import home from '../assets/images/icons8-home-100.png'
import sports from '../assets/images/sports.png'
import education from '../assets/images/education.png'
import creative from '../assets/images/creative.png'
import business from '../assets/images/business.png'
import animal from '../assets/images/animal.png'
import { Link } from 'react-router-dom'
import CampaignGrid from '../components/CampaignGrid'
import CtaBanner from '../components/CtaBanner';
import { IoIosArrowDown } from "react-icons/io";
import Loading from '../components/Loading';
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
                    <h1 className='text-xl font-bold'>Filter by</h1>
                    <div className='flex items-center space-x-10'>
                        <div className='flex items-center space-x-2'>

                            {
                                category && category.map((item, index) => {
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => handleFilter(item.category)}
                                            className={`${selectedCategory === item.category ? 'border-2 border-green-500 text-sm py-2 px-6  flex items-center bg-gray-100 hover:bg-gray-200 transition-all duration-400 rounded-full' : 'text-sm py-2 px-6  flex items-center bg-gray-100 hover:bg-gray-200 transition-all duration-400 rounded-full'}`}>{item.category} <IoIosArrowDown /></button>
                                    )
                                })
                            }
                        </div>
                        <form className="px-4">
                            <select className="max-w-sm mx-auto p-3 outline-none bg-white  border-2 border-green-500  text-sm rounded ">
                                <option hidden selected>Select a sorting method</option>
                                <option onClick={() => handleFilter(dessending)} value="dessending">Ending Soon</option>
                                <option onClick={() => handleFilter(assending)} value="assending">Just Started</option>
                            </select>
                        </form>
                    </div>
                </div>

                {/* grid of campaign cards */}

                <div className='py-4 grid grid-cols-4 gap-2'>
                    {/* {isloading ? <Loading /> : null} */}

                    {
                        filteredCampaign ? filteredCampaign.map((campaign, index) =>
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

                        ) : campaign && campaign.map((campaign,index) =>
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
                    }

                </div>
            </div>
            <CtaBanner />
            {/* footer */}
            <Footer />
        </>
    )
}

export default Explore