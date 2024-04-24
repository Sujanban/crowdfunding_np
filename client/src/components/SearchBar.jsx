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
            <h1 className='py-4 text-center text-xl font-bold md:text-3xl'>Search for campaign to Donate</h1>
            <p className='md:text-xl'>Find the perfect campaign to support</p>
            <form onSubmit={handleSearch} className='p-4 max-w-4xl mx-auto flex items-center justify-center gap-2'>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search.." onChange={(e) => setSearchTerm(e.target.value)} />

                <input type='submit' value='Search' className='text-white text-xs md:text-inherit px-5 py-3 rounded bg-green-800 '/>
            </form>
        </div>
    )
}

export default SearchBar