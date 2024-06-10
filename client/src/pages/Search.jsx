import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CampaignGrid from '../components/CampaignGrid'
import SearchBar from '../components/SearchBar';

const Search = () => {
    return (
        <div>
            <Navbar />
            <div>
                <SearchBar />
                <CampaignGrid />
            </div>
            <Footer />
        </div>
    )
}

export default Search