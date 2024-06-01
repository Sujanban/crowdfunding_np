import React, { useState } from 'react'
import { createDonation } from '../app/feature/donationSlice';
import { useSelector, useDispatch } from 'react-redux'
import KhaltiCheckout from '../components/KhaltiCheckout'

const CreateDonation = ({ id }) => {
    const dispatch = useDispatch();
    const userId = useSelector((state) => state?.user?.data._id);
    const [amount, setAmount] = useState();
    const handleDonation = async (e) => {
        e.preventDefault();
        dispatch(createDonation({ id, userId, amount }));
    }
    return (
        <div>
            <form onSubmit={handleDonation} className='py-4'>
                <label className='font-medium'>Support with a Donation </label>
                <input type="number"
                    value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='50$' className='shadow outline-none my-4 rounded-xl w-full p-3 border focus:border-2 focus:border-stone-500' />
                <input type="submit" value='Donate Now' className='rounded-xl bg-emerald-600 cursor-pointer transition-all duration-300 hover:bg-emerald-700 text-white w-full p-3 ' />
            </form>
            <KhaltiCheckout id={id} userId={userId} amount={amount} />
        </div>
    )
}

export default CreateDonation