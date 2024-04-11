import {createSlice} from '@reduxjs/toolkit';

export const campaign = createSlice({
    name: 'campaigns',
    initialState: {
        data: [{
            campaignOwner: null,
            campaignTitle: null,
            campaignDescription: null,
            location: null,
            thumbnail: 'not set',
            videoUrl: null,
            goalAmount: null,
            category: ''
        }],
        error: 'No error message'
    },
    reducers: {
        
    }
});

// export const {setCampaign,setError} = campaign.actions
export default campaign.reducer