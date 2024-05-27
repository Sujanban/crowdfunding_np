import React from 'react'
import { LuClock3 } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { GoPeople } from "react-icons/go";


const BlogGrid = () => {
    return (
        <div className='px-4 md:py-20 max-w-7xl mx-auto'>
            <h1 className='relative px-4 text-xl md:text-2xl font-medium'>Featured Blog <span className='absolute left-0 bg-green-800 w-1.5 h-full'></span></h1>
            <div className='my-4 relative w-full h-60 md:h-[450px] '>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1716319487463-b3d0ea7f3d47?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <Link className='absolute w-full h-full bottom-0 left-0  flex items-center justify-center bg-gradient-to-t from-black  text-white'>
                    <div>
                        <h1 className='text-md md:text-2xl p-4 font-medium '>Revolutionizing Education with Tech: The Story of ABC Learning App</h1>
                        <div className='flex items-center justify-center text-xs md:text-inherit  space-x-3'>
                            <GoPeople />
                            <p className=''>@John Smith</p>
                            <li className='list-disc'>2023-05-15</li>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default BlogGrid