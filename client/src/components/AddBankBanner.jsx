import React from 'react'
import { Link } from 'react-router-dom'

const AddBankBanner = () => {
    return (
        <div className='bg-slate-100'>
            <div className='px-4 md:px-8 py-12  flex  flex-wrap items-center justify-between mx-auto'>
                <div className='relative md:hidden mx-auto'>
                    <img className='h-32 ' src='https://img.icons8.com/bubbles/300/000000/bank-building.png' alt="" />
                </div>
                <div className='md:p-6 text-center md:text-left'>
                    <h1 className='md:m-2  md:text-2xl font-semibold border-b-2 border-green-600'>Setup your Banking Details</h1>
                    <p className='text-left text-sm md:text-md md:px-2 py-1'>Fillup your banking credentials in order to withdraw your money to the bank.</p>
                    <p className='text-left text-sm md:text-md pb-4 md:px-2 text-green-700'>No Charge Applied</p>
                    <Link to='/profile' className='ml-2 py-3 px-6 bg-emerald-600 text-white text-xs md:text-md transition-all duration-300 hover:bg-emerald-700 rounded-xl'>Let's Start</Link>
                </div>
                <div className='relative hidden md:flex'>
                    <img className='' src='https://img.icons8.com/bubbles/300/000000/bank-building.png' alt="" />
                </div>
            </div>
        </div>
    )
}

export default AddBankBanner