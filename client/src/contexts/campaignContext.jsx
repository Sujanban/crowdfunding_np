import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import{ toast } from 'react-hot-toast'

export const CampaignContext = createContext();
export const useCampaign = () => useContext(CampaignContext);

export function CampaignContextProvider({ children }) {
    const [campaign, setCampaign] = useState({
        campaignOwner: '',
        campaignTitle: '',
        campaignDescription: '',
        location: '',
        thumbnail: 'not set',
        videoUrl: '',
        goalAmount: '',
        category: ''
    });

    const createCampaign = async (campaign) => {
      try {
        const response = await axios.post('/api/campaign/createCampaign', campaign);
        console.log(response);
        
        if (response.data.error) {
          toast.error(response.data.error);
        } else {
          toast.success(response.data.message);
        }
      } catch (error) {
        console.log(error);
      }
    };

    return (
        <CampaignContext.Provider value={{ campaign, setCampaign,createCampaign }}>
            {children}
        </CampaignContext.Provider>
    );
}

