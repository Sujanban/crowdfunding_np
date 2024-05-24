import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { HiOutlineExternalLink } from "react-icons/hi";
import { useDispatch, useSelector } from 'react-redux';
import { formatDate } from '../utils/dateFormater'
import { fetchDonationByUser } from '../app/feature/donationSlice';
import AddBankBanner from '../components/AddBankBanner';
import Pagination from '../components/Pagination';
import Loader from '../components/Loader';


const Donations = () => {
  let count = 0;
  const user = useSelector(state => state.user.data)
  const donations = useSelector(state => state.donation.data)
  const isLoading = useSelector(state => state.donation.isLoading)
  const dispatch = useDispatch()


  // pagination 
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfItems = 10;
  const indexOfLastItem = currentPage * numberOfItems;
  const indexOfFirstItem = indexOfLastItem - numberOfItems;
  const currentItems = donations && donations?.slice(indexOfFirstItem, indexOfLastItem);


  useEffect(() => {
    dispatch(fetchDonationByUser(user._id));
  }, []);
  return (
    <div>
      <Navbar />
      <div className='px-4 py-20 mx-auto max-w-7xl w-full'>
        <div className='pb-4 flex items-center justify-center space-x-2'>
          <h1 className='text-xl font-medium mx-auto border-b border-gray-300'>Donation History</h1>
        </div>
        {
          isLoading && <Loader />
        }
        <p className='py-2 text-center md:text-left text-md text-slate-500'>You have made <span className='text-emerald-600'>{donations.length} donations</span></p>
        <div className="md:p-2 relative overflow-x-auto sm:rounded-lg">
          <table className="w-full text-sdm text-left rtl:text-right text-gray-500 ">
            <thead className=" text-slate-700 capitalize bg-gray-50">
              <tr className='text-sm'>
                <th scope="col" className=" py-3">Date</th>
                <th scope="col" className="px-6 py-3">Campaign</th>
                <th scope="col" className="px-6 py-3">Amount</th>
                <th scope="col" className="px-6 py-3">View Receipt</th>
              </tr>
            </thead>
            <tbody>
              {
                currentItems.length && currentItems.map((donation, index) => {
                  return (
                    <tr key={index} className='text-slate-500 text-sm border-b'>
                      <td scope="col" className=" py-2">{formatDate(donation.createdAt)}</td>
                      <td scope="col" className="px-6 py-2 font-medium ">{donation.campaignId?.campaignTitle ? donation.campaignId?.campaignTitle : "Campaign Unavailable N/A"}</td>
                      <td scope="col" className="px-6 py-2">$ {donation.amount}</td>
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

          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            currentItems={currentItems}
            numberOfItems={numberOfItems}
          />
        </div>

        <div className='my-4 py-20 text-center bg-slate-100 bg-grdadient-to-tr from-emerald-500 to-orange-500  rounded-xl'>
          <h1 className='md:text-xl font-medium'>View the donations you received from other users</h1>
          <p className='py-2 text-sm md:text-md text-slate-500'>You can view the donations you received from other users and see how much they donated.</p>
          <div className='py-2 flex items-center justify-center'>
            <Link to={'/profile'} className='py-2 px-4 flex items-center bg-emerald-600 rounded-xl text-white  transition-all duration-300 hover:bg-emerald-700 '>View Donations</Link>
          </div>
        </div>


        <div className='py-8'>
          <AddBankBanner />
        </div>
        
      </div>
      <Footer />
    </div>
  )
}

export default Donations