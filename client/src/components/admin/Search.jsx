import React,{useState} from 'react'
import { CiSearch } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../app/feature/userSlice';


const Search = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.user.data)
    const dispatch = useDispatch();
    const [isSubMenuVisible, setSubMenuVisible] = useState(false);
    const handleMouseEnter = () => {
        setSubMenuVisible(true);
    };
    const handleMouseLeave = () => {
        setSubMenuVisible(false);
    };

    const handleLogout = () => {
        dispatch(logoutUser()).then((res) => {
            if (res.payload) {
                console.log(res.payload);
                window.location.reload();
                navigate('/');
            }
        })
    }
    return (
        <div className='p-4 w-full border-b'>
            <div className='px-4 max-w-6xl flex justify-between items-center'>
                <form action="">
                    <div className='outline outline-1 flex rounded items-center bg-white px-2'><CiSearch size={20} /><input placeholder='Search' type="search" className='p-2 w-60 text-sm outline-none  placeholder:font-light placeholder:text-slate-800 ' /></div>
                </form>
                <div className='flex items-center gap-4 '>
                    <div>
                        <li className='' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            <NavLink to='' className=' flex items-center gap-1 hover:bg-gray-100 transition-all duration-400 rounded-md p-2'>
                                <GoPeople className='' size={20} /> {user.firstName}
                                <IoIosArrowDown className='hover:rotate-180 transition-all duration-400' />
                            </NavLink>
                        </li>
                        {
                            isSubMenuVisible ?
                                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className=' absolute  bg-white px-6 block  shadow'>
                                    <li className=' grid'>
                                        <NavLink to='/dashboard/profile' className='p-2 w-full'>Profile</NavLink>
                                    </li>
                                    <li className=' grid'>
                                        <button onClick={handleLogout} className='p-2 w-full'>Sign out</button>
                                    </li>
                                </div>
                                :
                                <></>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search