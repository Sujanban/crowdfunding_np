import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfile } from '../app/feature/userSlice';
import axios from 'axios';
import toast from 'react-hot-toast';


const Profile = () => {
    const [stripeAccount, setStripeAccount] = useState('');
    const [account, setAccount] = useState('');
    const [toggleAccountAdd, setToggleAccountAdd] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.data)

    const fetchBankAccount = async () => {
        const res = await axios.get('/api/bank/getBank');
        if (res.data.error) {
            toast.error(res.data.error);
        } else {
            setAccount(res.data);
        }
    }

    useEffect(() => {
        dispatch(fetchUserProfile())
        fetchBankAccount()
    }, [])
    const handleBankAdd = async (e) => {
        e.preventDefault();
        const res = await axios.post('/api/bank/addBank', { stripeAccount });
        if (res.data.error) {
            toast.error(res.data.error);

        } else {
            toast.success(res.data.message);
        }
        setToggleAccountAdd(false)

    }
    return (
        <div>
            <Navbar />
            <div className={`p-8 w-full max-w-7xl mx-auto ${toggleAccountAdd ? 'blur-sm' : ''}`}>
                <h1 className='py-4 text-cencter text-2xl font-bold underline underline-offset-4'>Profile</h1>
                <div className=' '>
                    <h1 className='py-4 text-cencter text-xl font-bold border-b'>User</h1>
                    <div className='p-4 max-w-xl rounded-xl'>
                        <h1 className='py-4 grid grid-cols-2'><span>Email</span> <span>{user.email}</span></h1>
                        <h1 className='py-4 grid grid-cols-2'><span>Name</span> <span>{user.firstName} {user.lastName}</span></h1>
                        <h1 className='py-4 grid grid-cols-2'><span>Password</span> <span>{user.password || '**********'}</span></h1>
                    </div>
                </div>


                <div className=' '>
                    <h1 className='py-4 text-cencter text-xl font-bold border-b'>Payout Accounts</h1>
                    {
                        account ?
                            <div className='p-4 max-w-xl'>
                                <h1 className='py-4 grid grid-cols-2'><span>Account Details</span> <span>{account.stripeAccountId}</span></h1>
                            </div>
                            :
                            <div>
                                <h1 className='py-4 flex justify-between items-center '>
                                    <span className=''>No payout accounts found</span>
                                    <button onClick={() => setToggleAccountAdd(!toggleAccountAdd)} className='shadow-2xl rounded-xl border px-3 py-2'>Add account</button>
                                </h1>
                            </div>
                    }
                </div>
            </div>
            {
                toggleAccountAdd &&
                <div className='absolute popup top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 ring ring-blue-400 max-w-xl rounded-xl'>
                    <div className=''>
                        <h1 className='pb-4 font-bold'>Payout Account</h1>
                        <img className='w-40' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" alt="" />
                        <h1 className=' p-4 pb-0 grid grid-cols-2'>
                            <span className='my-auto'>Account Name</span>
                            <form className='flex space-x-2' onSubmit={handleBankAdd}>
                                <input className='px-4 w-96 py-2 border rounded-xl' type="text" onChange={(e) => setStripeAccount(e.target.value)} placeholder='Enter Stripe AccountID' />
                                <input className='shadow px-4 py-3 bg-emerald-600 text-white hover:bg-emerald-700 transition-all duration-300 cursor-pointer rounded-xl text-sm' type="submit" value={'Add'} />
                            </form>
                        </h1>
                    </div>
                </div>
            }
        </div>
    )
}

export default Profile