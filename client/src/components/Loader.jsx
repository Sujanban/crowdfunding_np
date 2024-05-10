import React from 'react'
import { FaSpinner } from 'react-icons/fa'

const Loader = () => {
    return (
        <div className=' flex justify-center items-center'><FaSpinner className='text-emerald-600 animate-spin' size={30} /></div>
    )
}

export default Loader