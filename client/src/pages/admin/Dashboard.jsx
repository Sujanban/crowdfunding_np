import React, { useEffect, useState } from 'react';
import Navbar from '../../components/admin/Navbar';
import Search from '../../components/admin/Search';
import { LuChevronRight } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampaign } from '../../app/feature/campaignSlice';
import { getDonations } from '../../app/feature/donationSlice';
import DonationStats from '../../components/admin/DonationStats';

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

const Dashboard = () => {
    const donations = useSelector(state => state.donation.data);
    const dispatch = useDispatch();
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });

    useEffect(() => {
        dispatch(fetchCampaign());
        dispatch(getDonations());
    }, [dispatch]);

    useEffect(() => {
        if (donations.length > 0) {
            const userDonationMap = donations.reduce((acc, donation) => {
                const userName = `${donation.userId.firstName} ${donation.userId.lastName}`;
                if (!acc[userName]) {
                    acc[userName] = 0;
                }
                acc[userName] += donation.amount;
                return acc;
            }, {});

            const labels = Object.keys(userDonationMap);
            const data = Object.values(userDonationMap);

            setChartData({
                labels,
                datasets: [
                    {
                        label: 'Donations',
                        data,
                        backgroundColor: '#059669',
                    }
                ],
            });
        }
    }, [donations]);

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

                    <div className='p-4 grid grid-cols-3'>
                        <div className='p-4 bg-white col-span-2 rounded-xl shadow'>
                            <h1 className='pb-2 font-medium'>Donation Leaderboard</h1>
                            {/* reactjs chart */}
                            <Bar options={{ responsive: true }} data={chartData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
