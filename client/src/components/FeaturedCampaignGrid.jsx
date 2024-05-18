import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCampaign } from '../app/feature/campaignSlice'
import Card from './Card';

const CampaignGrid = () => {
    const campaign = useSelector(state => state.campaign.data)
    const dispatch = useDispatch();
    const featuredCampaign = campaign?.filter(campaign => campaign.featured === true)
    useEffect(() => {
        dispatch(fetchCampaign())
    }, [])

    return (
        <div className='px-4 py-20 mx-auto max-w-7xl'>
            <h1 className='relative px-4 text-xl md:text-2xl'>Featured Campaigns <span className='absolute left-0 bg-green-800 w-1.5 h-full'></span></h1>
            <div className='py-4 md:grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
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