import React, { useEffect, useState } from 'react'
import Navbar from '../../components/admin/Navbar'
import Search from '../../components/admin/Search'
import { LuChevronRight } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampaign } from '../../app/feature/campaignSlice';
import WarningPopup from '../../components/WarningPopup';
import { VscEdit, VscTrash } from 'react-icons/vsc';
import axios from 'axios';
import { IoFunnelOutline } from "react-icons/io5";
import { TiPen } from "react-icons/ti";
import Loader from '../../components/Loader';
import Pagination from '../../components/Pagination';


const Campaigns = () => {
    const dispatch = useDispatch();
    const campaign = useSelector(state => state.campaign.data)
    const [filteredCampaign, setFilteredCampaign] = useState({})
    const { isLoading } = useSelector(state => state.campaign)
    const [toggleFilter, setToggleFilter] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedCampaignId, setSelectedCampaignId] = useState(null);
    const [users, setUsers] = useState([]);


    const handleDelete = (id) => {
        setSelectedCampaignId(id)
        setPopupVisible(true)
    }

    const fetchAllUsers = async () => {
        try {
            const res = await axios.get('/api/user/users')
            if (res.data.error) {
                toast.error(res.data.error)
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

    // implementing pagination in frontend
    const numberOfItems = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * numberOfItems;
    const indexOfFirstItem = indexOfLastItem - numberOfItems;
    const currentItems = filteredCampaign.length? filteredCampaign : campaign.slice(indexOfFirstItem, indexOfLastItem);

    const handleSort = (sort) => {
        if(sort === 'active') {
            const data = campaign?.filter(data => data.status === 'active');
            setFilteredCampaign(data)
        }
        if(sort === 'completed') {
            const data = campaign?.filter(data => data.status === 'completed');
            setFilteredCampaign(data)
        }
        if(sort === 'default') {
            setFilteredCampaign(campaign)
        }
    }

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
                                    <h1 className='border-b-2 border-emerald-600  font-medium'>Campaigns</h1>
                                    <div className='relative '>
                                        <button onClick={() => setToggleFilter(!toggleFilter)} className='border rounded px-4 text-sm py-2 flex items-center hover:bg-gray-100'>Filter <IoFunnelOutline className='ml-2' /></button>
                                        {toggleFilter && (
                                            <div className=' text-left pt-2 w-40 text-xs absolute top-10 right-0 z-50 shadow bg-white'>
                                                <div className='border-b '>
                                                    <button onClick={() => { handleSort("default"); setToggleFilter(false); }} className='text-left px-8 py-3 hover:bg-gray-100 w-full'>Default</button>
                                                </div>
                                                <div className='border-b '>
                                                    <button onClick={() => { handleSort("active"); setToggleFilter(false); }} className='text-left px-8 py-3 hover:bg-gray-100 w-full'>Active</button>
                                                </div>
                                                <div className='border-b'>
                                                    <button onClick={() => { handleSort("completed"); setToggleFilter(false); }} className='text-left px-8 py-3 hover:bg-gray-100 w-full'>Completed</button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="p-2 relative overflow-x-auto sm:rounded-lg">
                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                                        <thead className=" text-slate-900 capitalize bg-gray-50">
                                            <tr className=''>
                                                <th scope="col" className="px-6 py-3">Campaign</th>
                                                <th scope="col" className="px-6 py-3">Creator</th>
                                                <th scope="col" className="px-6 py-3">Status</th>
                                                <th scope="col" className="px-6 py-3">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                isLoading && <Loader />
                                            }
                                            {
                                                currentItems && currentItems.map((item, index) =>
                                                    <tr key={index} className={`text-slate-600 border-b bg-opacity-20 ${item.status === "active" ? "bg-emerald-50" : "bg-orange-50"}`}>
                                                        <td scope="col" className="px-6 py-4">{item.campaignTitle.slice(0, 50)}</td>
                                                        <td scope="col" className="px-6 py-4">
                                                            {users.filter(user => user._id === item.campaignOwner)[0]?.firstName + " " + users.filter(user => user._id === item.campaignOwner)[0]?.lastName}
                                                        </td>
                                                        <td scope="col" className="px-6 py-4 text-xs">
                                                            <div className='flex items-center'>
                                                                <span className={`px-2 py-1 ring-1 flex items-center rounded-full space-x-2 ${item.status === "active" ? " text-emerald-600  ring-emerald-600" : " text-red-600 ring-orange-600"}`}>
                                                                    <div className={`w-2 h-2 rounded-full  ${item.status === "active" ? " bg-emerald-600" : " bg-red-600"}`}></div>
                                                                    <span>{item.status}</span>
                                                                </span>
                                                            </div>
                                                        </td>
                                                        <td scope="col" className="px-6 py-4 flex items-center">
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

                                    {/* pagination */}
                                    <Pagination
                                        currentPage={currentPage}
                                        setCurrentPage={setCurrentPage}
                                        currentItems={currentItems}
                                        numberOfItems={numberOfItems}
                                    />
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