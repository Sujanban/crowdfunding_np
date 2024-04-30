import React, { useEffect, useState } from 'react'
import Navbar from '../../components/admin/Navbar'
import Search from '../../components/admin/Search'
import { LuChevronRight } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import WarningPopup from '../../components/WarningPopup';
import { addCategory, fetchCategory } from '../../app/feature/categorySlice';
import { VscEdit, VscTrash } from "react-icons/vsc";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { TiPen } from "react-icons/ti";



const Categories = () => {
    const [popupVisible, setPopupVisible] = useState(false);
    const category = useSelector(state => state.category.data)
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    const dispatch = useDispatch()
    let count = 0;

    // handeling handleCategoryCreation
    const [catData, setCatData] = useState('');
    const handleCategoryCreation = (e) => {
        e.preventDefault();
        dispatch(addCategory(catData))
    }

    const handleDelete = (id) => {
        setSelectedCategoryId(id)
        setPopupVisible(true)
    }

    useEffect(() => {
        dispatch(fetchCategory())
    }, [dispatch])
    return (
        <div className='flex max-w-7xl mx-auto w-full'>
            <Navbar />
            <div className='w-full'>
                <Search />
                <div className='p-4 h-[90vh] overflow-y-auto bg-gray-100'>
                    {/* breadcrumbs */}
                    <div className='p-2'>
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

                    <div className='p-4 flex space-x-4'>
                        {/*  */}
                        <div className='p-4 flex-grow bg-white rounded-xl '>
                            <div className='p-2 flex items-center justify-between'>
                                <h1 className='border-b-2 border-emerald-600 font-bold'>Category</h1>
                                <div className='relative pr-4'>
                                    {/* <button className='border rounded px-4 text-sm py-2 flex items-center hover:bg-gray-50'>Filter <IoFunnelOutline className='ml-2' /></button> */}
                                    {/* {
                                    toggleFilter && <div className='p-2 w-32 text-xs absolute top-10 left-0 z-50 shadow bg-white'>
                                        <button className='px-2 py-3 w-full border-b'>Highest to lowest</button>
                                        <button className='px-2 py-3 w-full'>Lowest to highest</button>
                                    </div>
                                } */}
                                </div>
                            </div>


                            <div className="p-2 relative overflow-x-auto sm:rounded-lg ">
                                <table className=" w-full text-sm text-left rtl:text-right text-gray-500 ">
                                    <thead className=" text-sm text-gray-700 capitalize bg-gray-50  ">
                                        <tr className=''>
                                            <th scope="col" className="px-2 py-3">SN</th>
                                            <th scope="col" className="px-6 py-3 w-full">Category</th>
                                            <th scope="col" className="px-6 py-3 w-full">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            category && category.map((category, index) =>
                                                <tr key={index} className=" text-sm text-slate-600 odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                    <td className="px-2 py-2"> {++count} </td>
                                                    <td className="px-6 py-2 font-medium  whitespace-nowrap dark:text-white"> {category.category} </td>
                                                    <td className="px-6 py-2 flex items-center text-sm">
                                                        <Link to={`/admin/editcategory/${category._id}`}
                                                            className="m-1 px-4 py-2 bg-emerald-100 text-emerald-600 rounded-xl flex items-center hover:bg-emerald-200 transition-all duration-300"><VscEdit size={20} /></Link>
                                                        <button onClick={() => handleDelete(category._id)}
                                                            className="py-2 px-4 text-sm text-orange-600 bg-orange-100 transition-all duration-300 hover:bg-orange-200 rounded-xl"><VscTrash size={20} /></button>
                                                        {
                                                            popupVisible && selectedCategoryId === category._id && <WarningPopup setPopupVisible={setPopupVisible} id={category._id} delCategory={true} />
                                                        }
                                                    </td>
                                                </tr>
                                            )}
                                    </tbody>
                                </table>
                                {/* table footer */}
                                <div className='py-4 flex justify-between items-center'>
                                    <div className='text-xs text-slate-600'>
                                        <h1>Showing 1 to 10 of 5 entries</h1>
                                    </div>
                                    <div className='flex items-center text-xs'>
                                        <button className='py-2 px-4 flex items-center text-slate-600  transition-all duration-300 hover:text-slate-900  border'><FaChevronLeft className='mr-2' /> Back</button>
                                        <button className='py-2 px-4 flex items-center text-slate-600  transition-all duration-300 hover:text-slate-900  border'>1</button>
                                        <button className='py-2 px-4 flex items-center text-slate-600  transition-all duration-300 hover:text-slate-900  border'>2</button>
                                        <button className='py-2 px-4 flex items-center text-slate-600  transition-all duration-300 hover:text-slate-900  border'>3</button>
                                        <button className='py-2 px-4 flex items-center text-slate-600  transition-all duration-300 hover:text-slate-900  border'>...</button>
                                        <button className='py-2 px-4 flex items-center text-slate-600  transition-all duration-300 hover:text-slate-900  border'>Next<FaChevronRight className='ml-2' /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* campaign creation */}
                        <div className=' flex-grow '>
                            <div className='p-4 bg-white rounded-xl '>
                                <div className='px-2 flex'>
                                    <h1 className='border-b-2 border-emerald-600 font-bold'>Create Category</h1>
                                </div>
                                <form onSubmit={handleCategoryCreation}>
                                    <div className='p-4'>
                                        <input type="text"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Health"
                                            onChange={(e) => setCatData(e.target.value)}

                                        />
                                    </div>
                                    <div className='p-4 flex justify-end'>
                                        <button type='submit' className='px-4 py-2 flex items-center text-sm bg-emerald-600 transition-all cursor-pointer duration-300 text-white hover:bg-emerald-700 rounded-xl'><TiPen className='mr-2'/> Create</button>
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