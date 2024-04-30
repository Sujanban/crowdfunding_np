import React, { useEffect, useState } from 'react'
import Navbar from '../../components/admin/Navbar'
import Search from '../../components/admin/Search'
import { LuChevronRight } from "react-icons/lu";
import { Link, useParams } from 'react-router-dom';
import { BiUser } from "react-icons/bi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { GiGolfFlag } from "react-icons/gi";
import { GiUpgrade } from "react-icons/gi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoFunnelOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import success from '../../assets/images/success1.gif'
import { LiaCcVisa } from "react-icons/lia";
import { FaCcVisa } from "react-icons/fa";
import { FaFileArrowDown } from "react-icons/fa6";
import {formatDate, formatTime} from '../../utils/dateFormater'

import axios from 'axios'





const Donation = () => {
    const [donation, setDonation] = useState({});
    const { id } = useParams();

    useEffect(() => {

        const fetchDonation = async () => {
            const res = await axios.get(`/api/donation/fetchDonation/${id}`);
            if (res.status === 200) {
                setDonation(res.data);
                console.log(res.data);
            }
        }
        fetchDonation();
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
                                <li>
                                    <div className="flex items-center">
                                        <LuChevronRight className="h-4 w-4" />
                                        <Link to={''} className=" text-sm font-medium text-gray-800 hover:underline md:ml-2"> Invoice </Link>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                    </div>

                    <div className='p-4  '>
                        <div className='col-span-2'>

                            {/* Donation Invoice */}
                            <div className='grid grid-cols-3 gap-4'>
                                {/* left */}
                                <div className='w-full col-span-2 p-4 rounded-xl shadow bg-white'>
                                    <div className=''>
                                        {/* <img className=' h-32 mx-auto' src={success} alt="" />
                                        <h1 className='pb-6 text-center text-xl md:text-xl font-semibold'>Payment completed successfully!</h1> */}
                                        <div className=' grid grid-cols-2 gap-4'>
                                            <div className='p-4 rounded-xl shadow bg-gray-50'>
                                                <p className='text-slate-600'>Receipt from Campaign Donation</p>
                                                <h1 className='py-3 text-3xl font-semibold'>₹ {donation.amount}</h1>
                                                <p className='border-t py-2 flex items-center text-slate-600 text-sm'>Payment method: <FaCcVisa className='mx-4 ' size={30} /><span className='text-black font-bold'>- 5643</span></p>
                                            </div>
                                            <div className='p-4 rounded-xl shadow bg-emerald-50'>
                                                <p className='text-slate-600'>Download</p>
                                                <div className='py-3 flex items-center space-x-4'><FaFileArrowDown size={40} className='p-2 bg-emerald-100 rounded-xl text-emerald-600' /><span>Invoice PDF</span></div>
                                                <p className='border-t py-2 flex items-center text-slate-600 text-sm'>Paid:  <h1 className='px-2 font-bold text-black'> {formatDate(donation.createdAt)} {formatTime(donation.createdAt)}</h1></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='py-4'>
                                        <div className=' p-4'>
                                            <h1 className='font-bold'>Donation Details</h1>
                                            <div className="p-2 relative overflow-x-auto sm:rounded-lg">
                                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                                                    <thead className="text-xs text-slate-900 capitalize bg-gray-50">
                                                        <tr className=''>
                                                            <th scope="col" className="py-3">Campaign</th>
                                                            <th scope="col" className="px-6 py-3">Quantity</th>
                                                            <th scope="col" className="px-6 py-3">Amount</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className='text-slate-600 text-xs border-b'>
                                                            <td scope="col" className="py-2">{donation.campaignId?.campaignTitle}</td>
                                                            <td scope="col" className="px-6 py-2 font-bold ">1</td>
                                                            <td scope="col" className="px-6 py-2">₹ {donation.amount}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                                <div className='p-4 flex justify-end'>
                                                    <p className='text-slate-600 text-sm'>Total amount: <span className='font-bold text-black'>₹ {donation.amount}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* right */}
                                <div className=''>
                                    <div className='p-6 rounded-xl shadow bg-white'>
                                        <h1 className='text-sm font-bold'>Donor Details</h1>
                                        <div className='py-4 text-sm text-slate-600'>
                                            <li className=' flex items-center space-x-3'>
                                                <img className='w-8 h-8 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSshuPvDi9AaX9NcRR1Srq2TTOK_PRwOWRy7n0E9jO7uQ&s" alt="" />
                                                <h1 className='capitalize'>{donation.userId?.firstName} {donation.userId?.lastName}</h1>
                                            </li>
                                            <li className='py-1 flex items-center space-x-3'>
                                                <IoMailOutline className='p-1.5 w-8 h-8 bg-orange-50 text-orange-600 rounded-full' />
                                                <h1>{donation.userId?.email}</h1>
                                            </li>
                                            {/* <li className='py-1 flex items-center space-x-3'>
                                                <GiGolfFlag className='p-1.5 w-8 h-8 bg-emerald-50 text-emerald-600 rounded-full' />
                                                <h1>Number of Campaign: 5</h1>
                                            </li>
                                            <li className='py-1 flex items-center space-x-3'>
                                                <BiUser className='p-1.5 w-8 h-8 bg-blue-50 text-blue-600 rounded-full' />
                                                <h1>Role: User</h1>
                                            </li> */}
                                        </div>
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

export default Donation