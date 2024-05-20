import React from 'react'
import contactimg from '../assets/images/contact3d.png'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { MdMap, MdCall } from "react-icons/md";
import { IoIosMailUnread } from "react-icons/io";



const Contact = () => {
    return (
        <>
            <Navbar />
            <div className='px-4 py-8 md:py-20 mx-auto max-w-7xl '>
                <div className=' flex items-center justify-center space-x-2'>
                    <h1 className='text-xl font-medium mx-auto border-b border-gray-300'>Need help? Get in touch</h1>
                </div>
                <p className='p-2 md:p-4 text-slate-600 text-left md:text-center'>We’re here to listen,advice and help you sucessfully realize your financial dreams</p>


                <div className='md:p-4 md:grid grid-cols-3 gap-4'>
                    <div className='p-4 flex space-x-4 items-center rounded  shadow'>
                        <MdCall className='text-3xl text-emerald-600' />
                        <div>
                            <h1 className='text-md font-medium md:text-xl p-2'>Ring us</h1>
                            <a className='p-2 text-sm ' href="tel:9832416284">(+977) 982 345 2436</a>
                        </div>
                    </div>
                    <div className='p-4 flex space-x-4 items-center rounded  shadow'>
                        <MdMap className='text-3xl text-emerald-600' />
                        <div>
                            <h1 className='text-md font-medium md:text-xl p-2'>Visit us</h1>
                            <a className='p-2 text-sm ' >Sundahara 5, Kathmandu Nepal</a>
                        </div>
                    </div>
                    <div className='p-4 flex space-x-4 items-center rounded  shadow'>
                        <IoIosMailUnread className='text-3xl text-emerald-600' />
                        <div>
                            <h1 className='text-md font-medium md:text-xl p-2'>Send us an Email</h1>
                            <a className='p-2 text-sm ' href="mailto:help@collab.com">help@collab.com</a>
                        </div>
                    </div>

                </div>


                <div className='my-4 md:p-4 md:grid grid-cols-3 gap-4'>
                    <img className='hidden md:grid w-full my-auto' src={contactimg} alt="" />
                    <div className='w-full col-span-2'>
                        {/* <form action="">
                            <div className='p-4'>
                                <input type="text" placeholder='Name' className='p-4 outline-none w-full border-2  focus:border-2 focus:border-yellow-500  rounded ' />
                                <input type="email" placeholder='Email' className='p-4 outline-none w-full border-2  focus:border-2 focus:border-yellow-500  rounded mt-4' />
                                <textarea type="text" placeholder='Message' className='p-4 outline-none w-full border-2  focus:border-2 focus:border-yellow-500  rounded mt-4' />
                                <button className=' px-6 py-2 rounded bg-green-800 text-white mt-4'>Send</button>
                            </div>
                        </form> */}

                        <form className=''>
                            <div className=' w-full  lg:max-w-2xl md:px-4 md:py-4 block gap-2'>
                                <div className='py-2 grid'>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name *</label>
                                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="John Doe" />
                                </div>
                                <div className='py-2 grid relative'>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email *</label>
                                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="hello@example.com" />
                                </div>
                                <div className='py-2 grid relative'>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone *</label>
                                    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="9823 267 927" />
                                </div>
                                <div className='py-2 grid relative'>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message *</label>
                                    <textarea id="message" rows="12" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Start typing..."                                    ></textarea>
                                </div>
                                <div className='py-2 grid relative'>
                                    <input
                                        type='submit'
                                        value={'Send Message'}
                                        className='bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 cursor-pointer text-white text-sm md:text-md font-light border-stone-600 p-4 rounded-md' />
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