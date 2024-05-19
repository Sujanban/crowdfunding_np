import Navbar from '../../components/admin/Navbar'
import Search from '../../components/admin/Search'
import { IoIosArrowDown } from "react-icons/io";
import { TbBrandCampaignmonitor } from "react-icons/tb";
import { LiaMoneyBillWaveAltSolid, LiaPeopleCarrySolid } from "react-icons/lia";
import { LuChevronRight } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { BiUser } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampaign } from '../../app/feature/campaignSlice';
import { useEffect, useState } from 'react';
import { MdOutlineAttachMoney } from 'react-icons/md'
import { GiGolfFlag } from 'react-icons/gi';
import DonationStats from '../../components/admin/DonationStats';
import { getDonations } from '../../app/feature/donationSlice';


const Dashboard = () => {
    const [openTab, setOpenTab] = useState('recent');
    const campaign = useSelector(state => state.campaign.data)
    const donations = useSelector(state => state.donation.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCampaign())
        dispatch(getDonations())
    }, [])
    return (
        <div className='flex max-w-7xl mx-auto w-full rounded-xl'>
            <Navbar />
            <div className='w-full '>
                <Search />
                <div className='p-4 h-[90vh] overflow-y-auto bg-gray-100'>
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

                    <div className='p-4 '>
                        <div className=''>

                            {/* donation stats grid */}
                            <DonationStats donations={donations} />
                        </div>
                        <div className='py-4 grid grid-cols-3 gap-4 '>
                            <div className='col-span-2 rounded-xl bg-white'>
                                <div className=''>

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
        </div>
    )
}

export default Dashboard