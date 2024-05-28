import React from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Pagination = ({ currentPage, setCurrentPage, currentItems, numberOfItems }) => {
    return (
        <div className='px-2 py-4 flex justify-between items-center space-y-2 flex-wrap'>
            <div className='text-xs text-slate-600'>
                <h1>Showing {(10 * (currentPage - 1)) + 1} to {10 * (currentPage - 1) + currentItems?.length} of {currentPage} entries</h1>
            </div>
            <div className='flex items-center space-x-2 text-xs'>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} className={`py-2 px-4 flex items-center text-slate-600  transition-all duration-300 hover:text-slate-900  border`}><FaChevronLeft className='mr-2' /> Back</button>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentItems?.length < numberOfItems} className='py-2 px-4 flex items-center text-slate-600  transition-all duration-300 hover:text-slate-900  border'>Next<FaChevronRight className='ml-2' /></button>
            </div>
        </div>
    )
}

export default Pagination