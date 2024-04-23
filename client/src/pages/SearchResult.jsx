import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCampaign } from '../app/feature/campaignSlice'
import { FaHeart } from "react-icons/fa";

const SearchResult = () => {
    const dispatch = useDispatch();
    const campaign = useSelector(state => state.campaign.data)
    const { searchTerm } = useParams()
    useEffect(() => {
        dispatch(fetchCampaign())
    }, [])

    const filteredCampaign = campaign && campaign.filter(campaign => campaign.campaignTitle.toLowerCase().includes(searchTerm.toLowerCase()))
    return (
        <div>
            <Navbar />
            <SearchBar />
            <div className='max-w-7xl mx-auto w-full'>
                <div className='px-4 md:px-8 py-12 md:py-20'>
                    <div className='py-2 flex justify-center'>
                        <h1 className='text-2xl font-semibold  px-2 border-b-2  border-green-600'>Search Results</h1>
                    </div>
                    <div className='md:p-4 md:grid gap-4 max-w-5xl mx-auto'>

                        {filteredCampaign ? filteredCampaign.map((campaign, index) =>
                            <div key={index} className='my-2 md:p-4 md:grid grid-cols-3 bg-white rounded-lg md:shadow-lg'>
                                <img className='col-span-1 w-full h-52 md:h-72 object-cover rounded-md ' src={campaign.thumbnail} alt="" />
                                <div className='md:px-4 py-2 col-span-2'>
                                    <h1 className='text-xl font-semibold'>{campaign.campaignTitle.slice(0, 30)}</h1>
                                    <p className='py-2 text-sm md:text-inherit text-slate-600'>{campaign.campaignDescription.slice(0, 200)}</p>
                                    <h1 className='text-lg'><b>$78,253</b> <span className='text-xs'>raised of <b className='text-green-600 text-lg'>${campaign.goalAmount}</b> goal</span></h1>
                                    <div className="my-4 w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-yellow-600 h-2.5 rounded-full w-2/3"></div>
                                    </div>
                                    <p className='flex items-center'><FaHeart color='red' /> <span className='px-2 text-sm'>5,253 Supporters</span></p>
                                    <div className='py-4'>
                                        <Link to={`/campaign/${campaign._id}`} className='py-3 text-xs px-4 bg-green-600 text-white rounded'>View Campaign</Link>

                                    </div>
                                </div>
                            </div>
                        )
                            : <>No Campaign Found</>
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SearchResult