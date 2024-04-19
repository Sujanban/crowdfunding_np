import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`/search/${searchTerm}`);
    }
    return (
        <div className='my-12 md:my-28 max-w-7xl mx-auto text-center'>
            <h1 className='py-4 text-center text-2xl md:text-3xl'>Search for Campaign to Donate</h1>
            <p className='text-xl'>Find the perfect campaign to support</p>
            <form onSubmit={handleSearch} className='py-4 max-w-4xl mx-auto flex items-center justify-center gap-2'>
                <input onChange={(e) => setSearchTerm(e.target.value)} type="text" className='w-full outline-none border-2 border-green-500 focus:border-yellow-500 px-3 py-3 rounded ' placeholder='Search' />
                <button type='submit' className=' px-6 py-3 rounded bg-green-800 text-white'>Search</button>
            </form>
        </div>
    )
}

export default SearchBar