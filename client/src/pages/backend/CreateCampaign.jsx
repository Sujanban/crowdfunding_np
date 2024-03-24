import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserContext, useUser } from '../../contexts/userContext'
import { toast } from 'react-hot-toast';
import axios from 'axios';

const CreateCampaign = () => {
    const [loading, setLoading] = useState(false);
    // const { user, setUser } = useContext(UserContext);
    const [user, setUser] = useState({});
    const [campaigns, setCampaigns] = useState({});










    // FETCHING ALL CAMPAIGNS
    const fetchCampaigns = async () => {
        setLoading(true);
        const res = await axios.get('/api/campaign/getCampaigns');
        setCampaigns(res.data);
        setLoading(false);
    }


    // DELET CAMPAIGN
    const handleDeleteCampaign = async (id) => {
        const res = await axios.delete('/api/campaign/deleteCampaign/' + id);
        if (res.data.message) {
            toast.success(res.data.message);
            fetchCampaigns();
        }
        if (res.data.error) {
            toast.error(res.data.error);
        }
    }

    useEffect(() => {
        fetchCampaigns();

        const fetUserId = async () => {
            try {
                const response = await axios.get('/api/auth/user');
                setUser(response.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetUserId();
    }, [])
    return (
        <div className=' top-0 w-full h-screen bg-stone-100'>
            <h1 className='text-xl p-4'>Available campaigns</h1>
            {
                loading ?
                    <div>Loading...</div>
                    :
                    campaigns.length ? campaigns.map((item, index) =>

                        <div key={index} className='w-full shadow p-12 grid grid-flow-col'>
                            <h1>{item.campaignTitle}</h1>
                            <h1>{item.campaignDescription}</h1>
                            <h1>{item.location}</h1>
                            <h1>{item.thumbnail}</h1>
                            <h1>{item.videoUrl}</h1>
                            <h1>{item.category}</h1>
                            <h1>{item.goalAmount}</h1>
                            <button onClick={() => handleDeleteCampaign(item._id)}>Delete</button>
                        </div>
                    )
                        :
                        <>No available Campaigns</>
            }
        </div>
    )
}

export default CreateCampaign