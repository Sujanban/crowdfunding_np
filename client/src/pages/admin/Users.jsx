import React, { useEffect, useState } from 'react'
import Navbar from '../../components/admin/Navbar'
import Search from '../../components/admin/Search'
import { LuChevronRight, LuHome } from "react-icons/lu";
import { Link } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampaign } from '../../app/feature/campaignSlice'
import { VscTrash } from 'react-icons/vsc';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Users = () => {
    const [users, setUsers] = useState(null);
    const dispatch = useDispatch();
    const campaigns = useSelector(state => state.campaign.data);
    let count = 0;
    // fetching all users from DB
    const fetchUsers = async () => {
        const res = await axios.get('api/user/users');
        if (res.data.error) {
            toast.error(res.data.error);
        } else {
            setUsers(res.data);
        }
    }
    // counting number of campaigns by each users
    const countCampaignsByUserId = (userId) => {
        const userCampaigns = campaigns.filter(campaign => campaign.campaignOwner === userId);
        return userCampaigns.length;
    }

    const deleteUser = async (id) => {
        try {
            console.log(id)
            const res = await axios.delete(`/api/user/deleteUser/${id}`);
            if (res.data.error) {
                return toast.error(res.data.error)
            } else {
                return toast.success(res.data.message)
            }
        } catch (err) {
            console.log("Error Fetching Api" + err)
        }
    }


    useEffect(() => {
        fetchUsers();
        dispatch(fetchCampaign());
    }, [users]);
    return (
        <div className='flex max-w-7xl mx-auto w-full'>
            <Navbar />
            <div className='w-full'>
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
                                        <Link to={'/admin/users'} className=" text-sm font-medium text-gray-800 hover:underline md:ml-2"> Users </Link>

                                    </div>
                                </li>

                            </ol>
                        </nav>
                    </div>

                    {/*  */}
                    <div className='p-4 pt-2'>
                        <div className='p-4 bg-white rounded-xl'>
                            <div className='p-2 flex items-center justify-between'>
                                <h1 className='border-b-2 border-emerald-600 font-bold'>Users</h1>
                                <div className='relative pr-4'>
                                    {/* <button className='border rounded px-4 text-sm py-2 flex items-center hover:bg-gray-50'>Filter <IoFunnelOutline className='ml-2' /></button> */}
                                    {/* {
                                    toggleFilter && <div className='p-2 w-32 text-xs absolute top-10 left-0 z-50 shadow bg-white'>
                                        <button className='px-2 py-3 w-full border-b'>Highest to lowest</button>
                                        <button className='px-2 py-3 w-full'>Lowest to highest</button>
                                    </div>
                                } */}
                                </div>
                            </div>

                            <div className="p-2 relative overflow-x-auto sm:rounded-lg">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                                    <thead className="text-sm text-gray-700 capitalize bg-gray-50">
                                        <tr className=''>
                                            <th scope="col" className="px-2 py-3">SN</th>
                                            <th scope="col" className="px-6 py-3">Email</th>
                                            <th scope="col" className="px-6 py-3">Name</th>
                                            <th scope="col" className="px-6 py-3">Role</th>
                                            <th scope="col" className="px-6 py-3">No. of Campaigns</th>
                                            <th scope="col" className="px-6 py-3">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users && users.map((user, index) =>
                                                <tr key={index} className='border-b'>
                                                    <td scope="col" className="px-2 py-2">{++count}</td>
                                                    <td scope="col" className="px-6 py-2">{user.email}</td>
                                                    <td scope="col" className="px-6 py-2 capitalize">{user.firstName}  {user.lastName}</td>
                                                    <td scope="col" className="px-6 py-2">{user.role === 1 ? 'Admin' : 'User'}</td>
                                                    <td scope="col" className="px-6 py-2">{countCampaignsByUserId(user._id)}</td>
                                                    <td scope="col" className="px-6 py-2">
                                                        <button onClick={() => deleteUser(user._id)} className='py-2 px-4 text-sm text-orange-600 bg-orange-100 transition-all duration-300 hover:bg-orange-200 rounded-xl'><VscTrash size={20} /></button>
                                                    </td>
                                                </tr>)
                                        }
                                    </tbody>
                                </table>
                                {/* table footer */}
                                <div className='py-4 flex justify-between items-center'>
                                    <div className='text-xs text-slate-600'>
                                        <h1>Showing 1 to 10 of 5 entries</h1>
                                    </div>
                                    <div className='flex items-center text-xs'>
                                        <button className='py-2 px-4 flex items-center text-slate-600  transition-all duration-300 hover:text-slate-900  border'><FaChevronLeft className='mr-2' /> Back</button>
                                        <button className='py-2 px-4 flex items-center text-slate-600  transition-all duration-300 hover:text-slate-900  border'>1</button>
                                        <button className='py-2 px-4 flex items-center text-slate-600  transition-all duration-300 hover:text-slate-900  border'>2</button>
                                        <button className='py-2 px-4 flex items-center text-slate-600  transition-all duration-300 hover:text-slate-900  border'>3</button>
                                        <button className='py-2 px-4 flex items-center text-slate-600  transition-all duration-300 hover:text-slate-900  border'>...</button>
                                        <button className='py-2 px-4 flex items-center text-slate-600  transition-all duration-300 hover:text-slate-900  border'>Next<FaChevronRight className='ml-2' /></button>
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

export default Users