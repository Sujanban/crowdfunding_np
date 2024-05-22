import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search/${searchTerm}`);
    }
    return (
        <div className='my-12 md:my-20 max-w-7xl mx-auto text-center'>
            <h1 className='py-4 text-center text-xl font-medium md:text-xl'>Search for campaign to Donate</h1>
            <p className='test-slate-600'>Find the perfect campaign to support</p>
            <form onSubmit={handleSearch} className='text-white p-4 max-w-xl mx-auto flex items-center justify-center gap-2'>
                    <input onChange={(e) => setSearchTerm(e.target.value)} type="text" className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Help me fund my college fee" />
                    <button type='submit' className='text-sm md:text-inherit px-5 py-3 rounded-xl bg-emerald-600 transition-all duration-300 hover:bg-emerald-700 hover:text-white '>Search</button>
            </form>
        </div>
    )
}

export default SearchBar