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
        try{
            console.log(id)
            const res = await axios.delete(`/api/user/deleteUser/${id}`);
            if(res.data.error){
                return toast.error(res.data.error)
            }else{
                return toast.success(res.data.message)
            }
        }catch(err){
            console.log("Error Fetching Api" + err)
        }
    }

    useEffect(() => {
        fetchUsers();
        dispatch(fetchCampaign());
    }, []);
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
                                        <Link to={'/admin/users'} className=" text-sm font-medium text-gray-800 hover:underline md:ml-2"> Users </Link>

                                    </div>
                                </li>

                            </ol>
                        </nav>
                    </div>

                    {/*  */}
                    <div className='p-4'>
                        <div className='flex justify-between items-center'>
                            <h1 className='border-b-2 border-yellow-600 text-2xl font-semibold'>Users</h1>
                        </div>

                        <div className="p-2 relative overflow-x-auto sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                                <thead className="text-xs text-gray-700 capitalize bg-gray-50">
                                    <tr className=''>
                                        <th scope="col" className="px-2 py-3">SN</th>
                                        <th scope="col" className="px-6 py-3">Email</th>
                                        <th scope="col" className="px-6 py-3">First Name</th>
                                        <th scope="col" className="px-6 py-3">Last Name</th>
                                        <th scope="col" className="px-6 py-3">Role</th>
                                        <th scope="col" className="px-6 py-3">No. of Campaigns</th>
                                        <th scope="col" className="px-6 py-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        users && users.map((user, index) =>
                                            <tr key={index} className=''>
                                                <td scope="col" className="px-2 py-3">{++count}</td>
                                                <td scope="col" className="px-6 py-3">{user.email}</td>
                                                <td scope="col" className="px-6 py-3">{user.firstName}</td>
                                                <td scope="col" className="px-6 py-3">{user.lastName}</td>
                                                <td scope="col" className="px-6 py-3">{user.role === 1 ? 'Admin' : 'User'}</td>
                                                <td scope="col" className="px-6 py-3">{countCampaignsByUserId(user._id)}</td>
                                                <td scope="col" className="px-6 py-3">
                                                    <button onClick={() => deleteUser(user._id)} className='py-2 px-4 text-sm text-orange-600 bg-orange-100 transition-all duration-300 hover:bg-orange-200 rounded-xl'><VscTrash size={20} /></button>
                                                </td>
                                            </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Users