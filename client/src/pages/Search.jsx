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

                {/* filter by category */}
                {/* <div className='px-4 py-20 mx-auto max-w-7xl '>
                    <h1 className='relative px-4 text-3xl'>Find by category <span className='absolute left-0 bg-green-800 w-1.5 h-full'></span></h1>
                    <div className='p-4 flex items-center justify-center flex-wrap space-x-8'>
                        <button className='m-2 px-4  shadow flex items-center'><img className='w-20' src={soil} alt="" /> Soil Conservation</button>
                        <button className='m-2 px-4  shadow flex items-center'><img className='w-20' src={marine} alt="" /> Marine</button>
                        <button className='m-2 px-4  shadow flex items-center'><img className='w-20' src={greenhouse} alt="" /> Greenhouse</button>
                        <button className='m-2 px-4  shadow flex items-center'><img className='w-20' src={health} alt="" /> Health</button>
                        <button className='m-2 px-4  shadow flex items-center'><img className='w-20' src={disaster} alt="" /> Disaster</button>
                        <button className='m-2 px-4  shadow flex items-center'><img className='w-20' src={car} alt="" /> Car</button>
                        <button className='m-2 px-4  shadow flex items-center'><img className='w-20' src={food} alt="" /> Food</button>
                        <button className='m-2 px-4  shadow flex items-center'><img className='w-20' src={home} alt="" /> Home</button>
                        <button className='m-2 px-4  shadow flex items-center'><img className='w-20' src={sports} alt="" /> Sports</button>
                        <button className='m-2 px-4  shadow flex items-center'><img className='w-20' src={education} alt="" /> Education</button>
                        <button className='m-2 px-4  shadow flex items-center'><img className='w-20' src={creative} alt="" /> Creative</button>
                        <button className='m-2 px-4  shadow flex items-center'><img className='w-20' src={business} alt="" /> Business</button>
                        <button className='m-2 px-4  shadow flex items-center'><img className='w-20' src={animal} alt="" /> Animal</button>
                    </div>
                </div> */}

                <CampaignGrid />
            </div>
            <Footer />
        </div>
    )
}

export default Search