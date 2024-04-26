import React, { useEffect, useState } from 'react'
import Navbar from '../../components/admin/Navbar'
import Search from '../../components/admin/Search'
import { LuChevronRight} from "react-icons/lu";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampaign } from '../../app/feature/campaignSlice';
import WarningPopup from '../../components/WarningPopup';
import { VscEdit, VscTrash } from 'react-icons/vsc';

const Campaigns = () => {
    const [popupVisible, setPopupVisible] = useState(false);
    const campaign = useSelector(state => state.campaign.data)
    const [selectedCampaignId, setSelectedCampaignId] = useState(null);
    const dispatch = useDispatch()
    let count = 0;

    const handleDelete = (id) => {
        setSelectedCampaignId(id)
        setPopupVisible(true)
    }

    useEffect(() => {
        dispatch(fetchCampaign())
    }, [])
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
                    </div>

                    {/*  */}
                    <div className='p-4'>
                        <div className='flex justify-between items-center'>
                            <h1 className='pr-2 border-b-2 border-yellow-600 text-2xl font-semibold'>Campaigns</h1>
                            <Link to={'/admin/createcampaign'} className='px-4 py-2 text-sm bg-emerald-600 text-white rounded-full'>Create Campaign</Link>
                        </div>
                        {/* <p className='py-4 text-stone-600'>All the listed campaigns.</p> */}



                        <div className="p-2 relative overflow-x-auto sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                                <thead className="text-xs text-gray-700 capitalize bg-gray-50  ">
                                    <tr>
                                        <th scope="col" className="px-2 py-3">SN</th>
                                        <th scope="col" className="px-6 py-3">Campaign</th>
                                        <th scope="col" className="px-6 py-3">Creator</th>
                                        <th scope="col" className="px-6 py-3">Category</th>
                                        <th scope="col" className="px-6 py-3">Raised $</th>
                                        <th scope="col" className="px-6 py-3">Status</th>
                                        <th scope="col" className="px-6 py-3">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        campaign && campaign.map((item, index) =>
                                            <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                <td className="px-2 py-4"> {++count} </td>
                                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> {item.campaignTitle.slice(0, 30) + "..."} </td>
                                                <td className="px-6 py-4"> {item.campaignOwner.slice(0, 20)} </td>
                                                <td className="px-6 py-4"> {item.category} </td>
                                                <td className="px-6 py-4"> {item.goalAmount}$ </td>
                                                <td className="px-6 py-4"> <span className={`${item.status === "active" ? "px-1.5 py-0.5 text-emerald-600 bg-green-100 rounded-xl" : "px-1.5 py-0.5 text-red-600 bg-orange-100 rounded-xl"}`}>{item.status}</span> </td>
                                                <td className="px-6 py-4 flex items-center text-sm">
                                                    <Link to={`/admin/editcampaign/${item._id}`} className="m-1 px-4 py-2 bg-emerald-100 text-emerald-600 rounded-xl hover:bg-emerald-200 transition-all duration-300"><VscEdit size={20}/></Link>
                                                    <button onClick={() => handleDelete(item._id)} className="px-4 py-2 text-orange-600 bg-orange-100 rounded-xl hover:bg-orange-200 transition-all duration-300"><VscTrash  size={20}/></button>
                                                    {
                                                        popupVisible && selectedCampaignId === item._id && <WarningPopup setPopupVisible={setPopupVisible} id={item._id} delCampaign={true} />
                                                    }
                                                </td>
                                            </tr>
                                        )}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Campaigns