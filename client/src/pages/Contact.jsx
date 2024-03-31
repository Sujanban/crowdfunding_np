import React from 'react'
import contactimg from '../assets/images/contact3d.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { MdMap,MdCall  } from "react-icons/md";
import { IoIosMailUnread } from "react-icons/io";



const Contact = () => {
    return (
        <>
            <Navbar />
            <div className='px-4 py-20 mx-auto max-w-7xl '>
                <h1 className='p-4 text-3xl text-center'>Need help? Get in touch</h1>
                <p className='p-4 text-slate-600 text-center'>We’re here to listen,advice and help you sucessfully realize your financial dreams</p>


                <div className='p-4 grid grid-cols-3 gap-4'>
                    <div className='p-4 flex space-x-4 items-center rounded  shadow'>
                        <MdCall size={60} color='green'/>
                        <div>
                            <h1 className='text-xl p-2'>Ring us</h1>
                            <a className='p-2' href="tel:9832416284">(+977) 982 345 2436</a>
                        </div>
                    </div>
                    <div className='p-4 flex space-x-4 items-center rounded  shadow'>
                        <MdMap size={60} color='green'/>
                        <div>
                            <h1 className='text-xl p-2'>Visit us</h1>
                            <a className='p-2' >Sundahara 5, Kathmandu Nepal</a>
                        </div>
                    </div>
                    <div className='p-4 flex space-x-4 items-center rounded  shadow'>
                        <IoIosMailUnread size={60} color='green'/>
                        <div>
                            <h1 className='text-xl p-2'>Send us an Email</h1>
                            <a className='p-2' href="mailto:help@collab.com">help@collab.com</a>
                        </div>
                    </div>

                </div>


                <div className='p-4 grid grid-cols-3 gap-4'>
                    <img className='w-full my-auto' src={contactimg} alt="" />
                    <div className='col-span-2'>
                        {/* <form action="">
                            <div className='p-4'>
                                <input type="text" placeholder='Name' className='p-4 outline-none w-full border-2  focus:border-2 focus:border-yellow-500  rounded ' />
                                <input type="email" placeholder='Email' className='p-4 outline-none w-full border-2  focus:border-2 focus:border-yellow-500  rounded mt-4' />
                                <textarea type="text" placeholder='Message' className='p-4 outline-none w-full border-2  focus:border-2 focus:border-yellow-500  rounded mt-4' />
                                <button className=' px-6 py-2 rounded bg-green-800 text-white mt-4'>Send</button>
                            </div>
                        </form> */}

                        <form className=''>
                            <div className=' w-full lg:max-w-2xl px-4 md:py-4 block gap-2'>
                                <div className='py-2 grid'>
                                    <h1 className='py-2 font-semibold'>Full Name:</h1>
                                    <input
                                        className='text-md font-light border border-stone-600 p-4 rounded-md'
                                        type="text"
                                        placeholder='Your full name' />
                                </div>
                                <div className='py-2 grid relative'>
                                    <h1 className='py-2 font-semibold'>Email:</h1>
                                    <input
                                        className='text-md font-light border border-stone-600 p-4 rounded-md'
                                        type='text'
                                        placeholder='example@collab.com' />
                                </div>
                                <div className='py-2 grid relative'>
                                    <h1 className='py-2 font-semibold'>Phone Number:</h1>
                                    <input
                                        className='text-md font-light border border-stone-600 p-4 rounded-md'
                                        type='number'
                                        placeholder='+9779842317439' />
                                </div>
                                <div className='py-2 grid relative'>
                                    <h1 className='py-2 font-semibold'>Message:</h1>
                                    <textarea
                                        rows={5}
                                        className='text-md font-light border border-stone-600 p-4 rounded-md'
                                        type='text'
                                        placeholder='Type your message here..' ></textarea>
                                </div>
                                <div className='py-2 grid relative'>
                                    <input
                                        type='submit'
                                        className='bg-green-800 cursor-pointer text-white text-md font-light border-stone-600 p-4 rounded-md' />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact