import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { MdSearch, MdTune } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';


const CampaignGrid = () => {
    return (
        <div className='px-4 py-20 mx-auto max-w-7xl'>
            <h1 className='relative px-4 text-3xl'>Explore Campaigns <span className='absolute left-0 bg-green-800 w-1.5 h-full'></span></h1>
            <div className='py-4 flex items-center justify-between'>
                <div className='p-4 flex space-x-3'>
                    <button className='text-sm py-2 px-6 flex items-center bg-gray-100 hover:bg-gray-200 transition-all duration-400 rounded-full'>Medical <IoIosArrowDown /></button>
                    <button className='text-sm py-2 px-6  flex items-center bg-gray-100 hover:bg-gray-200 transition-all duration-400 rounded-full'>Health <IoIosArrowDown /></button>
                    <button className='text-sm py-2 px-6  flex items-center bg-gray-100 hover:bg-gray-200 transition-all duration-400 rounded-full'>Education <IoIosArrowDown /></button>
                    <button className='text-sm py-2 px-6  flex items-center bg-gray-100 hover:bg-gray-200 transition-all duration-400 rounded-full'>Environment <IoIosArrowDown /></button>
                    <button className='text-sm py-2 px-6  flex items-center bg-gray-100 hover:bg-gray-200 transition-all duration-400 rounded-full'>Emergency <IoIosArrowDown /></button>
                </div>
                <div className='p-4'>
                    <button className='text-sm py-2 px-6  flex items-center bg-gray-100 hover:bg-gray-200 transition-all duration-400 rounded-full'>Reset <MdTune /></button>
                </div>
            </div>
            <div className='py-4 grid grid-cols-4 gap-4'>
                <Link to={'/campaign'}>
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
                </Link>
            </div>
            <div className='p-4 flex justify-center text-white'>
                <Link to='/explore' className='text-sm py-2 px-6  flex items-center bg-green-800 rounded-full'>Explore more <IoIosArrowDown /></Link>
            </div>
        </div>
    )
}

export default CampaignGrid