import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfile } from '../app/feature/userSlice';
import axios from 'axios';
import toast from 'react-hot-toast';
import { VscEdit, VscTrash } from 'react-icons/vsc';
import BankAddForm from '../components/BankAddForm';
import { addBank, deleteBank, getBank } from '../app/feature/bankSlice';
import { formatDate } from '../utils/dateFormater'


const Profile = () => {
    let count = 0;
    const dispatch = useDispatch();
    const bank = useSelector(state => state.bank.data)
    const [stripeAccount, setStripeAccount] = useState(null);
    const [toggleAccountAdd, setToggleAccountAdd] = useState(false);
    const user = useSelector(state => state.user.data)


    const [payoutRequests, setPayoutRequests] = useState(null)

    const getPayoutRequestByUser = async () => {
        try {
            const res = await axios.get('/api/bank/getPayoutRequestByUser')
            if (res.data.error) {
                toast.error(res.data.errror)
            } else {
                setPayoutRequests(res.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    console.log(payoutRequests)


    const handleBankDelete = async (id) => {
        dispatch(deleteBank(id))
    }

    const handleBankAdd = async (e) => {
        e.preventDefault();
        dispatch(addBank(stripeAccount)).then(res => {
            if (res.payload.message) {
                setToggleAccountAdd(false)
            }
        })
    }

    // request payout
    const handlePayoutRequest = async (amount) => {
        try {
            const res = await axios.post('/api/bank/requestPayout', { amount });
            console.log(res.data)
            if (res.data.message) {
                toast.success(res.data.message);
            }
            if (res.data.error) {
                toast.error(res.data.error);
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        dispatch(fetchUserProfile())
        dispatch(getBank())
        getPayoutRequestByUser();
    }, [dispatch])
    return (
        <div className='relative'>

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
                        bank ?
                            <div className='p-4 max-w-xl'>
                                <div className='py-4 grid grid-cols-2'>
                                    <span>Account Details</span>
                                    <span className='flex items-center'>{bank.stripeAccountId}
                                        <button onClick={() => handleBankDelete(bank._id)} className="mx-1 p-1 text-orange-600 bg-orange-100 rounded-xl hover:bg-orange-200 transition-all duration-300">
                                            <VscTrash />
                                        </button>
                                    </span>
                                </div>
                                <div className='py-4 grid grid-cols-2'>
                                    <span>Account Balance</span>
                                    <div className='flex items-center space-x-2'>
                                        <h1>${user.accountBalance}</h1>
                                        <button onClick={() => handlePayoutRequest(user.accountBalance)} className='text-sm px-3 py-2 rounded shadow bg-emerald-100'>Request Payout</button>
                                    </div>
                                </div>
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

                {/* payout history */}
                <div className=' '>
                    <h1 className='py-4 text-cencter text-xl font-bold border-b'>Payout History</h1>
                    <div className='p-4  rounded-xl'>
                        <div className="p-2 relative overflow-x-auto sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                                <thead className="text-slate-900 capitalize bg-gray-50">
                                    <tr>
                                        <th scope="col" className=" py-4">SN</th>
                                        <th scope="col" className=" py-4">Date</th>
                                        <th scope="col" className="px-6 py-4">Amount</th>
                                        <th scope="col" className="px-6 py-4">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        payoutRequests && payoutRequests.map((request, index) => (
                                            <tr key={index} className="text-slate-600 capitalize border-b">
                                                <td scope="col" className=" py-4">{++count}</td>
                                                <td scope="col" className=" py-4">{formatDate(request.createdAt)}</td>
                                                <td scope="col" className="px-6 py-4">₹ {request.amount}</td>
                                                <td scope="col" className="px-6 py-4 font-bold ">
                                                    <span className='flex items-center space-x-2 text-xs'>
                                                        <div className={`w-2 h-2 rounded-full animate-pulse ${request.status === 'pending' ? 'bg-red-500' : 'bg-emerald-500'}`}></div>
                                                        <span>{request.status}</span>
                                                    </span>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {
                toggleAccountAdd &&
                <BankAddForm toggleAccountAdd={toggleAccountAdd} setToggleAccountAdd={setToggleAccountAdd} handleBankAdd={handleBankAdd} setStripeAccount={setStripeAccount} />
            }
        </div>
    )
}

export default Profile