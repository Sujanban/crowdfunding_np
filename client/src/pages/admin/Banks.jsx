import React, { useEffect, useState } from 'react'
import Navbar from '../../components/admin/Navbar'
import Search from '../../components/admin/Search'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getBanks } from "../../app/feature/bankSlice";
import { FaStripe } from "react-icons/fa";
import Pagination from '../../components/Pagination';
import {IoFunnelOutline} from 'react-icons/io5'



const Banks = () => {
    let count = 0;
    const dispatch = useDispatch();
    const bank = useSelector(state => state.bank.data)
    const [toggleFilter, setToggleFilter] = useState(false);

    useEffect(() => {
        dispatch(getBanks())
    }, [])


    // implementing pagination in frontend
    const numberOfItems = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * numberOfItems;
    const indexOfFirstItem = indexOfLastItem - numberOfItems;
    const currentItems = bank?.slice(indexOfFirstItem, indexOfLastItem);


    const handleSort = (sort) => {}

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
                                        <h1 className=' font-medium'>Account Details</h1>
                                        <div className='relative '>
                                            <button onClick={() => setToggleFilter(!toggleFilter)} className='border rounded px-4 text-sm py-2 flex items-center hover:bg-gray-100'>Filter <IoFunnelOutline className='ml-2' /></button>
                                            {toggleFilter && (
                                                <div className='text-left pt-2 w-40 text-xs absolute top-10 right-0 z-50 shadow bg-white'>
                                                    <div className='border-b'>
                                                        <button onClick={() => { handleSort("desc"); setToggleFilter(false); }} className='px-5 py-3 hover:bg-gray-100 w-full'>Newest to Oldest</button>
                                                    </div>
                                                    <div className='border-b'>
                                                        <button onClick={() => { handleSort("asc"); setToggleFilter(false); }} className='px-5 py-3 hover:bg-gray-100 w-full'>Oldest to Newest</button>
                                                    </div>
                                                    <div className='border-b'>
                                                        <button onClick={() => { handleSort("highestFirst"); setToggleFilter(false); }} className='px-5 py-3 hover:bg-gray-100 w-full'>Highest to Lowest</button>
                                                    </div>
                                                    <div className='border-b'>
                                                        <button onClick={() => { handleSort("lowestFirst"); setToggleFilter(false); }} className='px-5 py-3 hover:bg-gray-100 w-full'>Lowest to Highest</button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="p-2 relative overflow-x-auto sm:rounded-lg">
                                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                                            <thead className="text-xs text-slate-900 capitalize bg-gray-50">
                                                <tr>
                                                    <th scope="col" className=" py-3">SN</th>
                                                    <th scope="col" className="px-6 py-3">User</th>
                                                    <th scope="col" className="px-6 py-3">Account Details</th>
                                                    <th scope="col" className="px-6 py-3">Account Balance</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    currentItems.length > 0 && currentItems.map((item) =>
                                                        <tr key={item._id} className='text-slate-600 text-sm border-b'>
                                                            <td scope="col" className=" py-2">{++count}</td>
                                                            <td scope="col" className="px-6 py-2 font-medium ">{item.userId.email}</td>
                                                            <td scope="col" className="px-6 py-2 flex items-center space-x-2"><span>{item.stripeAccountId}</span><FaStripe className="text-purple-500" size={35} /></td>
                                                            <td scope="col" className="px-6 py-2">{item.userId?.accountBalance}</td>
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
        </div>
    )
}

export default Banks