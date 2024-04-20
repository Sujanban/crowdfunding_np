import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='max-w-[250px]  border-r bg-gray-100 rounded'>
            {/* <ul className='p-2 grid gap-4'>
                <NavLink 
                className={((isActive) => isActive ? 'p-2  text-sm hover:text-slate-900 text-slate-800  block' : 'p-2 text-sm hover:text-slate-900 text-slate-800  block bg-red-500')} to="/admin/dashboard">Dashboard</NavLink>

                <NavLink className={((isActive) => isActive ? 'p-2 bg-white text-sm hover:text-slate-900 text-slate-800  block' : 'p-2 text-sm hover:text-slate-900 text-slate-800  block')} to="/admin/campaigns">Campaigns</NavLink>

                <NavLink className={((isActive) => isActive ? 'p-2 bg-white text-sm hover:text-slate-900 text-slate-800  block' : 'p-2 text-sm hover:text-slate-900 text-slate-800  block')} to="/admin/categories">Category</NavLink>

                <NavLink className={((isActive) => isActive ? 'p-2 bg-white text-sm hover:text-slate-900 text-slate-800  block' : 'p-2 text-sm hover:text-slate-900 text-slate-800  block')} to="/admin/users">Users</NavLink>

                <NavLink className={((isActive) => isActive ? 'p-2 bg-white text-sm hover:text-slate-900 text-slate-800  block' : 'p-2 text-sm hover:text-slate-900 text-slate-800  block')} to="/admin/donations">Donations</NavLink>
            </ul> */}
        </div>
    )
}

export default Sidebar