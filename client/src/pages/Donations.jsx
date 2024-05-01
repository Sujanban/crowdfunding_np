import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { HiOutlineExternalLink } from "react-icons/hi";
import { useSelector } from 'react-redux';
import axios from 'axios'
import {formatDate} from '../utils/dateFormater'


const Donations = () => {
  let count = 0;
  const user = useSelector(state => state.user.data)
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    const fetchDonationByUser = async () => {
      try {
        const res = await axios.get(`/api/donation/fetchDonationByUser/${user._id}`);
        setDonations(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDonationByUser();
  }, []);
  return (
    <div>
      <Navbar />
      <div className='px-8 py-20 mx-auto max-w-7xl w-full'>
        {/* <div className='text-2xl font-semibold'>Donations Received</div> */}
        <div>
          <h1 className='font-bold'>My Donation History</h1>
          <div className="p-2 relative overflow-x-auto sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
              <thead className="text-xs text-slate-900 capitalize bg-gray-50">
                <tr className=''>
                  <th scope="col" className="px-2 py-3">SN</th>
                  <th scope="col" className=" py-3">Date</th>
                  <th scope="col" className="px-6 py-3">Campaign</th>
                  <th scope="col" className="px-6 py-3">Amount</th>
                  <th scope="col" className="px-6 py-3">View Receipt</th>
                </tr>
              </thead>
              <tbody>
                {
                  donations && donations.map((donation) => {
                    return (
                      <tr className='text-slate-600 text-xs border-b'>
                        <td scope="col" className="px-2 py-2">{++count}</td>
                        <td scope="col" className=" py-2">{formatDate(donation.createdAt)}</td>
                        <td scope="col" className="px-6 py-2 font-bold ">{donation.campaignId?.campaignTitle}</td>
                        <td scope="col" className="px-6 py-2">₹ {donation.amount}</td>
                        <td scope="col" className="px-6 py-2">
                          <Link to={`/admin/donations/donation/32423423432`}
                            className='py-2 px-4 flex items-center text-slate-600  transition-all duration-300 hover:text-slate-900 rounded-xl'>View<HiOutlineExternalLink className='ml-2' size={15} /></Link>
                        </td>
                      </tr>
                    )
                  })
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Donations