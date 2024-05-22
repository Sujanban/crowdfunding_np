import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCampaign } from '../app/feature/campaignSlice'
import Card from './Card';

const CampaignGrid = () => {
    const campaign = useSelector(state => state.campaign.data)
    const dispatch = useDispatch();
    const featuredCampaign = campaign.length && campaign.filter(campaign => campaign.featured === true)
    useEffect(() => {
        dispatch(fetchCampaign())
    }, [])

    return (
        <div className='px-466 py-20 mx-auto max-w-7xl'>
            <div className=' flex items-center justify-center space-x-2'>
                <h1 className='text-xl font-medium mx-auto border-b border-gray-300'>Featured campaigns</h1>
            </div>
            <p className='  pt-2  text-center'>These campaigns are recommended for you.</p>
            <div className='py-4 pt-10 md:grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    featuredCampaign && featuredCampaign.slice(0, 4).map((campaign, index) =>
                        <Card key={index} campaign={campaign} />
                    )
                }
            </div>
        </div>
    )
}

export default CampaignGrid