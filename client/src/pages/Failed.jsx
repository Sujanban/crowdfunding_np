import React from 'react';
import warning from '../assets/images/warning.png';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


const Failed = () => {
  return (
    <div>
      <Navbar />
      <div className='px-4 pb-12 md:pb-0 md:px-8 max-w-7xl mx-auto'>
        <div className=' text-center'>
          <img className=' mx-auto' src={warning} alt="" />
          <h1 className='p-2 text-center md:text-3xl font-medium'>Oh Smap!</h1>
          <p className='md:py-4 max-w-lg mx-auto'>It seems like the payment has Failed, Please try again latter.</p>
          <div className='py-2 md:py-4 flex justify-center space-x-4'>
            <Link to={"/"} className='px-4 py-3 text-sm bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 rounded-xl'>Back to Home</Link>
            <Link to={"/explore"} className='px-4 py-3 text-sm ring-1 ring-emerald-600 text-emerald-600 hover:bg-emerald-700 hover:text-white transition-all duration-300 rounded-xl'>Explore More</Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Failed