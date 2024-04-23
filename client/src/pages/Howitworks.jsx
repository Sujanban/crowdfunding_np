import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import screenshot1 from '../assets/images/screenshot2.png'

const Howitworks = () => {
    return (
        <>
            <Navbar />
            <div className='px-4 py-8 md:py-20 max-w-7xl mx-auto'>
                <h1 className='p-4 text-center text-xl md:text-3xl font-semibold'>How Collab Works</h1>
                <p className='p-2 md:p-4 text-slate-600 max-w-5xl text-left mx-auto md:text-center'>GoFundMe is the trusted place to fundraise for what you care about. There is no pressure to hit your fundraising goal and we have created tools to make it easy for donors to contribute to your fundraiser. Learn step-by-step what you need to get started—from writing your story and sharing your fundraiser to setting up bank transfers.</p>
            </div>
            <div className='max-w-7xl mx-auto '>
                <div className='md:grid grid-cols-2 gap-4'>
                    <div className='p-2 md:p-4 m-auto'>
                        <h1 className='w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-yellow-500 rounded-full md:text-2xl'>01</h1>
                        <h1 className='py-2 md:py-6 text-xl md:text-3xl'>Register Account</h1>
                        <p className='md:text-lg text-slate-600'>Follow a simple steps by filling up email and password and create a account for fundraising.</p>
                    </div>
                    <img className='p-2 h-full' src={screenshot1} alt="" />
                </div>
                <div className='md:grid grid-cols-2 gap-4'>
                    <img className='p-2 h-full' src={screenshot1} alt="" />
                    <div className='p-2 md:p-4 m-auto'>
                        <h1 className='w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-yellow-500 rounded-full md:text-2xl'>02</h1>
                        <h1 className='py-2 md:py-6 text-xl md:text-3xl'>Create Campaign</h1>
                        <p className='md:text-lg text-slate-600'>Enter your campaign details and start raising money.</p>
                    </div>

                </div>
                <div className='md:grid grid-cols-2 gap-4'>
                    <div className='p-2 md:p-4 m-auto'>
                        <h1 className='w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-yellow-500 rounded-full md:text-2xl'>03</h1>
                        <h1 className='py-2 md:py-6 text-xl md:text-3xl'>Withdraw Money</h1>
                        <p className='md:text-lg text-slate-600'>Add your bank details and Withdraw money from your account.</p>
                    </div>
                    <img className='p-2 h-full' src={screenshot1} alt="" />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Howitworks