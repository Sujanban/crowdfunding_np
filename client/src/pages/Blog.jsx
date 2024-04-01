import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import help from '../assets/help.jpg'
import { LuClock3 } from "react-icons/lu";
import BlogGrid from '../components/BlogGrid';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <>
            <Navbar />
            <BlogGrid />
            <div className='px-4 py-20 max-w-7xl mx-auto '>
                <h1 className='relative px-4 text-3xl'>Success Stories : <span className='absolute left-0 bg-green-800 w-1.5 h-full'></span></h1>
                <div className='p-4 grid grid-cols-4 gap-4'>
                    <div className='col-span-3'>
                        <div className='p-2 relative flex items-center '>
                            <img className=' h-52 w-full object-cover' src={help} alt="" />
                            <div className=' p-4 bg-white w-full '>
                                <h1 className='py-2 text-xl font-semibold'>What is Collab?</h1>
                                <div className='absolute left-4 bottom-4 px-2 py-1 rounded-full bg-yellow-500 flex items-center space-x-2 text-lg text-slate-600'>
                                    <p className='flex items-center'><LuClock3 size={15} color='black' /> <span className='pl-2 text-sm text-black'>2hr ago</span></p>
                                </div>
                                <p className='py-2 text-slate-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt laboriosam iusto voluptatem qui perspiciatis sit. Corrupti explicabo dolorem praesentium optio!</p>
                                <div className='py-2 flex items-center justify-between'>
                                    <Link className='px-4 py-2 text-sm rounded-full bg-green-700 text-white hover:bg-green-800 transition-all duration-400'>Read more</Link>
                                    <div className='flex items-center space-x-1'>
                                        <img className='h-8 w-8 object-cover rounded-full' src={help} alt="" />
                                        <p className='font-semibold'>@sam sulek</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-2 relative flex items-center '>
                            <img className=' h-52 w-full object-cover' src='https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
                            <div className=' p-4 bg-white w-full '>
                                <h1 className='py-2 text-xl font-semibold'>What is Collab?</h1>
                                <div className='absolute left-4 bottom-4 px-2 py-1 rounded-full bg-yellow-500  flex items-center space-x-2 text-lg text-slate-600'>
                                    <p className='flex items-center'><LuClock3 size={15} color='black' /> <span className='pl-2 text-sm text-black'>2hr ago</span></p>
                                </div>
                                <p className='py-2 text-slate-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt laboriosam iusto voluptatem qui perspiciatis sit. Corrupti explicabo dolorem praesentium optio!</p>
                                <div className='py-2 flex items-center justify-between space-x-1'>
                                    <Link className='px-4 py-2 text-sm rounded-full bg-green-700 text-white hover:bg-green-800 transition-all duration-400'>Read more</Link>
                                    <div className='flex items-center space-x-1'>
                                        <img className='h-8 w-8 object-cover rounded-full' src={help} alt="" />
                                        <p className='font-semibold'>@sam sulek</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-2 relative flex items-center '>
                            <img className=' h-52 w-full object-cover' src='https://images.unsplash.com/photo-1581995763167-1979f42aa95c?q=80&w=1860&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
                            <div className=' p-4 bg-white w-full '>
                                <h1 className='py-2 text-xl font-semibold'>What is Collab?</h1>
                                <div className='absolute left-4 bottom-4 px-2 py-1 rounded-full bg-yellow-500  flex items-center space-x-2 text-lg text-slate-600'>
                                    <p className='flex items-center'><LuClock3 size={15} color='black' /> <span className='pl-2 text-sm text-black'>2hr ago</span></p>
                                </div>
                                <p className='py-2 text-slate-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt laboriosam iusto voluptatem qui perspiciatis sit. Corrupti explicabo dolorem praesentium optio!</p>
                                <div className='py-2 flex items-center justify-between space-x-1'>
                                    <Link className='px-4 py-2 text-sm rounded-full bg-green-700 text-white hover:bg-green-800 transition-all duration-400'>Read more</Link>
                                    <div className='flex items-center space-x-1'>
                                        <img className='h-8 w-8 object-cover rounded-full' src={help} alt="" />
                                        <p className='font-semibold'>@sam sulek</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-2 relative flex items-center '>
                            <img className=' h-52 w-full object-cover' src='https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="" />
                            <div className=' p-4 bg-white w-full '>
                                <h1 className='py-2 text-xl font-semibold'>What is Collab?</h1>
                                <div className='absolute left-4 bottom-4 px-2 py-1 rounded-full bg-yellow-500  flex items-center space-x-2 text-lg text-slate-600'>
                                    <p className='flex items-center'><LuClock3 size={15} color='black' /> <span className='pl-2 text-sm text-black'>2hr ago</span></p>
                                </div>
                                <p className='py-2 text-slate-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt laboriosam iusto voluptatem qui perspiciatis sit. Corrupti explicabo dolorem praesentium optio!</p>
                                <div className='py-2 flex items-center justify-between space-x-1'>
                                    <Link className='px-4 py-2 text-sm rounded-full bg-green-700 text-white hover:bg-green-800 transition-all duration-400'>Read more</Link>
                                    <div className='flex items-center space-x-1'>
                                        <img className='h-8 w-8 object-cover rounded-full' src={help} alt="" />
                                        <p className='font-semibold'>@sam sulek</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='p-2 relative flex items-center '>
                            <img className=' h-52 w-full object-cover' src='https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            <div className=' p-4 bg-white w-full '>
                                <h1 className='py-2 text-xl font-semibold'>What is Collab?</h1>
                                <div className='absolute left-4 bottom-4 px-2 py-1 rounded-full bg-yellow-500  flex items-center space-x-2 text-lg text-slate-600'>
                                    <p className='flex items-center'><LuClock3 size={15} color='black' /> <span className='pl-2 text-sm text-black'>2hr ago</span></p>
                                </div>
                                <p className='py-2 text-slate-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt laboriosam iusto voluptatem qui perspiciatis sit. Corrupti explicabo dolorem praesentium optio!</p>
                                <div className='py-2 flex items-center justify-between space-x-1'>
                                    <Link className='px-4 py-2 text-sm rounded-full bg-green-700 text-white hover:bg-green-800 transition-all duration-400'>Read more</Link>
                                    <div className='flex items-center space-x-1'>
                                        <img className='h-8 w-8 object-cover rounded-full' src={help} alt="" />
                                        <p className='font-semibold'>@sam sulek</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='p-4 shadow'>
                        <h1 className='text-xl font-semibold'>Recently Posted</h1>
                        <div className='p-2 relative'>
                            <img className='p-2 h-40 w-full object-cover rounded' src='https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                            <div className='p-2 bg-white w-full '>
                                <h1 className=' text-lg font-semibold'>What is Collab?</h1>
                                <p className='py-1 text-slate-600 text-sm'>Lorem, ipsum dolor sit dolorem praesentium optio!</p>

                            </div>
                        </div>
                        <div className='p-2 relative'>
                            <img className='p-2 h-40 w-full object-cover rounded' src='https://images.unsplash.com/photo-1494386346843-e12284507169?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                            <div className='p-2 bg-white w-full '>
                                <h1 className=' text-lg font-semibold'>What is Collab?</h1>
                                <p className='py-1 text-slate-600 text-sm'>Lorem, ipsum dolor sit dolorem praesentium optio!</p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='p-4 flex items-center justify-center space-x-2'>
                    <button className='h-8 w-8 flex items-center justify-center p-2 outline outline-yellow-500 rounded'>1</button>
                    <button className='h-8 w-8 flex items-center justify-center p-2 ooutline outline-yellow-100 rounded'>2</button>

                    <button className='h-8 w-8 flex items-center justify-center p-2 ooutline outline-yellow-100 rounded'>3</button>
                    <button className='h-8 w-8 flex items-center justify-center p-2 ooutline outline-yellow-100 rounded'>.</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blog