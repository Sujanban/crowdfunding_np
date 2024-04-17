import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CtaBanner from '../components/CtaBanner'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import { FaHeart } from "react-icons/fa";
import { GiLifeSupport } from "react-icons/gi";
import { LuClock3 } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { IoShareSocialSharp, IoLogoInstagram, IoLogoFacebook } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { GiTrophyCup } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleCampaign } from '../app/feature/campaignSlice'
import Story from '../components/Story'


const Campaign = () => {
    const { id } = useParams();
    const [toggleStatus, setToggleStatus] = useState(true);
    const dispatch = useDispatch();
    const campaignPost = useSelector((state) => state.campaign.data)
    const {isLoading,errorMessage} = useSelector((state) => state.campaign)

    useEffect(() => {
        dispatch(fetchSingleCampaign(id));
    }, [])

    return (
        <div>
            <Navbar />
            {
                isLoading ? <div className='w-full flex justify-center items-center h-screen text-2xl'>
                    <Loading />
                </div> : ''
            }
            <div className='px-4 py-20 max-w-7xl mx-auto '>
                <div className='  pb-8'>
                    <Link className='px-2 font-semibold'>Home</Link>/<Link className='px-2 text-slate-600'>campaign</Link>/<Link className='px-2 text-slate-600'>{id}</Link>
                </div>
                <h1 className='p-4 max-w-5xl text-3xl font-semibold'>{campaignPost?.campaignTitle}</h1>
                <div className='grid grid-cols-3'>
                    <div className='p-4 col-span-2'>
                        <img className='rounded cursor-pointer h-[450px] w-full object-cover' src={campaignPost?.thumbnail} alt="" />
                        <div className='p-4 flex items-center justify-between'>
                            <div>
                                <h1 className='py-2 font-black text-xl'><GoPeople size={30} /> {campaignPost?.campaignOwner}</h1>
                                <p className='flex items-center'><LuClock3 size={15} color='black' /> <span className='p-2 text-sm text-slate-600'>2hr ago</span></p>
                            </div>
                            <div className=' flex items-center'>
                                <h1 className='p-2'>Share</h1>
                                <div className='py-2 flex items-center'>
                                    <Link className='p-2 rounded transition-all duration-400 hover:bg-yellow-200'><IoLogoInstagram size={25} /></Link>
                                    <Link className='p-2 rounded transition-all duration-400 hover:bg-yellow-200'><IoLogoFacebook size={25} /></Link>
                                    <Link className='p-2 rounded transition-all duration-400 hover:bg-yellow-200'><BsTwitterX size={25} /></Link>
                                    <Link className='p-2 rounded transition-all duration-400 hover:bg-yellow-200'><IoShareSocialSharp size={25} /></Link>
                                </div>
                            </div>
                        </div>



                        <hr />
                        <div>
                            <h1 className='p-4 text-xl font-black'>Storyline</h1>
                            <p className='p-4 text-slate-600'>{campaignPost?.campaignDescription}</p>
                        </div>

                        <hr />
                        <h1 className='p-4 text-xl'>Organizer</h1>
                        <div className='p-4 flex items-center space-x-4'>
                            <GoPeople size={30} />
                            <div>
                                <h1>{campaignPost?.campaignOwner}</h1>
                                <p>Software Engineer Texes,USA</p>
                                <p className='text-slate-600'>Organizer</p>
                            </div>
                        </div>
                        <hr />


















                        <Story id={id} />




















                        <div>
                            <h1 className='p-4 text-xl'>Words from supporters</h1>
                            <div>
                                <div className='m-1 p-4  rounded-xl flex space-x-8'>
                                    <div className='  '>
                                        <GiLifeSupport size={30} className='text-yellow-500' />
                                    </div>
                                    <div>
                                        <h1 className='text-black font-black'>Aman Johnson</h1>
                                        <p className='text-slate-600'>$50</p>
                                        <p>Sorry for your loss. hoping this small donation will help you.</p>
                                    </div>
                                </div>

                                <div className='m-1 p-4  rounded-xl flex space-x-8'>
                                    <div className='  '>
                                        <GiLifeSupport size={30} className='text-yellow-500' />
                                    </div>
                                    <div>
                                        <h1 className='text-black font-black'>Ramesh Das</h1>
                                        <p className='text-slate-600'>$500</p>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nesciunt. Sorry for your loss. hoping this small donation will help you.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='relative '>
                        <div className='max-w-[425px] top-0 sticky scroll-auto p-4'>

                            <h1 className='text-2xl py-4'><b>$78,253</b> <span className=''>raised of <b className='text-green-600'>${campaignPost?.goalAmount}</b> goal</span></h1>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-yellow-600 h-2.5 rounded-full w-2/3"></div>
                            </div>
                            <p className='py-4 flex items-center'><FaHeart color='red' /> <span className='px-2 text-sm'>5,253 Supporters</span></p>
                            <form action="" className='py-2'>
                                <label>Donation Amount : </label>
                                <input type="number" placeholder='50$' className='outline-none my-4 rounded w-full p-3 border border-green-200 focus:border-green-500' />
                                <input type="submit" value='Donate Now' className='rounded-full bg-green-600 text-white w-full p-3 ' />
                            </form>
                            <hr />
                            <div>
                                <div className='grid grid-cols-2 gap-4'>
                                    <button onClick={() => setToggleStatus(false)} className={`${toggleStatus ? 'w-full p-2 ' : 'w-full p-2 underline underline-offset-2'}`}>Recent Donations</button>
                                    <button onClick={() => setToggleStatus(true)} className={`${toggleStatus ? 'w-full p-2  underline underline-offset-2' : 'w-full p-2'}`}>Top Donations</button>

                                </div>

                                {/* Recent Donators */}
                                {
                                    !toggleStatus &&
                                    <div>
                                        <div className='m-1 p-4 shadow  rounded-xl flex items-center space-x-8'>
                                            <GiLifeSupport size={30} className='text-yellow-500' />
                                            <div>
                                                <h1 className='text-slate-600'>Sameul Johnson</h1>
                                                <p className='font-semibold text-green-700'>$100</p>
                                            </div>
                                        </div>
                                        <div className='m-1 p-4 shadow  rounded-xl flex items-center space-x-8'>
                                            <GiLifeSupport size={30} className='text-yellow-500' />
                                            <div>
                                                <h1 className='text-slate-600'>Julian Rojer</h1>
                                                <p className='font-semibold text-green-700'>$1000</p>
                                            </div>
                                        </div>
                                        <div className='m-1 p-4 shadow  rounded-xl flex items-center space-x-8'>
                                            <GiLifeSupport size={30} className='text-yellow-500' />
                                            <div>
                                                <h1 className='text-slate-600'>Aman Johnson</h1>
                                                <p className='font-semibold text-green-700'>$50</p>
                                            </div>
                                        </div>
                                    </div>
                                }


                                {/* top donators */}


                                {
                                    toggleStatus &&
                                    <div>
                                        <div className='m-1 p-4 shadow  rounded-xl flex items-center space-x-8 text-yellow-500'>
                                            <GiTrophyCup size={40} color='' />
                                            <div>
                                                <h1 className='text-slate-600'>Sameul Johnson</h1>
                                                <p className='font-semibold text-green-700'>$1000</p>
                                            </div>
                                        </div>
                                        <div className='m-1 p-4 shadow  rounded-xl flex items-center space-x-8 text-yellow-500'>
                                            <GiTrophyCup size={40} color='' />
                                            <div>
                                                <h1 className='text-slate-600'>Alina Adam</h1>
                                                <p className='font-semibold text-green-700'>$950</p>
                                            </div>
                                        </div>
                                    </div>
                                }



                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <CtaBanner />
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Campaign