import React from 'react'
import { GiLifeSupport } from 'react-icons/gi'
import {formatDate} from '../utils/dateFormater'

const DonationList = ({ donations }) => {
    return (

        <div>
            {donations.map((donation) =>
                <div key={donation._id} className='m-1 flex space-x-8'>
                    <div className='  '>
                        <GiLifeSupport size={25} className='text-emerald-600' />
                    </div>
                    <div>
                        <h1 className='text-black font-black'>{donation.userId.firstName} {donation.userId.lastName}</h1>
                        <p className='text-slate-600'>${donation.amount}</p>
                        <p className='text-xs'>{formatDate(donation.createdAt)}</p>
                    </div>
                </div>
            )
            }
        </div>
    )
}

export default DonationList