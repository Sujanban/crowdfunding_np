import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CtaBanner from '../components/CtaBanner';
import Card from '../components/Card';
import { MdTune } from "react-icons/md";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategory } from '../app/feature/categorySlice'
import { fetchCampaign } from '../app/feature/campaignSlice'

const Explore = () => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.category.data)
    const campaign = useSelector(state => state.campaign.data)
    const [filteredCampaign, setFilteredCampaign] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

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
    const filteredItemCount = (cat) => {
        return campaign.length > 0 && campaign.filter(item => item.category === cat).length;
    }

    useEffect(() => {
        dispatch(fetchCategory())
        dispatch(fetchCampaign())
    }, [])

    return (
        <>
            <Navbar />

            {/* explore main */}
            <div className=' py-8 md:py-20 max-w-7xl mx-auto'>
                <div className=' flex items-center justify-center space-x-2'>
                    <h1 className='text-xl font-medium mx-auto border-b border-gray-300'>Explore campaigns</h1>
                </div>
                <div className=' py-2 md:py-4 flex justify-between items-center'>
                    <h1 className='p-4  sm:font-medium'></h1>
                    <div className='p-4'>
                        <button onClick={resetFilter} className='text-xs sm:text-sm py-2 px-6  flex items-center bg-gray-100 hover:bg-gray-200 transition-all duration-400 rounded-full'>Reset <MdTune /></button>
                    </div>
                </div>

                {/* grid of campaign cards */}
                <div className='py-4  md:grid grid-cols-5 gap-2'>
                    <div className='col-span-1'>
                        <div className='p-2 grid gap-4'>
                            <div className='grid gap-1 md:gap-4 w-full '>
                                <h1>Filter by</h1>
                                {
                                    category && category.map((item, index) =>
                                        <button
                                            key={index}
                                            onClick={() => handleFilter(item.category)}
                                            className={`${selectedCategory === item.category ? 'border-2 border-green-500 text-sm py-2 px-6 flex items-center bg-gray-100 hover:bg-gray-200 transition-all duration-400 justify-between' : 'text-sm py-2 px-6  flex items-center bg-gray-100 hover:bg-gray-200 transition-all duration-400 justify-between'}`}>
                                            <h1>{item.category}</h1>
                                            <span className='flex justify-center items-center h-6 w-6 text-xs rounded-full bg-emerald-600 text-white'>{filteredItemCount(item.category)}</span>
                                        </button>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className='p-2 col-span-4 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {isLoading ? <Loader /> : null}
                        {filteredCampaign
                            ? filteredCampaign.map((campaign, index) =>
                                <Card key={index} campaign={campaign} />
                            )
                            : campaign.length > 0 && campaign.map((campaign, index) =>
                                <Card key={index} campaign={campaign} />
                            )}
                        {filteredCampaign && filteredCampaign.length === 0 &&
                            <h1>No campaign found</h1>
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