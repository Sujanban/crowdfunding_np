import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { GoPeople } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../app/feature/userSlice';
import { IoMdNotificationsOutline } from "react-icons/io";
import { getPayoutRequests } from '../../app/feature/payoutSlice';
import { GrAnnounce } from "react-icons/gr";


const Search = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const payoutRequests = useSelector(state => state.payout.data)
    const user = useSelector(state => state.user.data)
    const [isSubMenuVisible, setSubMenuVisible] = useState(false);
    const [isNotificationVisible, setNotificationVisible] = useState(false);



    // filtering a payout request which is pending
    const pendingPayouts = payoutRequests?.filter(request => request.status === 'pending')

    const handleMouseEnter = () => {
        setSubMenuVisible(true);
    };
    const handleMouseLeave = () => {
        setSubMenuVisible(false);
    };

    const handleLogout = () => {
        dispatch(logoutUser()).then((res) => {
            if (res.payload) {
                console.log(res.payload.message);
                window.location.reload();
                navigate('/');
            }
        })
    }

    useEffect(() => {
        dispatch(getPayoutRequests())
    }, [])
    return (
        <div className='p-4 w-full border-b'>
            <div className='px-4 max-w-6xl flex justify-between items-center'>
                <form action="">
                    <div className='ring-1 ring-gray-200 focus: flex rounded items-center bg-white px-2'><CiSearch size={20} /><input placeholder='Search' type="search" className='p-2 w-60 text-sm outline-none  placeholder:font-light placeholder:text-slate-800 ' /></div>
                </form>
                <div className='flex items-center gap-4 '>
                    <li className='p-2 relative'>
                        <button onClick={() => setNotificationVisible(!isNotificationVisible)} className='p-1 flex relative items-center'>
                            <IoMdNotificationsOutline size={20} />
                            {
                                pendingPayouts?.length > 0
                                    ?
                                    <span className='absolute top-0 right-0 w-3 h-3 rounded-full bg-red-500 text-white text-[8px]'>{pendingPayouts?.length}</span>
                                    :
                                    <></>
                            }
                        </button>
                        {
                            isNotificationVisible &&
                            <div className=''>
                                <div className='p-2 text-xs absolute top-[100%] left-0   bg-white px-2 block  shadow'>
                                    {
                                        pendingPayouts?.length > 0 ?
                                            <li className='p-2 grid text-slate-500'>
                                                <Link to={'/admin/payouts'} className='hover:underline' onClick={() => setNotificationVisible(!isNotificationVisible)}>
                                                    <h1 className='w-36 flex'><GrAnnounce size={20} className='mr-2'/> you have {pendingPayouts?.length} pending payout requests</h1>
                                                </Link>
                                            </li>
                                            :
                                            <p className='p-2 w-36'>No notification found</p>
                                    }
                                </div>
                            </div>
                        }
                    </li>
                    <li className='relative' onClick={() => setSubMenuVisible(!isSubMenuVisible)}>
                        <NavLink to='' className=' flex items-center gap-1 hover:bg-gray-100 transition-all duration-400 rounded-md p-2'>
                            <GoPeople className='' size={20} /> {user.firstName}
                            <IoIosArrowDown className='hover:rotate-180 transition-all duration-400' />
                        </NavLink>
                        {
                            isSubMenuVisible
                                ?
                                <div className=' absolute top-[100%] left-0 text-sm w-full  bg-white px-2 block  shadow'>
                                    <li className=' grid'>
                                        <NavLink to='/profile' className='p-2 '>Profile</NavLink>
                                    </li>
                                    <li className=' '>
                                        <button onClick={handleLogout} className='p-2 '>Sign out</button>
                                    </li>
                                </div>
                                :
                                <></>
                        }
                    </li>
                </div>
            </div>
        </div>
    )
}

export default Search