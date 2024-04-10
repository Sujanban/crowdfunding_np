import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { MdSearch, MdTune } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';


const CampaignGrid = () => {

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

    const [filteredData, setFilteredData] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isloading, setIsLoading] = useState(false);
    const handelFilter = (data) => {
        const filteredDataa = campaign.filter(campaign => campaign.category === data);
        setFilteredData(filteredDataa);
        setSelectedCategory(data);
    }

    return (
        <div className='px-4 py-20 mx-auto max-w-7xl'>
            <h1 className='relative px-4 text-3xl'>Explore Campaigns <span className='absolute left-0 bg-green-800 w-1.5 h-full'></span></h1>
            <div className='py-4 flex items-center justify-between'>
                <div className='p-4 flex space-x-3'>
                    {
                        category && category.map((category, index) => (
                            <button 
                            onClick={() => handelFilter(category.name)} 
                            className={`${selectedCategory === category.name ? 'border-2 border-green-500 text-sm py-2 px-6  flex items-center bg-gray-100 hover:bg-gray-200 transition-all duration-400 rounded-full':'text-sm py-2 px-6  flex items-center bg-gray-100 hover:bg-gray-200 transition-all duration-400 rounded-full'} `}>{category.name} <IoIosArrowDown /></button>
                        ))
                    }
                </div>
                <div className='p-4'>
                    <button onClick={() => setFilteredData(null)} className='text-sm py-2 px-6  flex items-center bg-gray-100 hover:bg-gray-200 transition-all duration-400 rounded-full'>Reset <MdTune /></button>
                </div>
            </div>
            <div className='py-4 grid grid-cols-4 gap-4'>


                {
                    filteredData ? filteredData.slice(0, 4).map((campaign, index) =>
                        <Link to={'/campaign'}>
                            <div className=' h-72 bg-gray-100'>
                                <img className=' w-full h-full object-cover' src={campaign.thumbnail} alt="" />
                            </div>
                            <div className='p-4 grid gap-1'>
                                <h1 className='font-semibold'>{campaign.campaignTitle}</h1>
                                <p className='text-xs'>{campaign.campaignDescription}</p>
                                <h1 className='text-lg'><b>$78,253</b> <span className='text-xs'>raised of <b className='text-green-600 text-lg'>${campaign.goalAmount}</b> goal</span></h1>
                                <div className="w-full bg-gray-200 rounded-full h-2.5">
                                    <div className="bg-yellow-600 h-2.5 rounded-full w-2/3"></div>
                                </div>
                                <p className='flex items-center'><FaHeart color='red' /> <span className='px-2 text-sm'>5,253 Supporters</span></p>
                            </div>
                        </Link>
                    )
                        :
                        campaign.slice(0, 4).map((campaign, index) =>
                            <Link to={'/campaign'}>
                                <div className=' h-72 bg-gray-100'>
                                    <img className=' w-full h-full object-cover' src={campaign.thumbnail} alt="" />
                                </div>
                                <div className='p-4 grid gap-1'>
                                    <h1 className='font-semibold'>{campaign.campaignTitle}</h1>
                                    <p className='text-xs'>{campaign.campaignDescription}</p>
                                    <h1 className='text-lg'><b>$78,253</b> <span className='text-xs'>raised of <b className='text-green-600 text-lg'>${campaign.goalAmount}</b> goal</span></h1>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                                        <div className="bg-yellow-600 h-2.5 rounded-full w-2/3"></div>
                                    </div>
                                    <p className='flex items-center'><FaHeart color='red' /> <span className='px-2 text-sm'>5,253 Supporters</span></p>
                                </div>
                            </Link>
                        )
                }
                {/* <Link to={'/campaign'}>
                    <div className=' h-72 bg-gray-100'>
                        <img className=' w-full h-full object-cover' src='https://png.pngtree.com/png-vector/20240309/ourlarge/pngtree-homeless-and-poor-man-png-image_11898872.png' alt="" />
                    </div>
                    <div className='p-4 grid gap-1'>
                        <Link to='/campaign'>
                            <h1 className='font-semibold'>Treatment of the Disease</h1>

                        </Link>
                        <p className='text-xs'>Fund required for treating cancer emergency</p>
                        <h1 className='text-lg'><b>$78,253</b> <span className='text-xs'>raised of <b className='text-green-600 text-lg'>$100,000</b> goal</span></h1>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-yellow-600 h-2.5 rounded-full w-2/3"></div>
                        </div>
                        <p className='flex items-center'><FaHeart color='red' /> <span className='px-2 text-sm'>5,253 Supporters</span></p>
                    </div>
                </Link>
                <Link to={'/campaign'}>
                    <div className=' h-72 bg-gray-100'>
                        <img className='w-full h-full object-cover'
                            src="https://png.pngtree.com/png-clipart/20230910/original/pngtree-blueberries-is-an-old-food-and-has-a-very-refreshing-taste-png-image_11047862.png" alt="" />
                    </div>
                    <div className='p-4 grid gap-1'>
                        <h1 className='font-semibold'>URGENT Help for Dr. Sarah’s</h1>
                        <p className='text-xs'>Fund required for treating cancer emergency</p>
                        <h1 className='text-lg'><b>$78,253</b> <span className='text-xs'>raised of  <b className='text-green-600 text-lg'>$70,000</b> goal</span></h1>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-yellow-600 h-2.5 rounded-full w-full"></div>
                        </div>
                        <p className='flex items-center'><FaHeart color='red' /> <span className='px-2 text-sm'>5,253 Supporters</span></p>
                    </div>
                </Link>
                <Link to={'/campaign'}>
                    <div className=' h-72 bg-gray-100'>
                        <img className=' w-full h-full object-cover' src='https://images.gofundme.com/RbQeFjG68i_AToUAQuQN9RdlF3k=/720x405/https://d2g8igdw686xgo.cloudfront.net/77719905_1707385451197680_r.jpeg' alt="" />
                    </div>
                    <div className='p-4 grid gap-1'>
                        <h1 className='font-semibold'>Feed 150 children in our orphanag</h1>
                        <p className='text-xs'>we’re Allan Children’s Foundation a registered Charity Organization based in Uganda.</p>
                        <h1 className='text-lg'><b>$88,781</b> <span className='text-xs'>raised of  <b className='text-green-600 text-lg'>$500,000</b> goal</span></h1>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-yellow-600 h-2.5 rounded-full w-1/5"></div>
                        </div>
                        <p className='flex items-center'><FaHeart color='red' /> <span className='px-2 text-sm'>6,429 Supporters</span></p>
                    </div>
                </Link>
                <Link to={'/campaign'}>
                    <div className=' h-72 bg-gray-100'>
                        <img className=' w-full h-full object-cover'
                            src='https://images.gofundme.com/3d7jSAXityIrDPqZb39IbUmKWEs=/720x405/https://d2g8igdw686xgo.cloudfront.net/79084065_1711243049306492_r.jpeg' alt="" />
                    </div>
                    <div className='p-4 grid gap-1'>
                        <h1 className='font-semibold'>The Strevig Family</h1>
                        <p className='text-xs'>I'm fundraising for my family's best friends. They are Brittany, Paisley, Shawn, and Ella.</p>
                        <h1 className='text-lg'><b>$68,450</b> <span className='text-xs'>raised of  <b className='text-green-600 text-lg'>$80,000</b> goal</span></h1>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div className="bg-yellow-600 h-2.5 rounded-full w-4/5"></div>
                        </div>
                        <p className='flex items-center'><FaHeart color='red' /> <span className='px-2 text-sm'>3,511 Supporters</span></p>
                    </div>
                </Link> */}
            </div>
            <div className='p-4 flex justify-center text-white'>
                <Link to='/explore' className='text-sm py-2 px-6  flex items-center bg-green-800 rounded-full'>Explore more <IoIosArrowDown /></Link>
            </div>
        </div>
    )
}

export default CampaignGrid