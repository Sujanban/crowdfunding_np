import React from 'react'
import { CiEdit } from "react-icons/ci";
import { Link, useParams } from 'react-router-dom'

const CampaignUpdates = () => {
    const { id } = useParams()
    return (
        <div className='grid gap-4'>
            <div className='w-full max-w-7xl mx-auto '>
                <div className='px-8 py-20  flex justify-center items-center bg-green-600 text-center'>
                    <div className='max-w-xl mx-auto '>
                        <div className='flex justify-center'>
                            <img className='' src="https://img.icons8.com/bubbles/150/000000/trust.png" alt="trust" />
                        </div>
                        <h1 className='p-2 text-xl font-semibold'>Started work with the collected amount?</h1>
                        <p className=''>Let the supporters and community know about the progress of your campaign so build trust.</p>
                        <div className='flex items-center justify-center'>
                            <Link to={"/campaignStoryUpdates/" + id} className='m-4  ring-1 transition-all duration-300 hover:bg-green-100 bg-white bg-yelow-600 px-4 py-2 rounded text-black flex justify-center items-center'>Post your updates<CiEdit size={15} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full max-w-7xl mx-auto'>
                <div className='px-8 py-20 flex justify-center items-center bg-yellow-600 text-center'>

                    <div className='max-w-xl mx-auto '>
                        <div className='flex justify-center'>
                            {/* <img className='' src="https://img.icons8.com/bubbles/150/000000/trust.png" alt="trust" /> */}
                            <img src="https://img.icons8.com/bubbles/150/edit.png" alt="edit" />
                        </div>
                        <h1 className='p-2 text-xl font-semibold'>Need to update campaign details?</h1>
                        <p className=''>Edit your campaign details following a few simple steps.</p>
                        <div className='flex items-center justify-center'>
                            <Link to={"/editcampaign/" + id} 
                            className='m-4  ring-1 transition-all duration-300 hover:bg-green-100 bg-white bg-yelow-600 px-4 py-2 rounded text-black flex justify-center items-center'>Edit Campaign<CiEdit size={15} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full max-w-7xl mx-auto '>
                <div className='px-8 py-20  flex justify-center items-center bg-green-600 text-center'>
                    <div className='max-w-xl mx-auto '>
                        <div className='flex justify-center'>
                            <img className='' src="https://img.icons8.com/bubbles/150/000000/trust.png" alt="trust" />
                        </div>
                        <h1 className='p-2 text-xl font-semibold'>View Collected fund</h1>
                        <p className=''>View the donation you received from the community</p>
                        <div className='flex items-center justify-center'>
                            <Link to={"/viewDonations/" + id} className='m-4  ring-1 transition-all duration-300 hover:bg-green-100 bg-white bg-yelow-600 px-4 py-2 rounded text-black flex justify-center items-center'>View
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default CampaignUpdates