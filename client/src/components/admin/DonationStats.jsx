import React, { useState } from 'react'
import { MdOutlineAttachMoney } from "react-icons/md";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { GiGolfFlag } from "react-icons/gi";

const DonationStats = ({ donations }) => {

    const totalDonation = () =>
        donations && donations?.reduce((acc, donation) => acc + donation.amount, 0);

    // finding top donation amount
    const topDonation = () => {
        if (donations) {
            const data = donations.reduce((acc, donation) => {
                if (acc.amount < donation.amount) {
                    return donation;
                }
                return acc;
            }, { amount: 0 });
            return data.amount
        }
        else {
            return 0;
        }
    }

    // finding top donator
    const topDonator = () => {
        if (donations.length) {
            const data = donations.reduce((acc, donation) => {
                if (acc.amount < donation.amount) {
                    return donation;
                }
                return acc;
            }, { amount: 0 });
            return data?.userId?.firstName + " " + data?.userId?.lastName
        }else{
            return "No donation found"
        }
    } 

    return (
        <div className=' grid md:grid-cols-3 gap-2 md:gap-4'>
            <div className='p-3 md:p-4 rounded-xl shadow flex items-center bg-white'>
                <div className=''>
                    <MdOutlineAttachMoney className='text-orange-600 bg-orange-100 rounded-xl' size={30} />
                </div>
                <div className='p-2 text-sm'>
                    <h1 className=''>Total Donations</h1>
                    <h1 className=' md:font-medium'>₹ {totalDonation()}</h1>
                </div>
            </div>
            <div className='p-3 md:p-4 rounded-xl shadow flex items-center bg-white'>
                <div className=''>
                    <LiaPeopleCarrySolid className='text-pink-600 bg-yellow-100 rounded-xl' size={30} />
                </div>
                <div className='p-2 text-sm'>
                    <h1 className=''>Top Donation</h1>
                    <h1 className=' md:font-medium'>₹ {topDonation()}</h1>
                </div>
            </div>
            <div className='p-3 md:p-4 rounded-xl shadow flex items-center bg-white'>
                <div className=''>
                    <GiGolfFlag className='text-emerald-600 bg-emerald-100 rounded-xl' size={30} />
                </div>
                <div className='p-2 text-sm'>
                    <h1 className=''>Top Contributer</h1>
                    <h1 className=' md:font-medium capitalize'>{topDonator()}</h1>
                </div>
            </div>
        </div>
    )
}

export default DonationStats