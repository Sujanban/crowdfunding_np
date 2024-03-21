import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

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

    const createCampaign = async (campaign) => {
        try {
          const response = await axios.post('/createCampaign', campaign);
          setCampaign(response.data);
        } catch (error) {
          console.log(error.message);
        }
      };

    return (
        <CampaignContext.Provider value={{ campaign, setCampaign,createCampaign }}>
            {children}
        </CampaignContext.Provider>
    );
}

