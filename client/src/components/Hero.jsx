import React from 'react'
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';


const Hero = () => {
    return (
        <div className='mt-1 w-full'>
            <div className='home max-w-7xl mx-auto relative'>

                {/* hero info */}
                <div className='py-24 grid grid-cols-2'>
                    <div className='pl-8 my-auto'>
                        <h1 className='text-2xl font-medium '>Great future are built with a small charity</h1>
                        <p className='py-3 text-gray-600'>The world's largest social fundraising platform, optimized for your charity in a more easy way</p>
                        <div className=' flex items-center space-x-4'>
                            <Link to='/createCampaign'
                                className='px-4 py-3 text-sm bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 rounded-xl'>Create Campaign</Link>
                            <Link to='/howitworks'
                                className='px-4 py-3 text-sm ring-1 ring-emerald-600 text-emerald-600 hover:bg-emerald-700 hover:text-white transition-all duration-300 rounded-xl'>Learn more</Link>
                        </div>
                    </div>

                    {/* hero image */}
                    <div className=' flex items-center justify-center bg'>
                        <div className='relative grid grid-cols-2 gap-4'>
                            <img className='col-span-2 h-[250px] w-[250px] mx-auto rounded-full object-cover rounded-xxl' src="https://plus.unsplash.com/premium_photo-1677619371152-09e6cfcd4e6d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>

                    </div>
                </div>

                {/* hero stats */}
                <div className=''>
                    <div className='relative rounded-xl overflow-hidden'>
                        <img className=' h-[500px] w-full object-cover rounded-xl' src="https://images.unsplash.com/photo-1505189014261-0148f9aefa85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className=' flex items-center px-24 absolute w-full h-full bottom-0 left-0 bg-gradient-to-t from-black  text-white'>
                            <div className=' my-auto'>
                                <div className=' px-8 pb-14 border-l border-gray-500 relative'>
                                    <div className='h-3 w-3 rounded-full bg-white absolute -left-1.5 ring ring-gray-700 ring-offset-1 ring-offset-transparent'></div>
                                    <p className='text-xs text-white/50'>We funded over</p>
                                    <h1 className=' text-3xl py-1'><CountUp start={100} end={1200} />+ projects</h1>
                                    <p className='text-xs text-white/50'>we helped to fund over 12000 projects for those who need help</p>
                                </div>
                                <div className=' px-8 pb-14 border-l border-gray-500 relative'>
                                    <div className='h-3 w-3 rounded-full bg-white absolute -left-1.5 ring ring-gray-700 ring-offset-1 ring-offset-transparent'></div>
                                    <p className='text-xs text-white/50'>We raised over</p>
                                    <h1 className=' text-3xl py-1'>$<CountUp start={0} end={50000} />+ </h1>
                                    <p className='text-xs text-white/50'>we have sucessfully raised over 50000 dollars in funds</p>
                                </div>
                                <div className=' px-8 relative'>
                                    <div className='h-3 w-3 rounded-full bg-white absolute -left-1.5 ring ring-gray-700 ring-offset-1 ring-offset-transparent'></div>
                                    <p className='text-xs text-white/50'>We have support of</p>
                                    <h1 className=' text-3xl py-1'><CountUp start={0} end={12} />K + backers</h1>
                                    <p className='text-xs text-white/50'>we have huge number of supporters who are willing to help you</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero