import React, { useEffect, useState } from 'react'
import Navbar from '../../components/admin/Navbar'
import Search from '../../components/admin/Search'
import { LuChevronRight } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { BiUser } from "react-icons/bi";



const Categories = () => {
    return (
        <div className='flex max-w-7xl mx-auto w-full'>
            <Navbar />
            <div className='w-full'>
                <Search />
                <div className='p-8 h-[90vh] overflow-y-auto'>
                    {/* breadcrumbs */}
                    <div className='p-4'>
                        <nav className="w-full flex" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center">
                                    <Link to={"/admin/dashboard"} className=" inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2" >Dashboard</Link>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <LuChevronRight className="h-4 w-4" />
                                        <Link to={'/admin/donations'} className=" text-sm font-medium text-gray-800 hover:underline md:ml-2"> Donations </Link>

                                    </div>
                                </li>

                            </ol>
                        </nav>
                    </div>

                    <div className='p-4 grid grid-cols-3 gap-4'>
                        <div className='col-span-2'>
                            co
                        </div>
                        <div>
                            <h1 className=' p-4 text-xl font-bold '>Recent Donations</h1>
                            <div>
                                <li className='m-1 p-4 rounded-xl bg-gray-100 flex'>
                                    <div>
                                        <BiUser className='bg-gray-200 text-green-600  rounded-full' size={30} />
                                    </div>
                                    <div className='px-4'>
                                        <div className='flex items-center space-x-1'>
                                            <h1 className='text-black '>John Doe</h1><div className='h-2 w-2 rounded-full bg-green-600'></div>
                                        </div>
                                        <h1 className='text-xs text-gray-500'>Help needed to treat cancer for cancer</h1>
                                    </div>
                                    <div>
                                        <h1 className='text-xl font-bold text-emerald-600'>500$</h1>
                                        <h1 className='pt-2 text-xs'>5 min</h1>
                                    </div>
                                </li>
                                <li className='m-1 p-4 rounded-xl bg-gray-100 flex'>
                                    <div>
                                        <BiUser className='bg-gray-200 text-orange-600  rounded-full' size={30} />
                                    </div>
                                    <div className='px-4'>
                                        <div className='flex items-center space-x-1'>
                                            <h1 className='text-black '>Joseph Mahraneo</h1><div className='h-2 w-2 rounded-full bg-orange-600'></div>
                                        </div>
                                        <h1 className='text-xs text-gray-500'>College fee is haunding me cause i am a student</h1>
                                    </div>
                                    <div className='flex-grow'>
                                        <h1 className='text-xl font-bold text-emerald-600'>50$</h1>
                                        <h1 className='pt-2 text-xs w-full'>14 min</h1>
                                    </div>
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories