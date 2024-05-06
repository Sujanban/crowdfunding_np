import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfile } from '../app/feature/userSlice';
import axios from 'axios';
import toast from 'react-hot-toast';


const Profile = () => {
    const [stripeAccount, setStripeAccount] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.data)
    useEffect(() => {
        dispatch(fetchUserProfile())
    }, [])


    const handleBankAdd = async (e) => {
        e.preventDefault();
        const res = await axios.post('/api/bank/addBank', { stripeAccount });
        if (res.data.error) {
            toast.error(res.data.error);
        } else {
            toast.success(res.data.message);
        }

    }
    return (
        <div>
            <Navbar />
            <div className='w-full max-w-7xl mx-auto'>
                <div className='px-8 py-20'>
                    <h1 className='text-2xl font-semibold '>User Profile</h1>
                    <p><span>Name: {user.firstName} {user.lastName}</span></p>
                    <p>Email: {user.email}</p>
                    <p>User Role: {
                        user.role == 0 ? 'User' : 'Admin'}</p>
                </div>

                <div className='px-8 py-20'>
                    <h1 className=' text-2xl font-semibold'>Add Bank</h1>
                    <form action="" onSubmit={handleBankAdd}>
                        <label className='py-2'>
                            <h1 className=''>Stripe Account</h1>
                            <input className='px-4 w-96 py-2 border rounded-xl' type="text" onChange={(e) => setStripeAccount(e.target.value)} placeholder='Enter Stripe AccountID' />
                        </label>
                        <div className='py-2'>
                            <input className='px-4 py-3 bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 cursor-pointer rounded-xl text-sm' type="submit" value={'Add Bank'} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile