import React, { useEffect, useState } from 'react'
import Navbar from '../../components/admin/Navbar'
import Search from '../../components/admin/Search'
import { LuChevronRight } from "react-icons/lu";
import { Link, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampaign } from '../../app/feature/campaignSlice';
import WarningPopup from '../../components/WarningPopup';
import { VscEdit, VscTrash } from 'react-icons/vsc';
import axios from 'axios';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoFunnelOutline } from "react-icons/io5";
import { TiPen } from "react-icons/ti";
import { SiVirustotal } from "react-icons/si";


const Campaigns = () => {
    const [toggleFilter, setToggleFilter] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);


    // pagination
    const [searchParams, setSearchParams] = useSearchParams();
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10);
    const [sortOrder, setSortOrder] = useState('asc');


    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
            setSearchParams({ page: page - 1, limit });
        }
    }
    const handleNextPage = () => {
        setPage(page + 1);
        setSearchParams({ page: page + 1, limit });
    }


    const campaign = useSelector(state => state.campaign.data)
    const [selectedCampaignId, setSelectedCampaignId] = useState(null);
    const dispatch = useDispatch();
    const [users, setUsers] = useState([]);
    let count = 0;

    const handleDelete = (id) => {
        setSelectedCampaignId(id)
        setPopupVisible(true)
    }

    const fetchAllUsers = async () => {
        try {
            const res = await axios.get('/api/user/users')
            if (res.data.error) {
                toastr.error(res.data.error)
            } else {
                setUsers(res.data)
            }
        } catch (err) {
            console.log("Server Error while fetching API " + err);
        }
    }

    

    useEffect(() => {
        dispatch(fetchCampaign())
        fetchAllUsers();
    }, [])



    return (
        <div className='flex max-w-7xl mx-auto w-full'>
            <Navbar />
            <div className='w-full'>
                <Search />
                <div className='p-4 h-[90vh] overflow-y-auto bg-gray-100'>
                    {/* breadcrumbs */}
                    <div className='p-2  flex justify-between items-center'>
                        <nav className="flex" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center">
                                    <Link to={""} className=" inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2" >Dashboard</Link>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <LuChevronRight className="h-4 w-4" />
                                        <Link to={''} className=" text-sm font-medium text-gray-800 hover:underline md:ml-2"> Campaigns </Link>

                                    </div>
                                </li>

                            </ol>
                        </nav>
                        <Link to={'/admin/createcampaign'} className='mr-2 px-4 py-3 text-sm bg-emerald-600 text-white rounded-xl transition-all duration-300 hover:bg-emerald-700 cursor-pointer flex items-center '><TiPen className='mr-2' />Create</Link>
                    </div>

                    {/*  */}
                    <div className='p-4 pt-2 '>
                        <div className=''>
                            <div className='p-4 bg-white rounded-xl'>
                                <div className='p-2 flex items-center justify-between'>
                                    <h1 className='border-b-2 border-emerald-600  font-bold'>Campaigns</h1>
                                    <div className='relative pr-4'>
                                        <button onClick={() => setToggleFilter(!toggleFilter)} className='border rounded px-4 text-sm py-2 flex items-center hover:bg-gray-50'>Filter <IoFunnelOutline className='ml-2' /></button>
                                        {
                                            toggleFilter && <div className='p-2 w-32 text-xs absolute top-10 left-0 z-50 shadow bg-white'>
                                                <button className='px-2 py-3 w-full border-b'>Highest to lowest</button>
                                                <button className='px-2 py-3 w-full'>Lowest to highest</button>
                                            </div>
                                        }
                                    </div>
                                </div>
                                <div className="p-2 relative overflow-x-auto sm:rounded-lg">
                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                                        <thead className=" text-slate-900 capitalize bg-gray-50">
                                            <tr className=''>
                                                <th scope="col" className="px-2 py-3">SN</th>
                                                <th scope="col" className="px-6 py-3">Campaign</th>
                                                <th scope="col" className="px-6 py-3">Creator</th>
                                                <th scope="col" className="px-6 py-3">Status</th>
                                                <th scope="col" className="px-6 py-3">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                campaign && campaign.map((item, index) =>
                                                    <tr key={index} className='text-slate-600 border-b'>
                                                        <td scope="col" className="px-2 py-2">{++count}</td>
                                                        <td scope="col" className="px-6 py-2">{item.campaignTitle.slice(0, 50)}</td>
                                                        <td scope="col" className="px-6 py-2">
                                                            {users.filter(user => user._id === item.campaignOwner)[0]?.firstName + " " + users.filter(user => user._id === item.campaignOwner)[0]?.lastName}
                                                        </td>
                                                        <td scope="col" className="px-6 py-2">
                                                            <span className={`${item.status === "active" ? "px-1.5 py-0.5 text-emerald-600 bg-green-100 ring-1 ring-emerald-600 rounded-xl" : "px-1.5 py-0.5 text-red-600 bg-orange-100 ring-1 ring-orange-600 rounded-xl"}`}>{item.status}</span>
                                                        </td>
                                                        <td scope="col" className="px-6 py-2 flex items-center">
                                                            <Link to={`/admin/editcampaign/${item._id}`} className="m-1 px-4 py-2 bg-emerald-100 text-emerald-600 rounded-xl hover:bg-emerald-200 transition-all duration-300"><VscEdit size={20} /></Link>
                                                            <button onClick={() => handleDelete(item._id)} className="px-4 py-2 text-orange-600 bg-orange-100 rounded-xl hover:bg-orange-200 transition-all duration-300"><VscTrash size={20} /></button>
                                                            {
                                                                popupVisible && selectedCampaignId === item._id && <WarningPopup setPopupVisible={setPopupVisible} id={item._id} delCampaign={true} />
                                                            }
                                                        </td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>

                                    {/* table footer */}
                                    <div className='py-4 flex justify-between items-center'>
                                        <div className='text-xs text-slate-600'>
                                            <h1>Showing 1 to 10 of 5 entries</h1>
                                        </div>
                                        <div className='flex items-center text-xs'>
                                            <button onClick={handlePreviousPage} className='py-2 px-4 flex items-center text-slate-600  transition-all duration-300 hover:text-slate-900  border'><FaChevronLeft className='mr-2' /> Back</button>
                                            <button onClick={handleNextPage} className='py-2 px-4 flex items-center text-slate-600  transition-all duration-300 hover:text-slate-900  border'>Next<FaChevronRight className='ml-2' /></button>
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

export default Campaigns