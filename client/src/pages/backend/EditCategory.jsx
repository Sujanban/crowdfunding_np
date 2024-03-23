import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'
import toast from 'react-hot-toast';

const EditCategory = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [category, setCategory] = useState('');
    const handleUpdate = async (e) => {
        e.preventDefault();
        const res = await axios.put(`/api/category/editCategory/${id}`, { category });
        if (res.data.error) {
            toast.error(res.data.error);
        }
        if (res.data.message) {
            toast.success(res.data.message);
            setCategory('');
            navigate('/manageFundraiserCategory');
        }
    }
    return (
        <div className='h-screen w-full flex items-center justify-center'>
            <div className=''>
                <h1 className='p-4 bg-slate-100'>Update Category</h1>
                <form className='p-4' onSubmit={handleUpdate}>
                    <input className='p-2' type="text" onChange={(e) => setCategory(e.target.value)} placeholder='Update Category' />
                    <button className='p-2 bg-stone-800 text-white rounded-md' type='submit'>Update</button>
                </form>
            </div>
        </div>
    )
}

export default EditCategory