import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams,Link } from 'react-router-dom'
import axios from 'axios'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { formatDate } from '../utils/dateFormater'

const ViewCollectedDonations = () => {
    const { id } = useParams();
    const [donations, setDonations] = useState(null);

    useEffect(() => {
        const fetchDonations = async () => {
            try {
                const res = await axios.get("/api/donation/fetchDonationByCampaign/" + id);
                setDonations(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchDonations();
    }, []);
    return (
        <div>
            <Navbar />
            <div className='px-8 py-20 mx-auto max-w-7xl w-full'>
                <div className="p-2 relative overflow-x-auto sm:rounded-lg">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                        <thead className="text-xs text-slate-900 capitalize bg-gray-50">
                            <tr className=''>
                                {/* <th scope="col" className="px-2 py-3">SN</th> */}
                                <th scope="col" className=" py-3">Date</th>
                                <th scope="col" className="px-6 py-3">Donator</th>
                                <th scope="col" className="px-6 py-3">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                donations ? donations.map((item) =>
                                    <tr key={item._id} className='text-slate-600 text-xs border-b'>
                                        {/* <td scope="col" className="px-2 py-2">{++count}</td> */}
                                        <td scope="col" className=" py-2">{formatDate(item.createdAt)}</td>
                                        <td scope="col" className="px-6 py-2 font-bold ">{item.userId.email}</td>
                                        <td scope="col" className="px-6 py-2">₹ {item.amount}</td>
                                        <td scope="col" className="px-6 py-2">
                                            <Link to={`/admin/donations/donation/${item._id}`} className='py-2 px-4 flex items-center text-slate-600  transition-all duration-300 hover:text-slate-900 rounded-xl'>View<HiOutlineExternalLink className='ml-2' size={15} /></Link>
                                        </td>
                                    </tr>
                                )
                                :
                                    <h1>No Donations</h1>
                            }
                        </tbody>
                    </table>

                    {/* table footer */}
                    {/* <div className='py-4 flex justify-between items-center'>
                        <div className='text-xs text-slate-600'>
                            <h1>Showing 1 to 10 of 5 entries</h1>
                        </div>
                        <div className='flex items-center text-xs'>
                            <button onClick={handlePreviousPage} disabled={page <= 1} className='py-2 px-4 flex items-center text-slate-600  transition-all duration-300 hover:text-slate-900  border'><FaChevronLeft className='mr-2' /> Back</button>
                            
                            <button onClick={handleNextPage} disabled={donation.length < 10} className='py-2 px-4 flex items-center text-slate-600  transition-all duration-300 hover:text-slate-900  border'>Next<FaChevronRight className='ml-2' /></button>
                        </div>
                    </div> */}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ViewCollectedDonations