import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams, Link } from 'react-router-dom'
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
            <div className='px-4 md:px-8 md:py-20 mx-auto max-w-7xl w-full'>
                <div className='py-12 md:py-0 flex items-center justify-center'>
                    <h1 className='text-center border-b font-medium'>Collected Donations</h1>
                </div>
                <div className="md:p-2 relative overflow-x-auto sm:rounded-lg">
                    <table className=" w-full text-sm text-left rtl:text-right text-gray-500 ">
                        <thead className="text-xs text-slate-900 capitalize bg-gray-50">
                            <tr className=''>
                                <th scope="col" className="px-3 md:px-6 py-3">Date</th>
                                <th scope="col" className="px-3 md:px-6 py-3">Donator</th>
                                <th scope="col" className="px-3 md:px-6 py-3">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                donations && donations.map((item) =>
                                    <tr key={item._id} className='text-slate-600 text-xs border-b'>
                                        <td scope="col" className="px-3 md:px-6 py-3">{formatDate(item.createdAt)}</td>
                                        <td scope="col" className="px-3 md:px-6 py-3 font-medium ">{item.userId.email}</td>
                                        <td scope="col" className="px-3 md:px-6 py-3">₹ {item.amount}</td>
                                        <td scope="col" className="px-3 md:px-6 py-3">
                                            <Link to={`/admin/donations/donation/${item._id}`} className='py-2 px-4 flex items-center text-slate-600  transition-all duration-300 hover:text-slate-900 rounded-xl'>View<HiOutlineExternalLink className='ml-2' size={15} /></Link>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                        {
                            !donations?.length && <h1 className='p-3'>No Donations Found!</h1>
                        }
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ViewCollectedDonations