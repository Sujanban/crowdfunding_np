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
    const [openTab, setOpenTab] = useState(1);
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
        window.scrollTo(0, 0);
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
            <div className='px-4 py-16 max-w-7xl mx-auto '>
                <div className='md:grid grid-cols-6 gap-4'>
                    <div className='col-span-4'>
                        <img className='w-full h-96 object-cover rounded' src={campaignPost?.thumbnail?.url} alt="" />
                        <h1 className='px-2 py-4 text-xl'>{campaignPost?.campaignTitle}</h1>
                        <div className='py--2 flex items-center space-x-2'>
                            <div className='bg-orange-400 rounded-full p-2'>
                                <GoPeople size={25} className='' color='white' />
                            </div>
                            <div>
                                <h1 className=' flex items-center'> {campaignPost?.campaignOwner?.firstName} {campaignPost?.campaignOwner?.lastName}</h1>
                            </div>
                        </div>


                        <div className='py-2 font-bold flex items-center space-x-2'>
                            <button onClick={() => setOpenTab(1)} className={`p-2 transition-all duration-300 hover:border-b-2 hover:border-emerald-600 ${openTab === 1 ? 'border-b-2 border-emerald-600' : ''}`}>Overview</button>
                            <button onClick={() => setOpenTab(2)} className={`relative p-2 transition-all duration-300 hover:border-b-2 hover:border-emerald-600 ${openTab === 2 ? 'border-b-2 border-emerald-600' : ''}`}>Donations

                            {
                                donations.length > 0 && <p className='absolute font-thin top-0 right-0 h-3.5 w-3.5 flex items-center justify-center text-[8px] bg-emerald-600 rounded-full text-white'>{donations.length}</p>
                            }
                            
                            </button>
                            <button onClick={() => setOpenTab(3)} className={`p-2 transition-all duration-300 hover:border-b-2 hover:border-emerald-600 ${openTab === 3 ? 'border-b-2 border-emerald-600' : ''}`}>Updates</button>
                        </div>

                        {
                            openTab === 1 &&
                            <div className='py-2'>
                                <h1 className='py-1 font-bold'>Details:</h1>
                                <p>{campaignPost?.campaignDescription}</p>
                            </div>
                        }

                        {
                            openTab === 2 &&
                            <div>
                                <h1 className='py-2 font-bold'>Supporters:</h1>
                                <div>
                                    <DonationList donations={donations} />
                                </div>
                            </div>
                        }

                        {
                            openTab === 3 &&
                            <Story id={id} />
                        }
                    </div>



                    {/* right side */}
                    <div className='my-8 md:m-0 p-4 pt-0 col-span-2  rounded-xl shadow'>
                        <h1 className='pb-2 text-3xl text-orange-600'>${donationRaised}<sub className='text-xs'>Raised</sub></h1>
                        <div className="my-4 w-full bg-gray-200 rounded-full h-1.5">
                            <div className={`bg-emerald-600 h-1.5 rounded-full`}  style={{ width: `${calculateGoalPercent()}%` }}></div>
                        </div>
                        <div className=' grid grid-cols-2 gap-2'>
                            <div className=' py-1 rounded'>
                                <h1 className='text-lg '>${campaignPost?.goalAmount}</h1>
                                <h1 className='text-gray-500 text-sm'>Goal</h1>
                            </div>
                            <div className=' py-1 rounded'>
                                <h1 className='text-lg'>{donations.length} </h1>
                                <h1 className='text-gray-500 text-sm'>Contributers</h1>
                            </div>
                            <div className=' py-1 rounded'>
                                <h1 className='text-lg'>$20</h1>
                                <h1 className='text-gray-500 text-sm'>Min. Contribution</h1>
                            </div>
                            <div className=' py-1 rounded'>
                                <h1 className='text-lg'>{formatDate(campaignPost?.createdAt)}</h1>
                                <h1 className='text-gray-500 text-sm flex items-center'><LuClock3 className='mr-2 text-orange-600' size={15} /> Created at</h1>
                            </div>
                        </div>
                        <form onSubmit={handleDonation} className='py-4'>
                            <label className='font-bold'>Support with a Donation </label>
                            <input type="number"
                                value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='50$' className='shadow outline-none my-4 rounded-xl w-full p-3 border focus:border-2 focus:border-stone-500' />
                            <input type="submit" value='Donate Now' className='rounded-xl bg-emerald-600 cursor-pointer transition-all duration-300 hover:bg-emerald-700 text-white w-full p-3 ' />
                        </form>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Campaign