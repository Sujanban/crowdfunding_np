import React, { useState, useEffect } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { MdTune } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { fetchCampaign } from '../app/feature/campaignSlice'
import { fetchCategory } from '../app/feature/categorySlice'
import Card from './Card';

const CampaignGrid = () => {
    const category = useSelector(state => state.category.data)
    const campaign = useSelector(state=> state.campaign.data)
    const campaignn = campaign.length &&campaign.filter(campaign => campaign.featured === false)

    const dispatch = useDispatch();






    const [filteredData, setFilteredData] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const handelFilter = (data) => {
        const filteredDataa = campaignn.filter(campaign => campaign.category === data);
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
            <div className='pb-10 flex items-center justify-center space-x-2'>
                <h1 className='text-xl font-medium mx-auto border-b border-gray-300'>Explore Campaigns</h1>
            </div>
            <div className=' py-4 hidden md:flex items-center justify-between'>
                <div className='md:flex space-x-3'>
                    {
                        category && category.slice(0, 4).map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handelFilter(item.category)}
                                className={`ring-1 ring-emerald-600 ${selectedCategory === item.category ? 'border-2 border-green-500 text-sm py-2 px-6  flex items-center bg-gray-100 hover:bg-gray-200 transition-all duration-400 rounded-full' : 'text-sm py-2 px-6  flex items-center bg-gray-100 hover:bg-gray-200 transition-all duration-400 rounded-full'} `}>{item.category} <IoIosArrowDown /></button>
                        ))
                    }
                </div>
                <div className=''>
                    <button onClick={resetFilter} className='ring-1 ring-emerald-600 text-sm py-2 px-6  flex items-center bg-gray-100 hover:bg-gray-200 transition-all duration-400 rounded-full'>Reset <MdTune /></button>
                </div>
            </div>
            <div className='py-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    filteredData ? filteredData.slice(0, 4).map((campaign, index) =>
                        <Card key={index} campaign={campaign} />
                    )
                        :
                        campaignn && campaignn.length > 0 && campaignn.slice(0, 8).map((campaign, index) =>
                            <Card key={index} campaign={campaign} />
                        )
                }
                {
                    filteredData && filteredData.length === 0 && <div>No Campaigns Found</div>
                }

            </div>

            {
                campaignn && campaignn.length > 8 &&
                <div className='p-4 flex justify-center text-white'>
                    <Link to='/explore' className='px-4 py-3 text-sm bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 rounded-xl flex items-center'>Explore more <IoIosArrowDown /></Link>
                </div>}
        </div>
    )
}

export default CampaignGrid