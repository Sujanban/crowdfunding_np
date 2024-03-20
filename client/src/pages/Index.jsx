import React from 'react'
import { Link } from 'react-router-dom';
import Filedesign from '../components/Filedesign';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <>
      <Navbar />
      <div className='home w-full h-[90vh]'>
        <div className='px-4  max-w-7xl mx-auto '>
          <div className='my-12 md:my-16 max-w-lg mx-auto text-center'>
            <h1 className='py-4 text-center text-2xl md:text-5xl'>Great future are built with a small charity</h1>
            <p className='md:py-4 max-w-sm mx-auto text-slate-600'>The world's largest social fundraising platform, optimized for your charity in a more easy way</p>
            <div className='py-4 flex items-center justify-center gap-4'>
              <Link to='/login' className=' px-3 py-2 rounded-full bg-yellow-500 text-white'>Start Collaboration</Link>
              <Link className=' px-3 py-2 rounded-full bg-gray-200 '>Learn more</Link>
            </div>
          </div>
          <div>
            <Filedesign />
          </div>
        </div>
      </div>
      {/* join us */}
      <div className='px-4 max-w-7xl mx-auto  py-12 text-center  '>
        <h1 className='py-4 max-w-[600px] mx-auto text-slate-600 text-lg'>Join our community for donating and be a part of a positive change in the world. With over:</h1>
        <h1 className='text-6xl'>120,927+</h1>
        <div className='py-4'>
          <p className='pb-4 text-slate-600'>people already joining</p>
          <Link
            className='px-3 py-2 rounded-full bg-yellow-500 text-white'
            to='/login'>Yes, I want to join community</Link>
        </div>
      </div>

      {/* team */}
      <div className='px-4 py-12 max-w-7xl mx-auto  '>
        <div>
          <h1 className='text-3xl text-center'>Meet out team</h1>
          <p className='py-4 text-slate-600 text-center'>The world's latest social fundraising platform, optimized for your charity in a more easy way</p>
          <div className='flex justify-center gap-4 flex-wrap'>
            <div className=''>
              <img className='object-cover w-[275px] h-[350px] rounded-md ' src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvNDc5LW1rLTk2OTAucG5n.pnglient" alt="" />
              <h1 className='pt-2'>Antonio Roderi</h1>
              <p className='text-slate-600'>Platform Founder</p>
            </div>
            

          </div>
        </div>
      </div>
    </>
  )
}

export default Index