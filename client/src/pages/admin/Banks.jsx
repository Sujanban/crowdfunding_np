import { CiBank, CiWallet } from "react-icons/ci";
import React, { useEffect, useState } from 'react'
import Navbar from '../../components/admin/Navbar'
import Search from '../../components/admin/Search'
import { LuBadgeCheck, LuBadgeMinus, LuChevronRight } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { BiUser } from "react-icons/bi";
import { MdOutlineAttachMoney } from "react-icons/md";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { GiGolfFlag } from "react-icons/gi";
import { GiUpgrade } from "react-icons/gi";
import { HiOutlineCash, HiOutlineExternalLink } from "react-icons/hi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoFunnelOutline } from "react-icons/io5";
import axios from 'axios';
import { formatDate, formatTime } from '../../utils/dateFormater'
import { useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getBanks } from "../../app/feature/bankSlice";
import { FaStripe } from "react-icons/fa";
import { GiLifeSupport } from 'react-icons/gi'
import { IoPersonOutline } from "react-icons/io5";
import { IoIosWallet } from "react-icons/io";
import { BsPatchCheck } from 'react-icons/bs'
import toast from "react-hot-toast";



const Banks = () => {
    const dispatch = useDispatch();
    let count = 0;
    const bank = useSelector(state => state.bank.data)
    
    const [payoutRequests, setPayoutRequests] = useState(null)
    
    const getPayoutRequests = async () => {
        try {
            const res = await axios.get('/api/bank/getPayoutRequests')
            if(res.data.error){
                toast.error(res.data.errror)
            }else{
                setPayoutRequests(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        dispatch(getBanks())
        getPayoutRequests()
    }, [])
    return (
        <div className='flex max-w-7xl mx-auto w-full rounded-xl'>
            <Navbar />
            <div className='w-full '>
                <Search />
                <div className='p-4 h-[90vh] overflow-y-auto bg-gray-100'>
                    <div className='p-4  '>
                        <div className='col-span-2'>
                            
                            {/* Donation Tables */}
                            <div className='mt-4'>
                                <div className='p-4 bg-white rounded-xl'>
                                    <div className='px-2 flex items-center justify-between'>
                                        <h1 className=' font-bold'>Account Details</h1>
                                    </div>
                                    <div className="p-2 relative overflow-x-auto sm:rounded-lg">
                                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                                            <thead className="text-xs text-slate-900 capitalize bg-gray-50">
                                                <tr className=''>
                                                    {/* <th scope="col" className="px-2 py-3">SN</th> */}
                                                    <th scope="col" className=" py-3">SN</th>
                                                    <th scope="col" className="px-6 py-3">User</th>
                                                    <th scope="col" className="px-6 py-3">Account Details</th>
                                                    <th scope="col" className="px-6 py-3">Account Balance</th>
                                                    {/* <th scope="col" className="px-6 py-3">Action</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    bank.length > 0 && bank.map((item) =>
                                                        <tr key={item._id} className='text-slate-600 text-sm border-b'>
                                                            {/* <td scope="col" className="px-2 py-2">{++count}</td> */}
                                                            <td scope="col" className=" py-2">{++count}</td>
                                                            <td scope="col" className="px-6 py-2 font-bold ">{item.userId.email}</td>
                                                            <td scope="col" className="px-6 py-2 flex items-center space-x-2"><span>{item.stripeAccountId}</span><FaStripe className="text-purple-500" size={35} /></td>
                                                            <td scope="col" className="px-6 py-2">{item.userId?.accountBalance}</td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </table>

                                        {/* table footer */}
                                        <div className='py-4 flex justify-between items-center'>
                                            <div className='text-xs text-slate-600'>
                                                <h1>Showing 1 to 3 of 1 entries</h1>

                                            </div>
                                            <div className='flex items-center text-xs'>
                                                <button className='py-2 px-4 flex items-center text-slate-600  transition-all duration-300 hover:text-slate-900  border'><FaChevronLeft className='mr-2' /> Back</button>
                                                <button className='py-2 px-4 flex items-center text-slate-600  transition-all duration-300 hover:text-slate-900  border'>Next<FaChevronRight className='ml-2' /></button>
                                            </div>
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

export default Banks