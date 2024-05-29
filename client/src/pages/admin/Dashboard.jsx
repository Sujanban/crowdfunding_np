import Navbar from '../../components/admin/Navbar'
import Search from '../../components/admin/Search'
import { LuChevronRight } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampaign } from '../../app/feature/campaignSlice';
import { useEffect, useState } from 'react';
import DonationStats from '../../components/admin/DonationStats';
import { getDonations } from '../../app/feature/donationSlice';


import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const options = {
    responsive: true,
};

export const data = {
    labels,
    datasets: [
        {
            label: 'Users',
            data: [23, 45, 67, 89, 23, 45, 67],
            backgroundColor: '#059669',
        }
    ],
};

const Dashboard = () => {
    const donations = useSelector(state => state.donation.data)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCampaign())
        dispatch(getDonations())
    }, [])
    return (
        <div className='flex max-w-7xl mx-auto w-full rounded-xl'>
            <Navbar />
            <div className='w-full '>
                <Search />
                <div className='p-4 h-[90vh] overflow-y-auto bg-gray-100'>
                    {/* breadcrumbs */}
                    <div className='md:p-2'>
                        <nav className="w-full flex" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center">
                                    <Link to={"/admin/dashboard"} className=" inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2" >Dashboard</Link>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <LuChevronRight className="h-4 w-4" />
                                        <Link to={'/admin/donations'} className=" text-sm font-medium text-gray-800 hover:underline md:ml-2"> Donations </Link>

                                    </div>
                                </li>

                            </ol>
                        </nav>
                    </div>

                    <div className='py-2 md:py-0 md:p-4 '>
                        {/* donation stats grid */}
                        <DonationStats donations={donations} />
                    </div>

                    <div>
                        {/* reactjs chart */}
                        <Bar options={options} data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard