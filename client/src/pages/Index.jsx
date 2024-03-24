import React from 'react'
import { Link } from 'react-router-dom';
import Filedesign from '../components/Filedesign';
import Navbar from '../components/Navbar';
import sujan_folder from '../assets/images/sujan-folder.png'
import Footer from '../components/Footer';

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
              <Link to='/create/campaign/step1' className=' px-3 py-2 rounded-full bg-stone-800 text-white'>Create Campaign</Link>
              <Link className=' px-3 py-2 rounded-full bg-gray-200 '>Learn more</Link>
            </div>
          </div>
          <div className='flex items-center '>
            <div className='p-4'>
              <h1 className='text-3xl'>Supported by</h1>
              <p>100+ brands from all over the world</p>
            </div>
            <div className='w-full h-[200px] ring'>
            
            </div>
          </div>
        </div>
      </div>
      {/* join us */}
      <div className=' px-4 max-w-7xl mx-auto  py-20 text-center  '>
        <h1 className='py-4 max-w-[600px] mx-auto text-slate-600 text-lg'>Join our community for donating and be a part of a positive change in the world. With over:</h1>
        <h1 className='py-4 text-6xl'>120,927+</h1>
        <div className='py-4'>
          <p className='pb-6 text-slate-600'>people already joining</p>
          <Link
            className='px-3 py-3 rounded-full bg-stone-800 text-white'
            to='/login'>Yes, I want to join community</Link>
        </div>
      </div>

      {/* team */}
      <div className=' px-4 py-20 max-w-7xl mx-auto  '>
        <div>
          <h1 className='text-3xl text-center'>Meet out team</h1>
          <p className='py-4 max-w-[500px] mx-auto text-slate-600 text-center'>The world's latest social fundraising platform, optimized for your charity in a more easy way</p>
          <div className='p-4 max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-4 justify-center gap-6 flex-wrap'>
            <div className=''>
              <img
                className='w-full'
                src={sujan_folder} alt="" />
              <h1 className='pt-2'>Sujan Ban</h1>
              <p className='text-slate-600'>Platform Founder</p>
            </div>

            <div className=''>
              <img
                className='w-full'
                src={sujan_folder} alt="" />
              <h1 className='pt-2'>Sujan Ban</h1>
              <p className='text-slate-600'>Developer</p>
            </div>
            <div className=''>
              <img
                className='w-full'
                src={sujan_folder} alt="" />
              <h1 className='pt-2'>Sujan Ban</h1>
              <p className='text-slate-600'>Marketing Manager</p>
            </div>
            <div className=''>
              <img
                className='w-full'
                src={sujan_folder} alt="" />
              <h1 className='pt-2'>Sujan Ban</h1>
              <p className='text-slate-600'>SEO Expert</p>
            </div>


          </div>
        </div>
      </div>


      {/* footer */}
      <Footer />
    </>
  )
}

export default Index