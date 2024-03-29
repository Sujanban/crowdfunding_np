import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import CampaignGrid  from '../components/CampaignGrid'
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

const Search = () => {
    return (
        <div>
            <Navbar />
            <div>
                <div className='my-12 md:my-16 max-w-lg mx-auto text-center'>
                    <h1 className='py-4 text-center text-2xl md:text-3xl'>Search for Campaign to Donate</h1>
                    <form className='py-4 flex items-center justify-center gap-4'>
                        <input type="text" className='w-96 border border-yellow-500 focus:border-2 focus:border-yellow-500 px-3 py-2 rounded-full ' placeholder='Search' />
                        <Link className=' px-3 py-2 rounded-full bg-gray-200 '>Search</Link>
                    </form>
                </div>

                {/* filter by category */}
                <div className='px-4 py-20 mx-auto max-w-7xl '>
                    <h1 className='pb-12 text-3xl '>Find by category</h1>
                    <div className='flex items-center justify-center flex-wrap space-x-8'>
                        <button className='px-4  shadow flex items-center'><img src={soil} alt="" /> Soil Conservation</button>
                        <button className='px-4  shadow flex items-center'><img src={marine} alt="" /> Marine</button>
                        <button className='px-4  shadow flex items-center'><img src={greenhouse} alt="" /> Greenhouse</button>
                        <button className='px-4  shadow flex items-center'><img src={health} alt="" /> Health</button>
                        <button className='px-4  shadow flex items-center'><img src={disaster} alt="" /> Disaster</button>
                        <button className='px-4  shadow flex items-center'><img src={car} alt="" /> Car</button>
                        <button className='px-4  shadow flex items-center'><img src={food} alt="" /> Food</button>
                        <button className='px-4  shadow flex items-center'><img src={home} alt="" /> Home</button>
                        <button className='px-4  shadow flex items-center'><img src={sports} alt="" /> Sports</button>
                        <button className='px-4  shadow flex items-center'><img src={education} alt="" /> Education</button>
                        <button className='px-4  shadow flex items-center'><img src={creative} alt="" /> Creative</button>
                        <button className='px-4  shadow flex items-center'><img src={business} alt="" /> Business</button>
                        <button className='px-4  shadow flex items-center'><img src={animal} alt="" /> Animal</button>
                    </div>
                </div>

                <CampaignGrid />
            </div>
            <Footer />
        </div>
    )
}

export default Search