import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import screenshot1 from '../assets/images/createAccount.png'
import screenshot2 from '../assets/images/createCampaign.png'
import screenshot3 from '../assets/images/requestPayout.png'

const Howitworks = () => {
    const [toggleFullImageView, setToggleFullImageView] = useState(false)
    const [image, setImage] = useState(null)

    return (
        <div className={`toggleFullImageView ${toggleFullImageView ? 'h-[100vh] overflow-hidden' : ''}`}>
            {
                toggleFullImageView && 
                <div className=' absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 z-[9999] flex items-center justify-center'>
                    <div onClick={() => setToggleFullImageView(false)} className='absolute top-4 right-4 p-2 cursor-pointer rounded-full bg-gray-200'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <img className='max-w-[1000px] rounded-xl' src={image} alt="" />
                </div>
            }
            <Navbar />
            <div className='px-4 py-8 md:py-20 max-w-7xl mx-auto'>
                <div className=' flex items-center justify-center space-x-2'>
                    <h1 className='text-xl font-medium mx-auto border-b border-gray-300'>How collab works</h1>
                </div>
                <p className='p-2 md:p-4 text-slate-600 max-w-5xl text-left mx-auto md:text-center'>GoFundMe is the trusted place to fundraise for what you care about. There is no pressure to hit your fundraising goal and we have created tools to make it easy for donors to contribute to your fundraiser. Learn step-by-step what you need to get started—from writing your story and sharing your fundraiser to setting up bank transfers.</p>
            </div>
            <div className='grid gap-12 max-w-7xl mx-auto '>
                <div className='md:grid grid-cols-2 gap-4'>
                    <div className='p-2 md:p-4 m-auto'>
                        <h1 className='w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-yellow-500 rounded-full md:text-xl'>01</h1>
                        <h1 className='py-2 md:py-4 text-xl font-medium'>Register Account</h1>
                        <p className=' text-slate-600'>Follow a simple steps by filling up email and password and create a account for fundraising.</p>
                    </div>
                    <img onClick={() => [setToggleFullImageView(true), setImage(screenshot1)]} className='w-[500px] cursor-pointer mx-auto p-1.5 h-full rounded-xl bg-black' src={screenshot1} alt="" />
                </div>
                <div className='md:grid grid-cols-2 gap-4'>
                    <img onClick={() => [setToggleFullImageView(true), setImage(screenshot2)]} className='w-[500px] cursor-pointer mx-auto p-1.5 h-full rounded-xl bg-black' src={screenshot2} alt="" />
                    <div className='p-2 md:p-4 m-auto'>
                        <h1 className='w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-yellow-500 rounded-full md:text-xl'>02</h1>
                        <h1 className='py-2 md:py-4 text-xl font-medium'>Create Campaign</h1>
                        <p className=' text-slate-600'>Enter your campaign details and start raising money.</p>
                    </div>
                </div>
                <div className='md:grid grid-cols-2 gap-4'>
                    <div className='p-2 md:p-4 m-auto'>
                        <h1 className='w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-yellow-500 rounded-full md:text-xl'>03</h1>
                        <h1 className='py-2 md:py-4 text-xl font-medium'>Withdraw Money</h1>
                        <p className=' text-slate-600'>Add your bank details and Withdraw money from your account.</p>
                    </div>
                    <img onClick={() => [setToggleFullImageView(true), setImage(screenshot3)]} className='w-[500px] cursor-pointer mx-auto p-1.5 h-full rounded-xl bg-black' src={screenshot3} alt="" />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Howitworks