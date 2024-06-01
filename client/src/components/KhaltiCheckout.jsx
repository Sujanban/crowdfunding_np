import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import axios from 'axios'

const KhaltiCheckout = () => {
    const payload = {
        return_url: "http://localhost:5173/success/",
        website_url: "http://localhost:5173/",
        amount: 1300,
        purchase_order_id: "test12",
        purchase_order_name: "test",
        customer_info: {
            name: "Khalti Bahadur",
            email: "example@gmail.com",
            phone: "9800000123",
        },
        amount_breakdown: [
            {
                label: "Mark Price",
                amount: 1000,
            },
            {
                label: "VAT",
                amount: 300,
            },
        ],
        product_details: [
            {
                identity: "1234567890",
                name: "Khalti logo",
                total_price: 1300,
                quantity: 1,
                unit_price: 1300,
            },
        ],
        merchant_username: "merchant_name",
        merchant_extra: "merchant_extra",
    };
    const handleKhaltiPayment = async (e) => {
        e.preventDefault();
        const res = await axios.post(`/api/donation/createKhaltiPayment`, {payload});
        if (res.data.payment_url) {
            window.location.href = res?.data?.payment_url;
        }
        if (res.data.error) {
            toast.error(res.data.error);
        }
    }
    return (
        <div className=''>
            <button onClick={handleKhaltiPayment} className='py-3 w-full px-4 flex items-center justify-center bg-emerald-600 text-white  transition-all duration-300 hover:bg-emerald-700 rounded-xl'>Pay using Khalti</button>
        </div>
    )
}

export default KhaltiCheckout