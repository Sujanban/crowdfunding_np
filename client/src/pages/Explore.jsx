import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaHeart } from "react-icons/fa";

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
import { Link } from 'react-router-dom'
import CampaignGrid from '../components/CampaignGrid'
import CtaBanner from '../components/CtaBanner';

const Explore = () => {
    const category = [
        {
            "id": "1",
            "name": "Health"
        },
        {
            "id": "2",
            "name": "Education"
        },
        {
            "id": "3",
            "name": "Environment"
        },
        {
            "id": "4",
            "name": "Emergency"
        }
    ]

    const campaign = [
        {
            "_id": "66003b806fb120b540a1fc97",
            "campaignOwner": "65faf74cf4f1a3745ec5440a",
            "campaignTitle": "Treatment of the Disease",
            "campaignDescription": "Fund required for treating cancer emergency",
            "location": "Itahari",
            "thumbnail": "https://png.pngtree.com/png-vector/20240309/ourlarge/pngtree-homeless-and-poor-man-png-image_11898872.png",
            "videoUrl": "https://www.youtube.com/watch?v=pIzrkLKbszU",
            "goalAmount": "10000",
            "category": "Health"
        },
        {
            "_id": "66003b806fb120b540a1fc97",
            "campaignOwner": "65faf74cf4f1a3745ec5440a",
            "campaignTitle": "URGENT Help for Dr. Sarah’s",
            "campaignDescription": "Emergency Fund required for treating cancer emergency",
            "location": "Kathmandu",
            "thumbnail": "https://png.pngtree.com/png-clipart/20230910/original/pngtree-blueberries-is-an-old-food-and-has-a-very-refreshing-taste-png-image_11047862.png",
            "videoUrl": "https://www.youtube.com/watch?v=pIzrkLKbszU",
            "goalAmount": "70000",
            "category": "Health"
        },
        {
            "_id": "66003b806fb120b540a1fc97",
            "campaignOwner": "65faf74cf4f1a3745ec5440a",
            "campaignTitle": "URGENT Help for Dr. Sarah’s",
            "campaignDescription": "Emergency Fund required for treating cancer emergency",
            "location": "Kathmandu",
            "thumbnail": "https://images.unsplash.com/photo-1603398938378-e54eab446dde?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "videoUrl": "https://www.youtube.com/watch?v=pIzrkLKbszU",
            "goalAmount": "70000",
            "category": "Health"
        },
        {
            "_id": "66003b806fb120b540a1fc97",
            "campaignOwner": "65faf74cf4f1a3745ec5440a",
            "campaignTitle": "URGENT Help for Dr. Sarah’s",
            "campaignDescription": "Emergency Fund required for treating cancer emergency",
            "location": "Kathmandu",
            "thumbnail": "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "videoUrl": "https://www.youtube.com/watch?v=pIzrkLKbszU",
            "goalAmount": "70000",
            "category": "Education"
        },
        {
            "_id": "66003b806fb120b540a1fc97",
            "campaignOwner": "65faf74cf4f1a3745ec5440a",
            "campaignTitle": "URGENT Help for Dr. Sarah’s",
            "campaignDescription": "Emergency Fund required for treating cancer emergency",
            "location": "Kathmandu",
            "thumbnail": "https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "videoUrl": "https://www.youtube.com/watch?v=pIzrkLKbszU",
            "goalAmount": "70000",
            "category": "Environment"
        },
        {
            "_id": "66003b806fb120b540a1fc97",
            "campaignOwner": "65faf74cf4f1a3745ec5440a",
            "campaignTitle": "URGENT Help for Dr. Sarah’s",
            "campaignDescription": "Emergency Fund required for treating cancer emergency",
            "location": "Kathmandu",
            "thumbnail": "https://plus.unsplash.com/premium_photo-1661724772203-127053458850?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "videoUrl": "https://www.youtube.com/watch?v=pIzrkLKbszU",
            "goalAmount": "70000",
            "category": "Emergency"
        }

    ]
    return (
        <>
            <Navbar />

            {/* Explore banner */}
            <div className='explore_banner '>
                <div className='bg-gradient-to-r from-green-900 to-transparent'>
                    <div className='px-4 py-20 mx-auto max-w-7xl text-white '>
                        <h1 className='py-4 text-3xl font-semibold'>Make a difference</h1>
                        <p className=' text-2xl max-w-xl'>Thousands are crowdfunding for various causes. Support a fundraiser today.</p>
                    </div>
                </div>
            </div>

            {/* explore main */}
            <div className=' py-20 max-w-7xl mx-auto'>
                <h1 className='relative px-4 text-3xl'>Explore Campaigns <span className='absolute left-0 bg-green-800 w-1.5 h-full'></span></h1>

                <form className='p-4 flex max-w-4xl ml-auto items-center justify-center gap-2'>
                    <input type="search" className='outline-none w-full border-2 border-green-500 focus:border-2 focus:border-yellow-500 px-3 py-2 rounded ' placeholder='Search' />
                    <Link className=' px-6 py-2 rounded bg-green-800 text-white '>Search</Link>
                </form>
                <div className=' py-4 flex justify-between items-center'>
                    <h1 className='text-xl font-bold'>Filter by</h1>
                    <form class="px-4">
                        <select id="countries" class="max-w-sm mx-auto p-3 outline-none bg-white  border-2 border-green-500  text-sm rounded ">
                            <option hidden selected>Select a sorting method</option>
                            <option value="CA">Ending Soon</option>
                            <option value="FR">Just Started</option>
                        </select>
                    </form>
                </div>

                <div className=' relative py-4 grid grid-cols-5 gap-2'>
                    <div className=''>

                        <div>
                            <h1 className='p-2 font-semibold'>Category</h1>
                            <div>
                                <button className='px-2 rounded ring ring-green-500 my-2 h-12 w-full flex items-center'><img className='h-full' src={soil} alt="" /> Soil Conservation</button>
                                <button className='px-2 rounded my-2 h-12 w-full flex items-center'><img className='h-full' src={marine} alt="" /> Marine</button>
                                <button className='px-2 rounded my-2 h-12 w-full flex items-center'><img className='h-full' src={greenhouse} alt="" /> Greenhouse</button>
                                <button className='px-2 rounded my-2 h-12 w-full flex items-center'><img className='h-full' src={health} alt="" /> Health</button>
                                <button className='px-2 rounded my-2 h-12 w-full flex items-center'><img className='h-full' src={disaster} alt="" /> Disaster</button>
                                <button className='px-2 rounded my-2 h-12 w-full flex items-center'><img className='h-full' src={car} alt="" /> Car</button>
                                <button className='px-2 rounded my-2 h-12 w-full flex items-center'><img className='h-full' src={food} alt="" /> Food</button>
                                <button className='px-2 rounded my-2 h-12 w-full flex items-center'><img className='h-full' src={home} alt="" /> Home</button>
                                <button className='px-2 rounded my-2 h-12 w-full flex items-center'><img className='h-full' src={sports} alt="" /> Sports</button>
                                <button className='px-2 rounded my-2 h-12 w-full flex items-center'><img className='h-full' src={education} alt="" /> Education</button>
                                <button className='px-2 rounded my-2 h-12 w-full flex items-center'><img className='h-full' src={creative} alt="" /> Creative</button>
                                <button className='px-2 rounded my-2 h-12 w-full flex items-center'><img className='h-full' src={business} alt="" /> Business</button>
                                <button className='px-2 rounded my-2 h-12 w-full flex items-center'><img className='h-full' src={animal} alt="" /> Animal</button>

                            </div>
                        </div>
                    </div>
                    <div className='px-4  col-span-4'>
                        <h1 className='text-xl font-bold'>Campaigns</h1>
                        <div className='py-4 grid grid-cols-3 gap-2'>
                            <div>
                                <div className=' h-72 bg-gray-100'>
                                    <img className=' w-full h-full object-cover' src='https://png.pngtree.com/png-vector/20240309/ourlarge/pngtree-homeless-and-poor-man-png-image_11898872.png' alt="" />
                                </div>
                                <div className='p-4 grid gap-1'>
                                    <h1 className='font-semibold'>Treatment of the Disease</h1>
                                    <p className='text-xs'>Fund required for treating cancer emergency</p>
                                    <h1><b>$78,253</b> <span className='text-xs'>raised of $100,000 goal</span></h1>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-yellow-600 h-2.5 rounded-full w-2/3"></div>
                                    </div>
                                    <p className='flex items-center'><FaHeart color='red' /> <span className='px-2 text-sm'>5,253 Supporters</span></p>
                                </div>
                            </div>
                            <div>
                                <div className=' h-72 bg-gray-100'>
                                    <img className='w-full h-full object-cover'
                                        src="https://png.pngtree.com/png-clipart/20230910/original/pngtree-blueberries-is-an-old-food-and-has-a-very-refreshing-taste-png-image_11047862.png" alt="" />
                                </div>
                                <div className='p-4 grid gap-1'>
                                    <h1 className='font-semibold'>URGENT Help for Dr. Sarah’s</h1>
                                    <p className='text-xs'>Fund required for treating cancer emergency</p>
                                    <h1><b>$78,253</b> <span className='text-xs'>raised of $70,000 goal</span></h1>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-yellow-600 h-2.5 rounded-full w-full"></div>
                                    </div>
                                    <p className='flex items-center'><FaHeart color='red' /> <span className='px-2 text-sm'>5,253 Supporters</span></p>
                                </div>
                            </div>
                            <div>
                                <div className=' h-72 bg-gray-100'>
                                    <img className=' w-full h-full object-cover' src='https://images.gofundme.com/RbQeFjG68i_AToUAQuQN9RdlF3k=/720x405/https://d2g8igdw686xgo.cloudfront.net/77719905_1707385451197680_r.jpeg' alt="" />
                                </div>
                                <div className='p-4 grid gap-1'>
                                    <h1 className='font-semibold'>Feed 150 children in our orphanag</h1>
                                    <p className='text-xs'>we’re Allan Children’s Foundation a registered Charity Organization based in Uganda.</p>
                                    <h1><b>$88,781</b> <span className='text-xs'>raised of $500,000 goal</span></h1>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-yellow-600 h-2.5 rounded-full w-1/5"></div>
                                    </div>
                                    <p className='flex items-center'><FaHeart color='red' /> <span className='px-2 text-sm'>6,429 Supporters</span></p>
                                </div>
                            </div>
                            <div>
                                <div className=' h-72 bg-gray-100'>
                                    <img className=' w-full h-full object-cover'
                                        src='https://images.gofundme.com/3d7jSAXityIrDPqZb39IbUmKWEs=/720x405/https://d2g8igdw686xgo.cloudfront.net/79084065_1711243049306492_r.jpeg' alt="" />
                                </div>
                                <div className='p-4 grid gap-1'>
                                    <h1 className='font-semibold'>The Strevig Family</h1>
                                    <p className='text-xs'>I'm fundraising for my family's best friends. They are Brittany, Paisley, Shawn, and Ella.</p>
                                    <h1><b>$68,450</b> <span className='text-xs'>raised of $80,000 goal</span></h1>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-yellow-600 h-2.5 rounded-full w-4/5"></div>
                                    </div>
                                    <p className='flex items-center'><FaHeart color='red' /> <span className='px-2 text-sm'>3,511 Supporters</span></p>
                                </div>
                            </div>
                            <div>
                                <div className=' h-72 bg-gray-100'>
                                    <img className=' w-full h-full object-cover' src='https://png.pngtree.com/png-vector/20240309/ourlarge/pngtree-homeless-and-poor-man-png-image_11898872.png' alt="" />
                                </div>
                                <div className='p-4 grid gap-1'>
                                    <h1 className='font-semibold'>Treatment of the Disease</h1>
                                    <p className='text-xs'>Fund required for treating cancer emergency</p>
                                    <h1><b>$78,253</b> <span className='text-xs'>raised of $100,000 goal</span></h1>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-yellow-600 h-2.5 rounded-full w-2/3"></div>
                                    </div>
                                    <p className='flex items-center'><FaHeart color='red' /> <span className='px-2 text-sm'>5,253 Supporters</span></p>
                                </div>
                            </div>
                            <div>
                                <div className=' h-72 bg-gray-100'>
                                    <img className='w-full h-full object-cover'
                                        src="https://png.pngtree.com/png-clipart/20230910/original/pngtree-blueberries-is-an-old-food-and-has-a-very-refreshing-taste-png-image_11047862.png" alt="" />
                                </div>
                                <div className='p-4 grid gap-1'>
                                    <h1 className='font-semibold'>URGENT Help for Dr. Sarah’s</h1>
                                    <p className='text-xs'>Fund required for treating cancer emergency</p>
                                    <h1><b>$78,253</b> <span className='text-xs'>raised of $70,000 goal</span></h1>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-yellow-600 h-2.5 rounded-full w-full"></div>
                                    </div>
                                    <p className='flex items-center'><FaHeart color='red' /> <span className='px-2 text-sm'>5,253 Supporters</span></p>
                                </div>
                            </div>
                            <div>
                                <div className=' h-72 bg-gray-100'>
                                    <img className=' w-full h-full object-cover' src='https://images.gofundme.com/RbQeFjG68i_AToUAQuQN9RdlF3k=/720x405/https://d2g8igdw686xgo.cloudfront.net/77719905_1707385451197680_r.jpeg' alt="" />
                                </div>
                                <div className='p-4 grid gap-1'>
                                    <h1 className='font-semibold'>Feed 150 children in our orphanag</h1>
                                    <p className='text-xs'>we’re Allan Children’s Foundation a registered Charity Organization based in Uganda.</p>
                                    <h1><b>$88,781</b> <span className='text-xs'>raised of $500,000 goal</span></h1>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-yellow-600 h-2.5 rounded-full w-1/5"></div>
                                    </div>
                                    <p className='flex items-center'><FaHeart color='red' /> <span className='px-2 text-sm'>6,429 Supporters</span></p>
                                </div>
                            </div>
                            <div>
                                <div className=' h-72 bg-gray-100'>
                                    <img className=' w-full h-full object-cover'
                                        src='https://images.gofundme.com/3d7jSAXityIrDPqZb39IbUmKWEs=/720x405/https://d2g8igdw686xgo.cloudfront.net/79084065_1711243049306492_r.jpeg' alt="" />
                                </div>
                                <div className='p-4 grid gap-1'>
                                    <h1 className='font-semibold'>The Strevig Family</h1>
                                    <p className='text-xs'>I'm fundraising for my family's best friends. They are Brittany, Paisley, Shawn, and Ella.</p>
                                    <h1><b>$68,450</b> <span className='text-xs'>raised of $80,000 goal</span></h1>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-yellow-600 h-2.5 rounded-full w-4/5"></div>
                                    </div>
                                    <p className='flex items-center'><FaHeart color='red' /> <span className='px-2 text-sm'>3,511 Supporters</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>

            {/* raise fund for yourself */}
            {/* <div className='my-4 px-4 py-20 max-w-7xl mx-auto'>
                <div className='grid grid-cols-2'>
                    <div className='px-4 py-20 bg-yelow-500 rounded-l'>
                        <h1 className='px-4 text-3xl'>Need Funds to Pay For a Medical Emergency or Social Cause?</h1>
                        <p className='p-4 text-xl'>Collab's 0% Platform fees ensures maximum funds for you</p>
                        <div className='p-4'>
                            <Link to='/createCampaign' className='bg-yellow-500 px-4 py-3 rounded-full text-black'>Start Fundraising</Link>
                        </div>
                    </div>
                    <div className='flex items-center justify-center bg-green-800 rounded-r'>
                        <div className=' w-full text-center'>
                            <img className='w-full h-96 object-cover' src="https://plus.unsplash.com/premium_photo-1672287578699-618ea6dbcc9e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                    </div>
                </div>
            </div> */}

            <CtaBanner/>

            {/* footer */}
            <Footer />
        </>
    )
}

export default Explore