import React, { useEffect, useState } from 'react';
import Navbar from '../../components/admin/Navbar';
import Search from '../../components/admin/Search';
import { formatDate } from '../../utils/dateFormater';
import { useDispatch, useSelector } from 'react-redux';
import { getRequests, handlePayout } from '../../app/feature/payoutSlice';
import Loader from '../../components/Loader';
import Pagination from '../../components/Pagination';
import { IoFunnelOutline } from 'react-icons/io5';

const Payouts = () => {
    const dispatch = useDispatch();
    const [toggleFilter, setToggleFilter] = useState(false);
    const [sortedHistory, setSortedHistory] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const payoutRequests = useSelector(state => state.payout.data);
    const isLoading = useSelector(state => state.payout.isLoading);

    const numberOfItems = 10;
    const indexOfLastItem = currentPage * numberOfItems;
    const indexOfFirstItem = indexOfLastItem - numberOfItems;

    useEffect(() => {
        dispatch(getRequests());
    }, [dispatch]);

    useEffect(() => {
        if (payoutRequests) {
            const payoutHistory = payoutRequests.filter(
                request => request.status === 'rejected' || request.status === 'approved'
            );
            setSortedHistory(payoutHistory);
        }
    }, [payoutRequests]);

    const pendingPayouts = payoutRequests?.filter(request => request.status === 'pending');

    const handlePayoutStatus = async (id, status) => {
        dispatch(handlePayout({ id, status }));
    };

    const handleSort = (sort) => {
        const sorted = [...sortedHistory].sort((a, b) => {
            if (sort === "asc") return new Date(a.createdAt) - new Date(b.createdAt);
            if (sort === "desc") return new Date(b.createdAt) - new Date(a.createdAt);
            if (sort === "highestFirst") return b.amount - a.amount;
            if (sort === "lowestFirst") return a.amount - b.amount;
        });
        setSortedHistory(sorted);
    };


    // search
    const handleSearch = (query) => {
        setSearchQuery(query);
        if (query) {
            const filtered = sortedHistory.filter(request =>
                request.userId.email.toLowerCase().includes(query.toLowerCase())
            );
            setSortedHistory(filtered);
        } else {
            const payoutHistory = payoutRequests.filter(
                request => request.status === 'rejected' || request.status === 'approved'
            );
            setSortedHistory(payoutHistory);
        }
    }

    const currentItems = sortedHistory.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className='flex max-w-7xl mx-auto w-full rounded-xl'>
            {isLoading && <Loader />}
            <Navbar />
            <div className='w-full'>
                <Search searchQuery={searchQuery} onSearch={handleSearch} />
                <div className='p-4 h-[90vh] overflow-y-auto bg-gray-100'>
                    <div className='p-4'>
                        <div className='col-span-2'>
                            <h1 className='pb-2 font-medium'>Payout Requests</h1>
                            <div className='p-4 bg-white w-full rounded-xl'>
                                <div className='grid grid-cols-3 gap-4'>
                                    {pendingPayouts?.length ? pendingPayouts.map((request, index) => (
                                        <div key={index} className="flex space-x-4 shadow p-4 bg-white w-full rounded-xl">
                                            <img src='https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg' className='w-10 h-10 rounded-full object-cover' alt='User' />
                                            <div>
                                                <div>
                                                    <h1 className='font-bold'>{request.userId?.firstName} {request.userId?.lastName}</h1>
                                                    <p>{request.userId?.email}</p>
                                                </div>
                                                <div className='flex items-center space-x-4'>
                                                    <h1 className='font-bold'> $ {request.amount}</h1>
                                                    <div className='flex rounded-full px-1 bg-red-50 items-center space-x-1'>
                                                        <div className={`w-2 h-2 rounded-full animate-pulse bg-red-500`}></div>
                                                        <span className='text-sm'>{request.status}</span>
                                                    </div>
                                                </div>
                                                <div className='py-2 text-xs flex items-center space-x-2'>
                                                    <button onClick={() => handlePayoutStatus(request._id, 'approved')} className='px-3 py-2 rounded-xl bg-emerald-600 text-white transition-all duration-300 hover:bg-emerald-700 '>Approve</button>
                                                    <button onClick={() => handlePayoutStatus(request._id, 'rejected')} className='px-3 py-2 rounded-xl bg-orange-500 text-white transition-all duration-300 hover:bg-orange-600 '>Reject</button>
                                                </div>
                                            </div>
                                            <div className='text-right w-full'>
                                                <p className='text-xs'>{formatDate(request.createdAt).slice(0, 6)}</p>
                                            </div>
                                        </div>
                                    )) : (
                                        <h1 className='p-4 bg-white rounded-xl'>No request found.</h1>
                                    )}
                                </div>
                            </div>

                            {/* payout history */}
                            <div className='mt-4 p-4 bg-white w-full rounded-xl'>
                                <div className='px-2 flex items-center justify-between'>
                                    <h1 className=' font-medium'>Payouts History</h1>
                                    <div className='relative'>
                                        <button onClick={() => setToggleFilter(!toggleFilter)} className='border rounded px-4 text-sm py-2 flex items-center hover:bg-gray-100'>Filter
                                            <IoFunnelOutline className='ml-2' />
                                        </button>
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
                                <div className="p-2 max-w-5xl relative overflow-x-auto sm:rounded-lg">
                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                                        <thead className="text-slate-900 capitalize bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-4 py-4">Initiator</th>
                                                <th scope="col" className=" py-4">Amount</th>
                                                <th scope="col" className=" py-4">Date</th>
                                                <th scope="col" className=" py-4">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentItems.map((request, index) => (
                                                <tr key={index} className={`border-b bg-opacity-30 ${request.status === 'approved' ? 'bg-emerald-50' : 'bg-orange-50'}`}>
                                                    <td scope="col" className="px-4 py-6 flex items-center">{request.userId?.email}</td>
                                                    <td scope="col" className=" py-6">₹ {request.amount}</td>
                                                    <td scope="col" className=" py-6">{formatDate(request.createdAt)}</td>
                                                    <td scope="col" className=" py-6 text-xs">
                                                        <span className='flex items-center'>
                                                            <div className={`ring-1 flex items-center space-x-2 px-2 py-1 rounded-full ${request.status === 'rejected' ? 'ring-orange-600 text-orange-600' : 'ring-emerald-600 text-emerald-600'}`}>
                                                                <div className={`w-2 h-2 rounded-full ${request.status === 'rejected' ? 'bg-red-500' : 'bg-emerald-500'}`}></div>
                                                                <span>{request.status}</span>
                                                            </div>
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
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
    );
};

export default Payouts;
