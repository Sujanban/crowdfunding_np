import React, { useEffect, useState } from 'react'
import Navbar from '../../components/admin/Navbar'
import Search from '../../components/admin/Search'
import { LuChevronRight } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { BiUser } from "react-icons/bi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { GiGolfFlag } from "react-icons/gi";
import { GiUpgrade } from "react-icons/gi";




const Categories = () => {
    const [openTab, setOpenTab] = useState('recent');
    return (
        <div className='flex max-w-7xl mx-auto w-full rounded-xl'>
            <Navbar />
            <div className='w-full '>
                <Search />
                <div className='p-8 h-[90vh] overflow-y-auto bg-gray-100'>
                    {/* breadcrumbs */}
                    <div className='p-2'>
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

                    <div className='p-4  '>
                        <div className='col-span-2'>

                            {/* donation stats grid */}
                            <div className=' grid grid-cols-3 gap-4'>
                                <div className='p-4 rounded-xl shadow flex items-center bg-white'>
                                    <div className=''>
                                        <MdOutlineAttachMoney className='text-orange-600 bg-orange-100 rounded-xl' size={30} />
                                    </div>
                                    <div className='p-2'>
                                        <h1 className='text-sm'>Total Donations</h1>
                                        <h1 className='text-xl font-semibold'>₹ 120,500</h1>
                                    </div>
                                </div>
                                <div className='p-4 rounded-xl shadow flex items-center bg-white'>
                                    <div className=''>
                                        <LiaPeopleCarrySolid className='text-pink-600 bg-yellow-100 rounded-xl' size={30} />
                                    </div>
                                    <div className='p-2'>
                                        <h1 className='text-sm'>Top Donation</h1>
                                        <h1 className='text-xl font-semibold'>₹ 1000</h1>
                                    </div>
                                </div>
                                <div className='p-4 rounded-xl shadow flex items-center bg-white'>
                                    <div className=''>
                                        <GiGolfFlag className='text-emerald-600 bg-emerald-100 rounded-xl' size={30} />
                                    </div>
                                    <div className='p-2'>
                                        <h1 className='text-sm'>Top Contributer</h1>
                                        <h1 className='text-xl font-semibold'>John Cena</h1>
                                    </div>
                                </div>
                            </div>


                            {/* donation records table */}
                            <div className='py-4 '>
                                <div className='p-4 bg-white rounded-xl'>
                                    <h1 className=' font-bold'>Donation Records</h1>
                                    <div className='grid grid-cols-3 gap-4'>

                                        <Link className='my-2 shadow z-20' to={`/campaign`} >
                                            <div className=' h-40 relative'>
                                                <div>
                                                    <div className='absolute -z-10 -right-2 bottom-0 rotate-45 w-4 h-4 bg-green-600'></div>
                                                    <div className='absolute p-1 px-3 -right-3 bottom-2 text-xs bg-green-600 text-white'>Featured Campaign</div>
                                                </div>
                                                <div className='absolute top-2 left-2 px-2 py-1 text-xs bg-white rounded-md'>
                                                    <p>6 Days Left</p>
                                                </div>
                                                <div className='absolute left-2 bottom-2 p-2'>
                                                    <GiUpgrade className='p-2 animate-pulse text-emerald-600 bg-white rounded-full text-3xl outline outline-offset-2 outline-white outline-1' />
                                                </div>
                                                <img className='w-full h-full object-cover rounded-t-xl' src='https://assets-global.website-files.com/62c48993e01c97eb9f854895/63a4733fcbe18f4723ddbac9_shutterstock_581362633.jpg' alt="" />
                                            </div>
                                            <div className='grid gap-1 bg-gradient-to-b from-emerald-50'>
                                                <h1 className='p-2 font-bold'>Need help to treat cancer to treat cancer for the first time</h1>
                                                <div className='px-2 pb-2 grid '>
                                                    <Link className='p-2 font-bold text-emerald-600 hover:bg-emerald-50 transition-all duration-300 text-center text-sm w-full rounded-md ring-1 ring-emerald-600' to={'/campaign'}>Update Campaign</Link>
                                                </div>
                                                <div className=' grid grid-cols-3 text-center'>
                                                    <div className='p-1 ring-1 ring-emerald-100 rounded'>
                                                        <p className='text-xs text-gray-500'>Raised</p>
                                                        <h1 className='font-bold'>₹ 120,500</h1>
                                                    </div>
                                                    <div className='p-1 ring-1 ring-emerald-100 rounded'>
                                                        <p className='text-xs text-gray-500'>Goals</p>
                                                        <h1 className='font-bold'>₹ 110,500</h1>
                                                    </div>
                                                    <div className='p-1 ring-1 ring-emerald-100 rounded'>
                                                        <p className='text-xs text-gray-500'>Left</p>
                                                        <h1 className='font-bold'>₹ 10,000</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link className='my-2 shadow z-20' to={`/campaign`} >
                                            <div className=' h-40 relative'>
                                                <div>
                                                    <div className='absolute -z-10 -right-2 bottom-0 rotate-45 w-4 h-4 bg-green-600'></div>
                                                    <div className='absolute p-1 px-3 -right-3 bottom-2 text-xs bg-green-600 text-white'>Featured Campaign</div>
                                                </div>
                                                <div className='absolute top-2 left-2 px-2 py-1 text-xs bg-white rounded-md'>
                                                    <p>6 Days Left</p>
                                                </div>
                                                <div className='absolute left-2 bottom-2 p-2'>
                                                    <GiUpgrade className='p-2 animate-pulse text-emerald-600 bg-white rounded-full text-3xl outline outline-offset-2 outline-white outline-1' />
                                                </div>
                                                <img className='w-full h-full object-cover rounded-t-xl' src='https://assets-global.website-files.com/62c48993e01c97eb9f854895/63a4733fcbe18f4723ddbac9_shutterstock_581362633.jpg' alt="" />
                                            </div>
                                            <div className='grid gap-1 bg-gradient-to-b from-emerald-50'>
                                                <h1 className='p-2 font-bold'>Need help to treat cancer to treat cancer for the first time</h1>
                                                <div className='px-2 pb-2 grid '>
                                                    <Link className='p-2 font-bold text-emerald-600 hover:bg-emerald-50 transition-all duration-300 text-center text-sm w-full rounded-md ring-1 ring-emerald-600' to={'/campaign'}>Update Campaign</Link>
                                                </div>
                                                <div className=' grid grid-cols-3 text-center'>
                                                    <div className='p-1 ring-1 ring-emerald-100 rounded'>
                                                        <p className='text-xs text-gray-500'>Raised</p>
                                                        <h1 className='font-bold'>₹ 120,500</h1>
                                                    </div>
                                                    <div className='p-1 ring-1 ring-emerald-100 rounded'>
                                                        <p className='text-xs text-gray-500'>Goals</p>
                                                        <h1 className='font-bold'>₹ 110,500</h1>
                                                    </div>
                                                    <div className='p-1 ring-1 ring-emerald-100 rounded'>
                                                        <p className='text-xs text-gray-500'>Left</p>
                                                        <h1 className='font-bold'>₹ 10,000</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link className='my-2 shadow z-20' to={`/campaign`} >
                                            <div className=' h-40 relative'>
                                                <div>
                                                    <div className='absolute -z-10 -right-2 bottom-0 rotate-45 w-4 h-4 bg-green-600'></div>
                                                    <div className='absolute p-1 px-3 -right-3 bottom-2 text-xs bg-green-600 text-white'>Featured Campaign</div>
                                                </div>
                                                <div className='absolute top-2 left-2 px-2 py-1 text-xs bg-white rounded-md'>
                                                    <p>6 Days Left</p>
                                                </div>
                                                <div className='absolute left-2 bottom-2 p-2'>
                                                    <GiUpgrade className='p-2 animate-pulse text-emerald-600 bg-white rounded-full text-3xl outline outline-offset-2 outline-white outline-1' />
                                                </div>
                                                <img className='w-full h-full object-cover rounded-t-xl' src='https://assets-global.website-files.com/62c48993e01c97eb9f854895/63a4733fcbe18f4723ddbac9_shutterstock_581362633.jpg' alt="" />
                                            </div>
                                            <div className='grid gap-1 bg-gradient-to-b from-emerald-50'>
                                                <h1 className='p-2 font-bold'>Need help to treat cancer to treat cancer for the first time</h1>
                                                <div className='px-2 pb-2 grid '>
                                                    <Link className='p-2 font-bold text-emerald-600 hover:bg-emerald-50 transition-all duration-300 text-center text-sm w-full rounded-md ring-1 ring-emerald-600' to={'/campaign'}>Update Campaign</Link>
                                                </div>
                                                <div className=' grid grid-cols-3 text-center'>
                                                    <div className='p-1 ring-1 ring-emerald-100 rounded'>
                                                        <p className='text-xs text-gray-500'>Raised</p>
                                                        <h1 className='font-bold'>₹ 120,500</h1>
                                                    </div>
                                                    <div className='p-1 ring-1 ring-emerald-100 rounded'>
                                                        <p className='text-xs text-gray-500'>Goals</p>
                                                        <h1 className='font-bold'>₹ 110,500</h1>
                                                    </div>
                                                    <div className='p-1 ring-1 ring-emerald-100 rounded'>
                                                        <p className='text-xs text-gray-500'>Left</p>
                                                        <h1 className='font-bold'>₹ 10,000</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link className='my-2 shadow z-20' to={`/campaign`} >
                                            <div className=' h-40 relative'>
                                                <div>
                                                    <div className='absolute -z-10 -right-2 bottom-0 rotate-45 w-4 h-4 bg-green-600'></div>
                                                    <div className='absolute p-1 px-3 -right-3 bottom-2 text-xs bg-green-600 text-white'>Featured Campaign</div>
                                                </div>
                                                <div className='absolute top-2 left-2 px-2 py-1 text-xs bg-white rounded-md'>
                                                    <p>6 Days Left</p>
                                                </div>
                                                <div className='absolute left-2 bottom-2 p-2'>
                                                    <GiUpgrade className='p-2 animate-pulse text-emerald-600 bg-white rounded-full text-3xl outline outline-offset-2 outline-white outline-1' />
                                                </div>
                                                <img className='w-full h-full object-cover rounded-t-xl' src='https://assets-global.website-files.com/62c48993e01c97eb9f854895/63a4733fcbe18f4723ddbac9_shutterstock_581362633.jpg' alt="" />
                                            </div>
                                            <div className='grid gap-1 bg-gradient-to-b from-emerald-50'>
                                                <h1 className='p-2 font-bold'>Need help to treat cancer to treat cancer for the first time</h1>
                                                <div className='px-2 pb-2 grid '>
                                                    <Link className='p-2 font-bold text-emerald-600 hover:bg-emerald-50 transition-all duration-300 text-center text-sm w-full rounded-md ring-1 ring-emerald-600' to={'/campaign'}>Update Campaign</Link>
                                                </div>
                                                <div className=' grid grid-cols-3 text-center'>
                                                    <div className='p-1 ring-1 ring-emerald-100 rounded'>
                                                        <p className='text-xs text-gray-500'>Raised</p>
                                                        <h1 className='font-bold'>₹ 120,500</h1>
                                                    </div>
                                                    <div className='p-1 ring-1 ring-emerald-100 rounded'>
                                                        <p className='text-xs text-gray-500'>Goals</p>
                                                        <h1 className='font-bold'>₹ 110,500</h1>
                                                    </div>
                                                    <div className='p-1 ring-1 ring-emerald-100 rounded'>
                                                        <p className='text-xs text-gray-500'>Left</p>
                                                        <h1 className='font-bold'>₹ 10,000</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link className='my-2 shadow z-20' to={`/campaign`} >
                                            <div className=' h-40 relative'>
                                                <div>
                                                    <div className='absolute -z-10 -right-2 bottom-0 rotate-45 w-4 h-4 bg-green-600'></div>
                                                    <div className='absolute p-1 px-3 -right-3 bottom-2 text-xs bg-green-600 text-white'>Featured Campaign</div>
                                                </div>
                                                <div className='absolute top-2 left-2 px-2 py-1 text-xs bg-white rounded-md'>
                                                    <p>6 Days Left</p>
                                                </div>
                                                <div className='absolute left-2 bottom-2 p-2'>
                                                    <GiUpgrade className='p-2 animate-pulse text-emerald-600 bg-white rounded-full text-3xl outline outline-offset-2 outline-white outline-1' />
                                                </div>
                                                <img className='w-full h-full object-cover rounded-t-xl' src='https://assets-global.website-files.com/62c48993e01c97eb9f854895/63a4733fcbe18f4723ddbac9_shutterstock_581362633.jpg' alt="" />
                                            </div>
                                            <div className='grid gap-1 bg-gradient-to-b from-emerald-50'>
                                                <h1 className='p-2 font-bold'>Need help to treat cancer to treat cancer for the first time</h1>
                                                <div className='px-2 pb-2 grid '>
                                                    <Link className='p-2 font-bold text-emerald-600 hover:bg-emerald-50 transition-all duration-300 text-center text-sm w-full rounded-md ring-1 ring-emerald-600' to={'/campaign'}>Update Campaign</Link>
                                                </div>
                                                <div className=' grid grid-cols-3 text-center'>
                                                    <div className='p-1 ring-1 ring-emerald-100 rounded'>
                                                        <p className='text-xs text-gray-500'>Raised</p>
                                                        <h1 className='font-bold'>₹ 120,500</h1>
                                                    </div>
                                                    <div className='p-1 ring-1 ring-emerald-100 rounded'>
                                                        <p className='text-xs text-gray-500'>Goals</p>
                                                        <h1 className='font-bold'>₹ 110,500</h1>
                                                    </div>
                                                    <div className='p-1 ring-1 ring-emerald-100 rounded'>
                                                        <p className='text-xs text-gray-500'>Left</p>
                                                        <h1 className='font-bold'>₹ 10,000</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className='ring-1 ring-slate-200 rounded-xl shadow bg-white'>
                            <div className='grid grid-cols-2 gap-2'>
                                <button
                                    onClick={() => setOpenTab('recent')}
                                    className={`${openTab === 'recent' ? 'p-3 border-b-2 border-yellow-600' : 'p-3 border-b-2'}`}>Recent Donations</button>
                                <button
                                    onClick={() => setOpenTab('top')}
                                    className={`${openTab === 'top' ? 'p-3 border-b-2 border-yellow-600' : 'p-3 border-b-2'}`}>Top Donations</button>
                            </div>
                            {
                                openTab === 'recent' ?
                                    <div>
                                        <li className='m-1 p-4 border-b flex items-center'>
                                            <div>
                                                <img className='w-12 h-12 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8gwSeBAN2D8Php-gjgyZkJkuYlSgvuUn5okC12w8gdg&s" alt="" />
                                            </div>
                                            <div className='px-4 flex-grow'>
                                                <div className='flex items-center space-x-1'>
                                                    <h1 className='text-black '>John Doe</h1><div className='h-2 w-2 rounded-full bg-green-600'></div>
                                                </div>
                                                <h1 className='text-xs text-gray-500'>Help needed to treat cancer</h1>
                                            </div>
                                            <div>
                                                <h1 className='text-xl font-bold text-emerald-600'>100$</h1>
                                                <h1 className='pt-2 text-xs'>5 m ago</h1>
                                            </div>
                                        </li>
                                        <li className='m-1 p-4 border-b flex items-center'>
                                            <div>
                                                <img className='w-12 h-12 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwzqBOQU8-rmsHcEGZ1imKdw5fefN4G0gkyZdM6ydMNg&s" alt="" />
                                            </div>
                                            <div className='px-4 flex-grow'>
                                                <div className='flex items-center space-x-1'>
                                                    <h1 className='text-black '>Joseph Mahraneo</h1><div className='h-2 w-2 rounded-full bg-orange-600'></div>
                                                </div>
                                                <h1 className='text-xs text-gray-500'>College fee is haunding me</h1>
                                            </div>
                                            <div className='flex-grow'>
                                                <h1 className='text-xl font-bold text-emerald-600'>150$</h1>
                                                <h1 className='pt-2 text-xs w-full'>14 m ago</h1>
                                            </div>
                                        </li>
                                        <li className='m-1 p-4 border-b flex items-center'>
                                            <div>
                                                <img className='w-12 h-12 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8gwSeBAN2D8Php-gjgyZkJkuYlSgvuUn5okC12w8gdg&s" alt="" />
                                            </div>
                                            <div className='px-4 flex-grow'>
                                                <div className='flex items-center space-x-1'>
                                                    <h1 className='text-black '>John Doe</h1><div className='h-2 w-2 rounded-full bg-green-600'></div>
                                                </div>
                                                <h1 className='text-xs text-gray-500'>Help needed to treat cancer</h1>
                                            </div>
                                            <div>
                                                <h1 className='text-xl font-bold text-emerald-600'>50$</h1>
                                                <h1 className='pt-2 text-xs'>1 h ago</h1>
                                            </div>
                                        </li>
                                        <li className='m-1 p-4 border-b flex items-center'>
                                            <div>
                                                <img className='w-12 h-12 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwzqBOQU8-rmsHcEGZ1imKdw5fefN4G0gkyZdM6ydMNg&s" alt="" />
                                            </div>
                                            <div className='px-4 flex-grow'>
                                                <div className='flex items-center space-x-1'>
                                                    <h1 className='text-black '>Joseph Mahraneo</h1><div className='h-2 w-2 rounded-full bg-orange-600'></div>
                                                </div>
                                                <h1 className='text-xs text-gray-500'>College fee is haunding me</h1>
                                            </div>
                                            <div className=''>
                                                <h1 className='text-xl font-bold text-emerald-600'>25$</h1>
                                                <h1 className='pt-2 text-xs w-full'>12 h ago</h1>
                                            </div>
                                        </li>
                                    </div>
                                    :
                                    <div>
                                        <li className='m-1 p-4 border-b flex items-center'>
                                            <div>
                                                <img className='w-12 h-12 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwzqBOQU8-rmsHcEGZ1imKdw5fefN4G0gkyZdM6ydMNg&s" alt="" />
                                            </div>
                                            <div className='px-4 flex-grow'>
                                                <div className='flex items-center space-x-1'>
                                                    <h1 className='text-black '>Joseph Mahraneo</h1><div className='h-2 w-2 rounded-full bg-orange-600'></div>
                                                </div>
                                                <h1 className='text-xs text-gray-500'>College fee is haunding me</h1>
                                            </div>
                                            <div className='flex-grow'>
                                                <h1 className='text-xl font-bold text-emerald-600'>150$</h1>
                                                <h1 className='pt-2 text-xs w-full'>14 m ago</h1>
                                            </div>
                                        </li>
                                        <li className='m-1 p-4 border-b flex items-center'>
                                            <div>
                                                <img className='w-12 h-12 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8gwSeBAN2D8Php-gjgyZkJkuYlSgvuUn5okC12w8gdg&s" alt="" />
                                            </div>
                                            <div className='px-4 flex-grow'>
                                                <div className='flex items-center space-x-1'>
                                                    <h1 className='text-black '>John Doe</h1><div className='h-2 w-2 rounded-full bg-green-600'></div>
                                                </div>
                                                <h1 className='text-xs text-gray-500'>Help needed to treat cancer</h1>
                                            </div>
                                            <div>
                                                <h1 className='text-xl font-bold text-emerald-600'>100$</h1>
                                                <h1 className='pt-2 text-xs'>5 m ago</h1>
                                            </div>
                                        </li>

                                        <li className='m-1 p-4 border-b flex items-center'>
                                            <div>
                                                <img className='w-12 h-12 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8gwSeBAN2D8Php-gjgyZkJkuYlSgvuUn5okC12w8gdg&s" alt="" />
                                            </div>
                                            <div className='px-4 flex-grow'>
                                                <div className='flex items-center space-x-1'>
                                                    <h1 className='text-black '>John Doe</h1><div className='h-2 w-2 rounded-full bg-green-600'></div>
                                                </div>
                                                <h1 className='text-xs text-gray-500'>Help needed to treat cancer</h1>
                                            </div>
                                            <div>
                                                <h1 className='text-xl font-bold text-emerald-600'>50$</h1>
                                                <h1 className='pt-2 text-xs'>1 h ago</h1>
                                            </div>
                                        </li>
                                        <li className='m-1 p-4 border-b flex items-center'>
                                            <div>
                                                <img className='w-12 h-12 object-cover rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwzqBOQU8-rmsHcEGZ1imKdw5fefN4G0gkyZdM6ydMNg&s" alt="" />
                                            </div>
                                            <div className='px-4 flex-grow'>
                                                <div className='flex items-center space-x-1'>
                                                    <h1 className='text-black '>Joseph Mahraneo</h1><div className='h-2 w-2 rounded-full bg-orange-600'></div>
                                                </div>
                                                <h1 className='text-xs text-gray-500'>College fee is haunding me</h1>
                                            </div>
                                            <div className=''>
                                                <h1 className='text-xl font-bold text-emerald-600'>25$</h1>
                                                <h1 className='pt-2 text-xs w-full'>12 h ago</h1>
                                            </div>
                                        </li>
                                    </div>
                            }
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories