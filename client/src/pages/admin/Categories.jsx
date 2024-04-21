import React, { useEffect, useState } from 'react'
import Navbar from '../../components/admin/Navbar'
import Search from '../../components/admin/Search'
import { LuChevronRight, LuHome } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import WarningPopup from '../../components/WarningPopup';
import { fetchCategory } from '../../app/feature/categorySlice';

const Categories = () => {
    const [popupVisible, setPopupVisible] = useState(false);
    const category = useSelector(state => state.category.data)
    const dispatch = useDispatch()
    let count = 0;

    useEffect(() => {
        dispatch(fetchCategory())
    }, [])
    return (
        <div className='flex max-w-7xl mx-auto w-full'>
            <Navbar />
            <div className='w-full'>
                <Search />
                <div className='p-8 h-[90vh] overflow-y-auto'>
                    {/* breadcrumbs */}
                    <div className='p-4'>
                        <nav className="w-full flex" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center">
                                    <Link to={""} className=" inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2" >Dashboard</Link>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <LuChevronRight className="h-4 w-4" />
                                        <Link to={''} className=" text-sm font-medium text-gray-800 hover:underline md:ml-2"> Categories </Link>

                                    </div>
                                </li>

                            </ol>
                        </nav>
                    </div>

                    <div className='flex space-x-4'>
                        {/*  */}
                        <div className='p-4 flex-grow shadow-xl'>
                            <div className='flex justify-between items-center'>
                                <h1 className='pr-2 border-b-2 border-yellow-600 text-2xl font-semibold'>Categories</h1>
                            </div>
                            <p className='py-4 text-stone-600'>Available Categories.</p>



                            <div className="p-2  relative overflow-x-auto sm:rounded-lg ">
                                <table className=" w-full text-sm text-left rtl:text-right text-gray-500 ">
                                    <thead className=" text-xs text-gray-700 capitalize bg-gray-50  ">
                                        <tr className=''>
                                            <th scope="col" className="px-2 py-3">SN</th>
                                            <th scope="col" className="px-6 py-3 w-full">Category</th>
                                            <th scope="col" className="px-2 py-3 w-full">Action</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            category && category.map((category, index) =>
                                                <tr key={index} className=" odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                    <td className="px-2 py-4"> {++count} </td>
                                                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"> {category.category} </td>
                                                    <td className="px-2 py-4 flex items-center text-sm">
                                                        <Link to={`/admin/editcategory/${category._id}`}
                                                            className="m-1 px-4 py-2 text-white bg-orange-600 rounded-3xl">Edit</Link>
                                                        <button onClick={() => setPopupVisible(true)}
                                                            className="px-4 py-2 text-white bg-[#141E46] rounded-full">Delete</button>
                                                        {
                                                            popupVisible && <WarningPopup setPopupVisible={setPopupVisible} id={category._id} />
                                                        }
                                                    </td>
                                                </tr>
                                            )}
                                        
                                    </tbody>
                                </table>


                            </div>

                        </div>
                        {/* campaign creation */}
                        <div className='w-full max-w-md'>
                            <div className='p-4 rounded-xl shadow-md'>
                                <h1 className='text-xl font-bold'>Create Category</h1>
                                <form action="">
                                    <div className='p-4'>
                                        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Category *</label>
                                        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Health"

                                        />
                                    </div>
                                    <div className='p-4 flex justify-end'>
                                        <input type="submit" value={"Create"} className='px-4 py-2 text-sm bg-stone-800 transition-all duration-400 text-white hover:bg-yellow-700 rounded-full' />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories