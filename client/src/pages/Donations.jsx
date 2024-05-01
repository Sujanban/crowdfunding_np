import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { HiOutlineExternalLink } from "react-icons/hi";


const Donations = () => {
  return (
    <div>
      <Navbar />
      <div className='px-8 py-20 mx-auto max-w-7xl w-full'>
        <div className='text-2xl font-semibold'>Donations Received</div>
        <div>
          <h1 className='font-bold'>Donation History</h1>
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
                <tr className='text-slate-600 text-xs border-b'>
                  {/* <td scope="col" className="px-2 py-2">{++count}</td> */}
                  <td scope="col" className=" py-2">feb</td>
                  <td scope="col" className="px-6 py-2 font-bold ">John Cena</td>
                  <td scope="col" className="px-6 py-2">₹ 100</td>
                  <td scope="col" className="px-6 py-2">
                    <Link to={`/admin/donations/donation/32423423432`}
                      className='py-2 px-4 flex items-center text-slate-600  transition-all duration-300 hover:text-slate-900 rounded-xl'>View<HiOutlineExternalLink className='ml-2' size={15} /></Link>
                  </td>
                </tr>
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