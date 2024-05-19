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
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoFunnelOutline } from "react-icons/io5";
import axios from 'axios';
import { formatDate, formatTime } from '../../utils/dateFormater'
import { useDispatch, useSelector } from 'react-redux';
import { getDonations } from '../../app/feature/donationSlice';
import Loader from "../../components/Loader"
import DonationStats from '../../components/admin/DonationStats';



const Donations = () => {
    const [toggleFilter, setToggleFilter] = useState(false);
    const dispatch = useDispatch();
    const donations = useSelector(state => state.donation.data)
    const isLoading = useSelector(state => state.donation.isLoading)


    useEffect(() => {
        dispatch(getDonations())
    }, [dispatch])


    return (
        <div className='flex max-w-7xl mx-auto w-full rounded-xl'>
            <Navbar />
            <div className='w-full '>
                <Search />
                <div className='p-4 h-[90vh] overflow-y-auto bg-gray-100'>
                    {
                        isLoading && <Loader />
                    }
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
                            <DonationStats donations={donations} />
                            {/* Donation Tables */}
                            <div className='py-4'>
                                <div className='p-4 bg-white rounded-xl'>
                                    <div className='px-2 flex items-center justify-between'>
                                        <h1 className=' font-bold'>Recent Donations</h1>
                                        <div className='relative pr-4'>
                                            <button onClick={() => setToggleFilter(!toggleFilter)} className='border rounded px-4 text-sm py-2 flex items-center hover:bg-gray-50'>Filter <IoFunnelOutline className='ml-2' /></button>
                                            {
                                                toggleFilter && <div className='p-2 w-32 text-xs absolute top-10 left-0 z-50 shadow bg-white'>
                                                    <button onClick={() => [setSortOrder("desc"), setToggleFilter(false)]} className='px-2 py-3 w-full border-b'>Newest to oldest</button>
                                                    <button onClick={() => [setSortOrder("asc"), setToggleFilter(false)]} className='px-2 py-3 w-full'>Oldest to newest</button>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                    <div className="p-2 relative overflow-x-auto sm:rounded-lg">
                                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                                            <thead className="text-xs text-slate-900 capitalize bg-gray-50">
                                                <tr className=''>
                                                    {/* <th scope="col" className="px-2 py-3">SN</th> */}
                                                    <th scope="col" className=" py-3">Date</th>
                                                    <th scope="col" className="px-6 py-3">Donator</th>
                                                    <th scope="col" className="px-6 py-3">Amount</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    donations && donations.map((item) =>
                                                        <tr key={item._id} className='text-slate-600 text-xs border-b'>
                                                            {/* <td scope="col" className="px-2 py-2">{++count}</td> */}
                                                            <td scope="col" className=" py-2">{formatDate(item.createdAt)}</td>
                                                            <td scope="col" className="px-6 py-2 font-bold ">{item.userId.email}</td>
                                                            <td scope="col" className="px-6 py-2">₹ {item.amount}</td>
                                                            <td scope="col" className="px-6 py-2">
                                                                <Link to={`/admin/donations/donation/${item._id}`} className='py-2 px-4 flex items-center text-slate-600  transition-all duration-300 hover:text-slate-900 rounded-xl'>View<HiOutlineExternalLink className='ml-2' size={15} /></Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table>

                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donations