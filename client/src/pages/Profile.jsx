import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfile } from '../app/feature/userSlice';
import { VscTrash } from 'react-icons/vsc';
import BankAddForm from '../components/BankAddForm';
import { addBank, deleteBank, getBank } from '../app/feature/bankSlice';
import { formatDate } from '../utils/dateFormater'
import { getRequestsByUser, requestPayout } from '../app/feature/payoutSlice';
import { Link } from 'react-router-dom'
import { FaStarOfLife } from 'react-icons/fa'

const Profile = () => {
    let count = 0;
    const dispatch = useDispatch();
    const bank = useSelector(state => state.bank.data);
    const payoutRequests = useSelector(state => state.payout.data)
    const [stripeAccount, setStripeAccount] = useState(null);
    const [toggleAccountAdd, setToggleAccountAdd] = useState(false);
    const user = useSelector(state => state.user.data)
    const {isAuthenticated} = useSelector(state => state.user)


    const handleBankDelete = async (id) => {
        dispatch(deleteBank(id))
    }

    const handleBankAdd = async (e) => {
        e.preventDefault();
        dispatch(addBank(stripeAccount)).then(res => {
            if (res.payload.message) {
                setToggleAccountAdd(false)
            }else{

            }
        })
    }

    useEffect(() => {
        dispatch(fetchUserProfile())
        dispatch(getBank())
        dispatch(getRequestsByUser())
    }, [dispatch])
    return (
        <div className='relative'>

            <Navbar />
            <div className={`p-4 md:p-8 w-full max-w-7xl mx-auto ${toggleAccountAdd ? 'blur-sm' : ''}`}>
                <h1 className='py-4 text-cencter text-xl font-medium'>Profile</h1>
                <div className=' '>
                    <h1 className='py-4 text-cencter md:text-xl font-medium border-b'>User</h1>
                    <div className='text-sm md:text-md md:p-4 max-w-xl rounded-xl'>
                        <h1 className='py-4 grid grid-cols-2'><span>Email</span>
                            <span>{user.email}</span></h1>
                        <h1 className='py-4 grid grid-cols-2'><span>Name</span>
                            <span>{user.firstName} {user.lastName}</span></h1>
                        <h1 className='py-4 grid grid-cols-2'><span>Password</span>
                            <div className='flex items-center'>
                                <span className='flex items-center space-x-1'><FaStarOfLife size={6} /><FaStarOfLife size={6} /><FaStarOfLife size={6} /><FaStarOfLife size={6} /><FaStarOfLife size={6} /><FaStarOfLife size={6} /><FaStarOfLife size={6} /></span>
                                <Link className='text-sm ml-3 px-3 py-2 text-orange-600 bg-orange-100 rounded-xl hover:bg-orange-200 transition-all duration-300' to={'/forgotPassword'}>Change</Link>
                            </div>
                        </h1>
                    </div>
                </div>



                <div className=' '>
                    <h1 className='py-4 text-cencter md:text-xl font-medium border-b'>Payout Accounts</h1>
                    {
                        bank ?
                            <div className='md:p-4 max-w-xl'>
                                <div className='text-sm md:text-md py-4 grid grid-cols-2'>
                                    <span>Account Details</span>
                                    <span className='flex items-center max-w-36 overflow-auto'>{bank.stripeAccountId}
                                        <button onClick={() => handleBankDelete(bank._id)} className="md:mx-1 p-1 text-orange-600 bg-orange-100 rounded-xl hover:bg-orange-200 transition-all duration-300">
                                            <VscTrash />
                                        </button>
                                    </span>
                                </div>
                                <div className='py-4 grid grid-cols-2'>
                                    <span>Freeze Balance</span>
                                    <h1>${user.freezeBalance}</h1>
                                </div>
                                <div className='py-4 grid grid-cols-2'>
                                    <span>Account Balance</span>
                                    <div className='flex items-center flex-wrap justify-between space-x-2'>
                                        <h1>${user.accountBalance}</h1>
                                        <button onClick={() => dispatch(requestPayout(user.accountBalance))} className='text-sm px-3 py-2 rounded-xl shadow text-white bg-emerald-600'>Request Payout</button>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className='text-sm md:text-md'>
                                <h1 className='py-4 flex justify-between items-center '>
                                    <span className=''>No payout accounts found</span>
                                    <button onClick={() => setToggleAccountAdd(!toggleAccountAdd)} className='shadow-2xl rounded-xl border px-3 py-2'>Add account</button>
                                </h1>
                            </div>
                    }
                </div>

                {/* payout history */}
                <div className=' '>
                    <h1 className='py-4 text-cencter md:text-xl font-medium border-b'>Payout History</h1>
                    <div className='md rounded-xl'>
                        <div className="max-h-96 md:p-2 relative overflow-x-auto sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                                <thead className="text-slate-900 capitalize bg-gray-50 font-medium">
                                    <tr>
                                        {/* <th scope="col" className=" py-4">SN</th> */}
                                        <th scope="col" className=" py-4">Date</th>
                                        <th scope="col" className="px-6 py-4">Amount</th>
                                        <th scope="col" className="px-6 py-4">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        payoutRequests && payoutRequests.map((request, index) => (
                                            <tr key={index} className="text-slate-600 capitalize border-b">
                                                {/* <td scope="col" className=" py-6">{++count}</td> */}
                                                <td scope="col" className=" py-6">{formatDate(request.createdAt)}</td>
                                                <td scope="col" className="px-6 py-6">$ {request.amount}</td>
                                                <td scope="col" className="px-6 py-6 ">
                                                    <div className='flex'>
                                                        <span className={`px-2 py-1 ring-1 rounded-full flex items-center space-x-2 text-xs ${request.status === 'pending' ? 'text-gray-600  ring-gray-600 animate-pulse' : 'text-emerald-600 ring-emerald-600'} ${request.status === 'rejected' ? 'text-orange-600 ring-orange-600' : 'text-emerald-600 ring-emerald-600'}`}>
                                                            <div className={`w-2 h-2 rounded-full  ${request.status === 'pending' ? 'bg-gray-500 animate-pulse' : 'bg-emerald-500'} ${request.status === 'rejected' ? 'bg-orange-500' : 'bg-emerald-500'}`}></div>
                                                            <span>{request.status}</span>
                                                        </span>
                                                    </div>
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