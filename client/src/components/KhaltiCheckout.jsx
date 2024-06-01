import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'

const KhaltiCheckout = ({ id, userId, amount }) => {
    const handleKhaltiPayment = async (e) => {
        e.preventDefault();
        const res = await axios.post(`/api/donation/createKhaltiPayment/${id}`, { userId, amount });
        if (res.data.payment_url) {
            window.location.href = res?.data?.payment_url;
        }
        if (res.data.error) {
            toast.error(res.data.error);
        }
    }
    return (
        <div className='border-t py-2 '>
            <p className='text-slate-600 text-sm text-center pb-3 '>Pay with Khalti</p>
            <button 
            onClick={handleKhaltiPayment} 
            className='py-3 w-full px-4 flex items-center justify-center bg-emerald-600 text-white  transition-all duration-300 hover:bg-emerald-700 rounded-xl'>
                 
                <img className='ml-1 h-6' src="https://seeklogo.com/images/K/khalti-logo-F0B049E67E-seeklogo.com.png" alt="" />
                </button>
        </div>
    )
}

export default KhaltiCheckout