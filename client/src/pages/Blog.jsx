import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import help from '../assets/help.jpg'
import { LuClock3 } from "react-icons/lu";
import BlogGrid from '../components/BlogGrid';
import { Link } from 'react-router-dom';

import { GoPeople } from "react-icons/go";

const Blog = () => {
    const story = [
        {
            "id": 1,
            "title": "Revolutionizing Education with Tech: The Story of ABC Learning App",
            "author": "John Smith",
            "date": "2023-05-15",
            "image": "http://localhost:5173/src/assets/help.jpg",
            "summary": "ABC Learning App, a crowdfunding project aimed at revolutionizing education through interactive mobile learning, exceeded its funding goal and garnered widespread support.",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis, purus quis lobortis sollicitudin, eros felis lacinia nisl, non tincidunt purus nisl non odio. Sed malesuada libero ac turpis vulputate mollis. Mauris accumsan, libero in euismod suscipit, turpis purus sollicitudin mauris, eu sollicitudin magna lorem et nulla. Morbi vitae ante nunc. Vivamus quis arcu quis lorem gravida laoreet sit amet at sem. Donec et nisi quis nunc tincidunt blandit. Donec lobortis justo elit, at ullamcorper eros pharetra non. Integer mattis metus eget ante scelerisque, nec rhoncus urna scelerisque. Integer nec bibendum dui, nec tristique eros. Duis at diam et libero varius volutpat."
        },
        {
            "id": 2,
            "title": "Empowering Artisans: The Success Story of Handcrafted Dreams",
            "author": "Emily Johnson",
            "date": "2023-08-20",
            "image": "https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "summary": "Handcrafted Dreams, a crowdfunding initiative supporting local artisans, exceeded expectations by connecting them directly with a global audience passionate about handmade products.",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis, purus quis lobortis sollicitudin, eros felis lacinia nisl, non tincidunt purus nisl non odio. Sed malesuada libero ac turpis vulputate mollis. Mauris accumsan, libero in euismod suscipit, turpis purus sollicitudin mauris, eu sollicitudin magna lorem et nulla. Morbi vitae ante nunc. Vivamus quis arcu quis lorem gravida laoreet sit amet at sem. Donec et nisi quis nunc tincidunt blandit. Donec lobortis justo elit, at ullamcorper eros pharetra non. Integer mattis metus eget ante scelerisque, nec rhoncus urna scelerisque. Integer nec bibendum dui, nec tristique eros. Duis at diam et libero varius volutpat."
        },
        {
            "id": 3,
            "title": "Breaking Barriers: The Journey of Accessible Tech Solutions",
            "author": "Sarah Johnson",
            "date": "2023-10-10",
            "image": "https://images.unsplash.com/photo-1581995763167-1979f42aa95c?q=80&w=1860&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "summary": "Accessible Tech Solutions, a crowdfunding project focusing on creating inclusive technology, surpassed its funding target and made significant strides towards accessibility in the tech industry.",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis, purus quis lobortis sollicitudin, eros felis lacinia nisl, non tincidunt purus nisl non odio. Sed malesuada libero ac turpis vulputate mollis. Mauris accumsan, libero in euismod suscipit, turpis purus sollicitudin mauris, eu sollicitudin magna lorem et nulla. Morbi vitae ante nunc. Vivamus quis arcu quis lorem gravida laoreet sit amet at sem. Donec et nisi quis nunc tincidunt blandit. Donec lobortis justo elit, at ullamcorper eros pharetra non. Integer mattis metus eget ante scelerisque, nec rhoncus urna scelerisque. Integer nec bibendum dui, nec tristique eros. Duis at diam et libero varius volutpat."
        },
        {
            "id": 4,
            "title": "Saving the Environment, One Project at a Time",
            "author": "Michael Davis",
            "date": "2024-01-05",
            "image": "https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "summary": "Green Initiatives, a crowdfunding campaign dedicated to environmental conservation projects, achieved remarkable success in funding initiatives aimed at protecting our planet.",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis, purus quis lobortis sollicitudin, eros felis lacinia nisl, non tincidunt purus nisl non odio. Sed malesuada libero ac turpis vulputate mollis. Mauris accumsan, libero in euismod suscipit, turpis purus sollicitudin mauris, eu sollicitudin magna lorem et nulla. Morbi vitae ante nunc. Vivamus quis arcu quis lorem gravida laoreet sit amet at sem. Donec et nisi quis nunc tincidunt blandit. Donec lobortis justo elit, at ullamcorper eros pharetra non. Integer mattis metus eget ante scelerisque, nec rhoncus urna scelerisque. Integer nec bibendum dui, nec tristique eros. Duis at diam et libero varius volutpat."
        },
        {
            "id": 5,
            "title": "Empowering Women Entrepreneurs: A Crowdfunding Success Story",
            "author": "Sophia Adams",
            "date": "2024-03-20",
            "image": "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "summary": "EmpowerHer, a crowdfunding initiative focused on supporting women-led startups, witnessed incredible success by providing funding and resources to aspiring female entrepreneurs.",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis, purus quis lobortis sollicitudin, eros felis lacinia nisl, non tincidunt purus nisl non odio. Sed malesuada libero ac turpis vulputate mollis. Mauris accumsan, libero in euismod suscipit, turpis purus sollicitudin mauris, eu sollicitudin magna lorem et nulla. Morbi vitae ante nunc. Vivamus quis arcu quis lorem gravida laoreet sit amet at sem. Donec et nisi quis nunc tincidunt blandit. Donec lobortis justo elit, at ullamcorper eros pharetra non. Integer mattis metus eget ante scelerisque, nec rhoncus urna scelerisque. Integer nec bibendum dui, nec tristique eros. Duis at diam et libero varius volutpat."
        }

    ]
    return (
        <>
            <Navbar />
            <BlogGrid />
            <div className='px-4 py-20 max-w-7xl mx-auto '>
                <h1 className='relative px-4 text-3xl'>Success Stories : <span className='absolute left-0 bg-green-800 w-1.5 h-full'></span></h1>
                <div className='p-4 grid grid-cols-4 gap-4'>
                    <div className='col-span-3'>
                        {
                            story && story.map((item) =>
                                <div className='p-2 relative grid grid-cols-2 gap-4'>
                                    <img className='h-64 w-full object-cover' src={item.image} alt="" />
                                    <div className=' bg-white w-full '>
                                        <h1 className='text-xl font-semibold'>{item.title}</h1>
                                        {/* <div className='absolute left-4 bottom-4 px-2 py-1 rounded-full bg-yellow-500  flex items-center space-x-2 text-lg text-slate-600'>
                                            <p className='flex items-center'><LuClock3 size={15} color='black' /> <span className='pl-2 text-sm text-black'>{item.date}</span></p>
                                        </div> */}
                                        <div className='flex items-center space-x-3'>
                                            <GoPeople />
                                            <p className='text-slate-600'>@{item.author}</p>
                                            <li className='list-disc text-slate-600'>{item.date}</li>
                                        </div>
                                        <p className='py-2 text-slate-600'>{item.summary}</p>
                                        <div className='py-2 flex items-center justify-between space-x-1'>
                                            <Link className='px-4 py-2 text-sm rounded-full bg-green-700 text-white hover:bg-green-800 transition-all duration-400'>Read more</Link>

                                        </div>
                                    </div>
                                </div>
                            )
                        }
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