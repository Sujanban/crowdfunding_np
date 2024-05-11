import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCampaign } from '../app/feature/campaignSlice'
import { FaHeart } from "react-icons/fa";
import Card from '../components/Card'

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
                    <div className='md:p-4 md:grid grid-cols-3 gap-4 mx-auto'>
                        {filteredCampaign
                            ?
                            filteredCampaign.map((campaign, index) =>
                                <Card key={index} campaign={campaign} index={index} />
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