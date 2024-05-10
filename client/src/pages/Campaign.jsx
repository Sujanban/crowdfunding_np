import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import { FaHeart } from "react-icons/fa";
import { GiFlowerPot } from "react-icons/gi";
import { LuClock3 } from "react-icons/lu";
import { GoGoal, GoPeople } from "react-icons/go";
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleCampaign } from '../app/feature/campaignSlice'
import Story from '../components/Story'
import DonationList from '../components/DonationList'
import { formatDate } from '../utils/dateFormater'
import { createDonation, fetchDonationByCampaign } from '../app/feature/donationSlice'
import { getStorys } from '../app/feature/storySlice'


const Campaign = () => {
    const { id } = useParams();
    const [openTab, setOpenTab] = useState(1);
    const dispatch = useDispatch();
    const campaignPost = useSelector((state) => state.campaign.data)
    const donations = useSelector((state) => state.donation.data)
    const { isLoading } = useSelector((state) => state.campaign)
    const userId = useSelector((state) => state.user?.data._id);
    const story = useSelector((state) => state.story.data);

    // calculating donation raised by campaign
    const donationRaised = donations.reduce((acc, curr) => acc + curr.amount, 0);

    const calculateGoalPercent = () => {
        return Math.round((donationRaised / campaignPost.goalAmount) * 100);
    }

    // handeling donation
    const [amount, setAmount] = useState();
    const handleDonation = async (e) => {
        e.preventDefault();
        dispatch(createDonation({ id, userId, amount }));
    }

    useEffect(() => {
        dispatch(fetchSingleCampaign(id));
        dispatch(fetchDonationByCampaign(id));
        dispatch(getStorys(id));
        window.scrollTo(0, 0);
    }, [])

    return (
        <div>
            <Navbar />
            {
                isLoading ? <div className='w-full flex justify-center items-center h-screen text-2xl'>
                    <Loader />
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
                                    donations.length > 0 && <p className='absolute font-thin top-0 right-0 h-3.5 w-3.5 flex items-center justify-center text-[8px] bg-red-500 rounded-full text-white'>{donations.length}</p>
                                }

                            </button>
                            <button onClick={() => setOpenTab(3)} className={`relative p-2 transition-all duration-300 hover:border-b-2 hover:border-emerald-600 ${openTab === 3 ? 'border-b-2 border-emerald-600' : ''}`}>Updates
                                {
                                    story.length > 0 && <p className='absolute font-thin top-0 right-0 h-3.5 w-3.5 flex items-center justify-center text-[8px] bg-red-500 rounded-full text-white'>{story.length}</p>
                                }
                            </button>
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
                            <Story story={story} />
                        }
                    </div>



                    {/* right side */}
                    <div className='my-8 md:m-0 p-4 pt-0 col-span-2  rounded-xl shadow'>
                        <h1 className='pb-2 text-3xl text-emerald-600'>${donationRaised}<sub className='text-xs'>Raised</sub></h1>
                        <div className="my-4 w-full bg-gray-200 rounded-full h-1.5">
                            <div className={`bg-emerald-600 h-1.5 rounded-full`} style={{ width: `${calculateGoalPercent()}%` }}></div>
                        </div>
                        <div className=' grid grid-cols-2 gap-2'>
                            <div className=' py-1 rounded'>
                                <h1 className='text-lg '>${campaignPost?.goalAmount}</h1>
                                <h1 className='text-gray-500 text-sm flex items-center space-x-2'><GoGoal color='green' /><span>Goal</span></h1>
                            </div>
                            <div className=' py-1 rounded'>
                                <h1 className='text-lg'>{donations.length} </h1>
                                <h1 className='flex items-center space-x-2 text-gray-500 text-sm'><FaHeart className='text-red-600' /><span>Contributers</span></h1>
                            </div>
                            <div className=' py-1 rounded'>
                                <h1 className='text-lg'>$20</h1>
                                <h1 className='text-gray-500 text-sm flex items-center space-x-2'><GiFlowerPot className='text-emerald-600' /><span>Min. Contribution</span></h1>
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