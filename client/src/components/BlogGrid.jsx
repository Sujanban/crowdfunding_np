import React from 'react'
import { LuClock3 } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { GoPeople } from "react-icons/go";


const BlogGrid = () => {
    return (
        <div className='px-4 py-20 max-w-7xl mx-auto'>
            <h1 className='relative px-4 text-3xl'>Featured Blog <span className='absolute left-0 bg-green-800 w-1.5 h-full'></span></h1>
            <div className='my-4 relative w-full h-[450px] '>
                <img className='w-full h-full object-cover' src="http://localhost:5173/src/assets/help.jpg" alt="" />
                <Link className='absolute w-full h-full bottom-0 left-0  flex items-center justify-center bg-gradient-to-t from-black  text-white'>
                    <div>
                        <h1 className='text-3xl p-4 '>Revolutionizing Education with Tech: The Story of ABC Learning App</h1>
                        <div className='flex items-center justify-center space-x-3'>
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