import React, { useEffect, useState } from 'react'
import Navbar from '../../components/admin/Navbar'
import Search from '../../components/admin/Search'
import { LuChevronRight, LuHome } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampaign } from '../../app/feature/campaignSlice';
import WarningPopup from '../../components/WarningPopup';

const Campaigns = () => {
    const [popupVisible, setPopupVisible] = useState(false);
    const campaign = useSelector(state => state.campaign.data)
    const dispatch = useDispatch()
    let count = 0;

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
                            <Link className='px-3 py-2 text-sm bg-green-600 text-white rounded-full'>Create Campaign</Link>
                        </div>
                        <p className='py-4 text-stone-600'>All the listed campaigns.</p>



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
                                        campaign && campaign.map((campaign, index) =>
                                            <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                <td className="px-2 py-4"> {++count} </td>
                                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> {campaign.campaignTitle.slice(0, 30) + "..."} </td>
                                                <td className="px-6 py-4"> {campaign.campaignOwner.slice(0, 20)} </td>
                                                <td className="px-6 py-4"> {campaign.category} </td>
                                                <td className="px-6 py-4"> {campaign.goalAmount}$ </td>
                                                <td className={`${campaign.status === "active" ? "text-green-600 px-6 py-4" : "text-red-500 px-6 py-4"}`}> {campaign.status} </td>
                                                <td className="px-6 py-4  flex items-center text-sm">
                                                    <Link to={`/admin/editcampaign/${campaign._id}`} className="m-1 px-4 py-2 text-white bg-orange-600 rounded-3xl">Edit</Link>
                                                    <button onClick={() => setPopupVisible(true)} className="px-4 py-2 text-white bg-[#141E46] rounded-full">Delete</button>
                                                    {
                                                        popupVisible && <WarningPopup setPopupVisible={setPopupVisible} id={campaign._id} delCampaign={true}/>
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