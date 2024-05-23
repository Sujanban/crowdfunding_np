import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const Loader = () => {
    return (
        <div className='h-screen w-screen overflow-hidden absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30  z-[999999] flex items-center justify-center'>
            <FaSpinner className='text-emerald-900 animate-spin' size={50} />
        </div>
    )
}

export default Loader