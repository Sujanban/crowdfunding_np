import React from 'react'
import { LuClock3 } from "react-icons/lu";
import { Link } from 'react-router-dom';


const BlogGrid = () => {
    return (
        <div className='px-4 py-20 max-w-7xl mx-auto'>
            <h1 className='relative px-4 text-3xl'>Recent Post : <span className='absolute left-0 bg-green-800 w-1.5 h-full'></span></h1>
            <div className=' p-4 grid grid-cols-2 '>
                <div className='p-4 relative h-full w-full' >
                    <img className=' h-96 w-full object-cover' src="https://images.unsplash.com/photo-1711605536037-eb9c2b42235c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    <div className=' p-4 bg-white w-full absolute left-0 bottom-0 '>
                        <h1 className=' text-2xl'>What is Collab? How does it works?</h1>
                        <div className='flex items-center justify-between'>
                            <div className='py-4 flex items-center space-x-2 text-lg text-slate-600'>
                                <button>General</button>
                                <p className='flex items-center'><LuClock3 /> 2hr ago</p>
                            </div>
                            <button className='px-4 py-2 rounded-full bg-green-700 text-white hover:bg-green-800 transition-all duration-400'>Read more</button>
                        </div>
                    </div>

                </div>
                <div className='  grid-rows-2 gap-4'>
                    <div className='p-4 grid grid-cols-2 gap-4'>
                        <img className=' w-full object-cover rounded' src="https://plus.unsplash.com/premium_photo-1710267557925-4c05618b8caf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div>
                            <h1 className='text-2xl'>What is Collab and How does it works?</h1>
                            <div className='py-4 flex items-center space-x-2 text-lg text-slate-600'>
                                <button>General</button>
                                <p className='flex items-center'><LuClock3 /> 12hr ago</p>
                            </div>
                            <button className='px-4 py-2 rounded-full bg-green-700 text-white hover:bg-green-800 transition-all duration-400'>Read more</button>
                        </div>
                    </div>
                    <div className='p-4 grid grid-cols-2 gap-4 '>
                        <img className=' w-full object-cover rounded' src="https://www.verywellmind.com/thmb/_zGdvlOC4iczmGG-RTntMx3i9vs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/color-psychology-green-2795817_FINAL-9525be717fdc4872ac8f2b7a2ef4134c.png" alt="" />
                        <div>
                            <h1 className='text-2xl'>All about Collab fees and chrges on the Platform</h1>
                            <div className='py-4 flex items-center space-x-2 text-lg text-slate-600'>
                                <button>General</button>
                                <p className='flex items-center'><LuClock3 /> 1d ago</p>
                            </div>
                            <button className='px-4 py-2 rounded-full bg-green-700 text-white hover:bg-green-800 transition-all duration-400'>Read more</button>
                        </div>
                    </div>
                    {/* <div className='p-4'>
                        <div className='flex items-center space-x-4 text-lg'>
                            <h1>02.</h1>
                            <img className='w-52' src="https://www.verywellmind.com/thmb/_zGdvlOC4iczmGG-RTntMx3i9vs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/color-psychology-green-2795817_FINAL-9525be717fdc4872ac8f2b7a2ef4134c.png" alt="" />
                            <div className='grid grid-rows-2 '>
                                <p className='flex items-center'><LuClock3 /> 2hr ago</p>
                                <h1 className='text-3xl'>All about Collab fees and chrges on the platform</h1>
                            </div>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default BlogGrid