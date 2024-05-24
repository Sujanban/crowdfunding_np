import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link, useNavigate, useParams } from 'react-router-dom'
import CampaignGrid from '../components/CampaignGrid'
import soil from '../assets/images/icons8-soil-100.png'
import marine from '../assets/images/icons8-marine-pollution-100.png'
import greenhouse from '../assets/images/icons8-greenhouse-effect-100.png'
import health from '../assets/images/health.png'
import disaster from '../assets/images/disaster.png'
import car from '../assets/images/car.png'
import food from '../assets/images/food.png'
import home from '../assets/images/icons8-home-100.png'
import sports from '../assets/images/sports.png'

import education from '../assets/images/education.png'
import creative from '../assets/images/creative.png'
import business from '../assets/images/business.png'
import animal from '../assets/images/animal.png'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCampaign } from '../app/feature/campaignSlice'
import { useSearchParams } from "react-router-dom";
import SearchBar from '../components/SearchBar';


const Search = () => {
    return (
        <div>
            <Navbar />
            <div>
                <SearchBar />
                <CampaignGrid />
            </div>
            <Footer />
        </div>
    )
}

export default Search