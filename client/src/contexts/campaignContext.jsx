import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";
import{ toast } from 'react-hot-toast'

export const CampaignContext = createContext();
export const useCampaign = () => useContext(CampaignContext);

export function CampaignContextProvider({ children }) {
    const [campaign, setCampaign] = useState({
        campaignOwner: 'sujan',
        campaignTitle: 'title',
        campaignDescription: 'discription',
        location: 'ktm',
        thumbnail: 'sujan thumbnail',
        videoUrl: 'videois here',
        goalAmount: '100000',
        category: 'environment'
    });

    const createCampaign = async () => {
      try {
        const response = await axios.post('/api/campaign/createCampaign', campaign);
        
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

