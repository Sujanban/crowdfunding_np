import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import success from '../assets/images/success1.gif'
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <div>
      <Navbar />
      <div className='px-8 py-20 max-w-7xl mx-auto'>
        <div className=' text-center'>
          <img className='h-44 mx-auto' src={success} alt="" />
          <h1 className='p-4 text-center text-xl md:text-3xl font-semibold'>Payment Successfull</h1>
          <p className='py-4 max-w-lg mx-auto'>Payment sucessfully completed! You're now a member of a ellite community helping others to achiev their Goal.</p>
          <div className='py-4 flex justify-center space-x-4'>
            <Link to={"/"} className='px-4 py-3 text-sm bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 rounded-xl'>Back to Home</Link>
            <Link to={"/explore"} className='px-4 py-3 text-sm ring-1 ring-emerald-600 text-emerald-600 hover:bg-emerald-700 hover:text-white transition-all duration-300 rounded-xl'>Explore More</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Success