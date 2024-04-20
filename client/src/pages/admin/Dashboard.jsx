import React from 'react'
import Navbar from '../../components/admin/Navbar'
import Footer from '../../components/Footer'
import Sidebar from '../../components/admin/Sidebar'
import Search from '../../components/admin/Search'

const Dashboard = () => {
  return (
    <div className='flex bg-gray-100'>
      <Navbar />
      <div className=' w-full'>
        <Search />
      </div>
    </div>
  )
}

export default Dashboard