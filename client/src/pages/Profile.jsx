import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfile } from '../app/feature/userSlice';
import axios from 'axios';
import toast from 'react-hot-toast';
import { VscEdit, VscTrash } from 'react-icons/vsc';
import BankAddForm from '../components/BankAddForm';
import { addBank, deleteBank, getBank } from '../app/feature/bankSlice';


const Profile = () => {
    const bank = useSelector(state => state.bank.data)
    const [stripeAccount, setStripeAccount] = useState(null);
    const [toggleAccountAdd, setToggleAccountAdd] = useState(false);
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.data)

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

    useEffect(() => {
        dispatch(fetchUserProfile())
        dispatch(getBank())
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
                                <h1 className='py-4 grid grid-cols-2'>
                                    <span>Account Details</span>
                                    <span className='flex items-center'>{bank.stripeAccountId}
                                        <button onClick={() => handleBankDelete(bank._id)} className="mx-1 p-1 text-orange-600 bg-orange-100 rounded-xl hover:bg-orange-200 transition-all duration-300">
                                            <VscTrash />
                                        </button>
                                    </span>
                                </h1>
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
                <BankAddForm toggleAccountAdd={toggleAccountAdd} setToggleAccountAdd={setToggleAccountAdd} handleBankAdd={handleBankAdd} setStripeAccount={setStripeAccount} />
            }
        </div>
    )
}

export default Profile