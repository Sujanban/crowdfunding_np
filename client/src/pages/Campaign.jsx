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
import axios from 'axios'
import { toast } from 'react-hot-toast'
import DonationList from '../components/DonationList'
import { formatDate } from '../utils/dateFormater'


const Campaign = () => {
    const { id } = useParams();
    const [toggleStatus, setToggleStatus] = useState(true);
    const dispatch = useDispatch();
    const campaignPost = useSelector((state) => state.campaign.data)
    const { isLoading, errorMessage } = useSelector((state) => state.campaign)
    const userId = useSelector((state) => state.user?.data._id);


    // tracking donation
    const [donations, setDonations] = useState([]);

    const fetchDonationByCampaign = async (id) => {
        const res = await axios.get(`/api/donation/fetchDonationByCampaign/${id}`);
        setDonations(res.data)
    }

    const donationRaised = donations.reduce((acc, curr) => acc + curr.amount, 0);

    const calculateGoalPercent = () => {
        return Math.round((donationRaised / campaignPost.goalAmount) * 100);
    }

    // handeling donation
    const [amount, setAmount] = useState();
    const handleDonation = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`/api/donation/createDonation/${id}`, { userId, amount, campaignId: id });
            console.log(res)
            if (res.data.url) {
                window.location.href = res.data.url
            }
            if (res.data.error) {
                toast.error(res.data.error);
            }
        } catch (err) {
            console.log(err)
            console.log('Error fetching API ' + err);
        }
    }

    useEffect(() => {
        dispatch(fetchSingleCampaign(id));
        fetchDonationByCampaign(id)
    }, [])
    console.log(campaignPost)

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
                        <img className='rounded cursor-pointer h-[450px] w-full object-cover' src={campaignPost?.thumbnail?.url} alt="" />
                        <div className='p-4 flex items-center justify-between'>
                            <div>
                                <h1 className='py-2 font-black text-xl'><GoPeople size={30} /> {campaignPost?.campaignOwner?.email}</h1>
                                <p className='flex items-center'>
                                    <LuClock3 size={15} color='black' /> <span className='p-2 text-sm text-slate-600'>{formatDate(campaignPost?.createdAt)}</span></p>
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
                                <h1 className='capitalize'>{campaignPost?.campaignOwner?.email}</h1>
                                <p className='capitalize'>{campaignPost?.campaignOwner?.firstName + ' ' + campaignPost?.campaignOwner?.lastName}</p>
                                <p className='text-slate-600'>Organizer</p>
                            </div>
                        </div>
                        <hr />
                        <Story id={id} />
                        <div>
                            <h1 className='p-4 text-xl'>Words from supporters</h1>
                            <div>
                                <DonationList donations={donations} />
                            </div>
                        </div>
                    </div>





                    <div className='relative '>
                        <div className='max-w-[425px] top-0 sticky scroll-auto p-4'>

                            <h1 className='text-2xl py-4'><b>$ {donationRaised}</b> <span className=''>raised of <b className='text-green-600'>${campaignPost?.goalAmount}</b> goal</span></h1>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                                <div className="bg-yellow-600 h-2.5 rounded-full"  style={{ width: `${calculateGoalPercent()}%` }}></div>
                            </div>
                            <p className='py-4 flex items-center'><FaHeart color='red' /> <span className='px-2 text-sm'>{donations.length} Supporters</span></p>
                            <form onSubmit={handleDonation} className='py-2'>
                                <label>Donation Amount : </label>
                                <input type="number"
                                    value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='50$' className='outline-none my-4 rounded w-full p-3 border border-green-200 focus:border-green-500' />
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