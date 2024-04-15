import React from 'react'
import { CiEdit } from "react-icons/ci";

const CampaignUpdates = () => {
    return (
        <div className='px-8 py-20 flex justify-center items-center bg-green-600 text-center'>
            <div className='max-w-xl mx-auto '>
                <div className='flex justify-center'>
                    <img className='' src="https://img.icons8.com/bubbles/150/000000/trust.png" alt="trust" />
                </div>
                <h1 className='p-2 text-xl font-semibold'>Started work with the collected amount?</h1>
                <p className=''>Let the supporters and community know about the progress of your campaign and how they can contribute</p>
                <button className='m-4 mx-auto ring-1 ring-yellow-7 transition-all duration-300 hover:bg-green-100 bg-white bg-yelow-600 px-4 py-2 rounded text-black flex items-center'>Post your updates<CiEdit size={15} />
                </button>
            </div>
        </div>
    )
}

export default CampaignUpdates