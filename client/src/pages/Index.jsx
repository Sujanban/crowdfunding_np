import React from 'react'
import { Link } from 'react-router-dom';
import Filedesign from '../components/Filedesign';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <>
      <Navbar />
      <div className='home w-full h-[90vh]'>
        <div className='max-w-7xl mx-auto '>
          <div className='my-16 max-w-lg mx-auto text-center'>
            <h1 className='p-4 text-center text-5xl'>Great future are built with a small charity</h1>
            <p className='p-4 max-w-sm mx-auto text-slate-600'>The world's largest social fundraising platform, optimized for your charity in a more easy way</p>
            <div className='p-4 flex items-center justify-center gap-4'>
              <Link className='px-3 py-2 rounded-full bg-green-800 text-white'>Start Collaboration</Link>
              <Link className='px-3 py-2 rounded-full bg-gray-200 '>Learn more</Link>
            </div>
          </div>
          <div>
            <Filedesign />
          </div>

        </div>

      </div>
    </>
  )
}

export default Index