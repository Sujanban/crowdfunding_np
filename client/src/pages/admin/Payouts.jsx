import React, { useEffect, useState } from 'react'
import Navbar from '../../components/admin/Navbar'
import Search from '../../components/admin/Search'
import { formatDate } from '../../utils/dateFormater'
import { useDispatch, useSelector } from 'react-redux'
import { getRequests, handlePayout } from '../../app/feature/payoutSlice'
import Loader from '../../components/Loader'



const Payouts = () => {
    let count = 0
    const dispatch = useDispatch();
    const payoutRequests = useSelector(state => state.payout.data);
    const isLoading = useSelector(state => state.payout.isLoading);

    const payoutHistory = payoutRequests?.filter(request => request.status === 'rejected' || request.status === 'approved')
    const pendingPayouts = payoutRequests?.filter(request => request.status === 'pending')

    const hanldePayoutStatus = async (id, status) => {
        dispatch(handlePayout({ id, status }))
    }

    useEffect(() => {
        dispatch(getRequests());
    }, [])

    return (
        <div className='flex max-w-7xl mx-auto w-full rounded-xl'>
            <Navbar />
            <div className='w-full '>
                <Search />
                <div className='p-4 h-[90vh] overflow-y-auto bg-gray-100'>
                    {
                        isLoading && <Loader />
                    }
                    <div className='p-4  '>
                        <div className='col-span-2'>
                            <h1 className='pb-2 font-bold'>Payout Requests</h1>
                            {/* payout requests */}
                            <div className='p-4dd bg-whithhe w-full rounded-xl'>
                                <div className='grid grid-cols-3 gap-4'>
                                    {
                                        pendingPayouts?.length ? pendingPayouts.map((request, index) => (
                                            <div key={index} className="flex space-x-4 shadow p-4 bg-white w-full rounded-xl">
                                                <img src='https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg' className='w-12 h-12 rounded-full object-cover' />
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
                                                        <button onClick={() => hanldePayoutStatus(request._id, 'approved')} className='px-3 py-2 rounded-xl bg-emerald-600 text-white transition-all duration-300 hover:bg-emerald-700 '>Approve</button>
                                                        <button onClick={() => hanldePayoutStatus(request._id, 'rejected' )} className='px-3 py-2 rounded-xl bg-orange-500 text-white transition-all duration-300 hover:bg-orange-600 '>Decline</button>
                                                    </div>
                                                </div>
                                                <div className='text-right w-full'>
                                                    <p className='text-xs'>{formatDate(request.createdAt).slice(0, 6)}</p>
                                                </div>

                                            </div>

                                        ))
                                            :
                                            <h1 className='p-4 bg-white rounded-xl'>No request found.</h1>
                                    }
                                </div>
                            </div>


                            {/* payout history */}
                            <div className='mt-4 p-4 bg-white w-full rounded-xl'>
                                <h1 className='px-2 font-bold'>Payout Records</h1>
                                <div className="p-2 max-w-5xl relative overflow-x-auto sm:rounded-lg">
                                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                                        <thead className="text-slate-900 capitalize bg-gray-50">
                                            <tr>
                                                <th scope="col" className=" py-4">SN</th>
                                                <th scope="col" className=" py-4">Date</th>
                                                <th scope="col" className=" py-4">Initiator</th>
                                                <th scope="col" className=" py-4">Amount</th>
                                                <th scope="col" className=" py-4">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                payoutHistory && payoutHistory.map((request, index) => (
                                                    <tr key={index} className="text-slate-600 border-b">
                                                        <td scope="col" className=" py-4">{++count}</td>
                                                        <td scope="col" className=" py-4">{formatDate(request.createdAt)}</td>
                                                        <td scope="col" className=" py-4">{request.userId?.email}</td>
                                                        <td scope="col" className=" py-4">₹ {request.amount}</td>
                                                        <td scope="col" className=" py-4 ">
                                                            <span className={`px-2 py-1 rounded-full ${request.status === 'approved' ? 'bg-emerald-100 text-emerald-600' : 'text-orange-600 bg-orange-100'}`}>{request.status}</span>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payouts