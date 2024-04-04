import React from 'react'
import { Link } from 'react-router-dom'
import linePlant from '../assets/images/line-plant.png'

const CtaBanner = () => {
    return (
        <div className='my-4 px-4 py-20 max-w-7xl mx-auto'>
            <div className='grid grid-cols-2'>
                <div className='px-4 py-20 bg-yelow-500 m-auto rounded-l'>
                    <h1 className='px-4 text-3xl'>Need Funds to Pay For a Medical Emergency or Social Cause?</h1>
                    <p className='p-4 text-xl'>Collab's 0% Platform fees ensures maximum funds for you</p>
                    <div className='p-4'>
                        <Link to='/createCampaign' className='bg-yellow-500 hover:bg-yellow-600 transition-all duration-400 px-4 py-3 rounded-full text-white'>Start Fundraising</Link>
                    </div>
                </div>
                <div className='flex items-center justify-center rounded-r'>
                    <div className=' w-full text-center'>
                        <img className='w-full h-96 object-cover' src="https://plus.unsplash.com/premium_photo-1672287578699-618ea6dbcc9e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CtaBanner