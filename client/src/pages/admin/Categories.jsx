import React, { useEffect, useState } from 'react'
import Navbar from '../../components/admin/Navbar'
import Search from '../../components/admin/Search'
import WarningPopup from '../../components/WarningPopup';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, fetchCategory } from '../../app/feature/categorySlice';
import { VscEdit, VscTrash } from "react-icons/vsc";
import { LuChevronRight } from "react-icons/lu";
import { FaChevronLeft, FaChevronRight, FaSpinner } from "react-icons/fa";
import { TiPen } from "react-icons/ti";
import Pagination from '../../components/Pagination';
import Loader from '../../components/Loader';

const Categories = () => {
    const dispatch = useDispatch()
    const category = useSelector(state => state.category.data)
    const { isLoading } = useSelector(state => state.category)
    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    let count = 0;

    // handeling handleCategoryCreation
    const [newCategory, setNewCategory] = useState('');
    const handleCategoryCreation = (e) => {
        e.preventDefault();
        dispatch(addCategory(newCategory)).then(res => {
            if (res.payload.message) {
                setNewCategory('');
            }
        })
    }

    const handleDelete = (id) => {
        setSelectedCategoryId(id)
        setPopupVisible(true)
    }

    useEffect(() => {
        dispatch(fetchCategory())
    }, [dispatch])


    // implementing pagination in frontend
    const numberOfItems = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * numberOfItems;
    const indexOfFirstItem = indexOfLastItem - numberOfItems;
    const currentItems = category?.slice(indexOfFirstItem, indexOfLastItem);



    return (
        <div className='flex max-w-7xl mx-auto w-full'>
            {
                isLoading && <Loader />
            }
            <Navbar />
            <div className='w-full'>
                <Search />
                <div className='p-4 h-[90vh] overflow-y-auto bg-gray-100'>
                    {/* breadcrumbs */}
                    <div className='md:p-2'>
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

                    <div className=' py-2 md:p-4 md:flex md:space-x-4 space-y-4 flex-wrap md:flex-nowrap'>
                        {/*  */}

                        <div className=' grid md:hidden flex-grow '>
                            <div className='md:p-4 bg-white rounded-xl '>
                                <div className='p-2 flex'>
                                    <h1 className='text-sm md:text-md border-b-2 border-emerald-600 font-medium'>Create Category</h1>
                                </div>
                                <form onSubmit={handleCategoryCreation}>
                                    <div className='p-4'>
                                        <input type="text"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Health"
                                            onChange={(e) => setNewCategory(e.target.value)}
                                            value={newCategory}

                                        />
                                    </div>
                                    <div className='p-4 flex justify-end'>
                                        <button type='submit' className='px-4 py-2 flex items-center text-sm bg-emerald-600 transition-all cursor-pointer duration-300 text-white hover:bg-emerald-700 rounded-xl'>
                                            <TiPen className='mr-2' /> Create {isLoading && <FaSpinner className='animate-spin' />}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        
                        <div className=' md:p-4 flex-grow bg-white rounded-xl '>
                            <div className='p-2 flex items-center justify-between'>
                                <h1 className='text-sm mdLtext-md border-b-2 border-emerald-600 font-medium'>Category</h1>
                            </div>


                            <div className="md:p-2 relative overflow-x-auto sm:rounded-lg ">
                                <table className=" w-full text-sm text-left rtl:text-right text-gray-500 ">
                                    <thead className=" text-sm text-gray-700 capitalize bg-gray-50  ">
                                        <tr className=''>
                                            <th scope="col" className="px-3 py-3">SN</th>
                                            <th scope="col" className="px-3 md:px-6 py-3 w-full">Category</th>
                                            <th scope="col" className="px-3 md:px-6 py-3 w-full">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            currentItems && currentItems.map((category, index) =>
                                                <tr key={index} className=" text-xs sm:text-sm text-slate-600 odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                    <td className="px-3 py-3"> {++count} </td>
                                                    <td className="px-3 md:px-6 py-2 font-medium  whitespace-nowrap dark:text-white"> {category.category} </td>
                                                    <td className="px-3 md:px-6 py-2 flex items-center text-sm">
                                                        <Link to={`/admin/editcategory/${category._id}`}
                                                            className="m-1 px-2 md:px-4 py-2 bg-emerald-100 text-emerald-600 rounded-xl flex items-center hover:bg-emerald-200 transition-all duration-300"><VscEdit size={20} /></Link>
                                                        <button onClick={() => handleDelete(category._id)}
                                                            className="py-2 px-2 md:px-4 text-xs sm:text-sm text-orange-600 bg-orange-100 transition-all duration-300 hover:bg-orange-200 rounded-xl"><VscTrash size={20} /></button>
                                                        {
                                                            popupVisible && selectedCategoryId === category._id && <WarningPopup setPopupVisible={setPopupVisible} id={category._id} delCategory={true} />
                                                        }
                                                    </td>
                                                </tr>
                                            )}
                                    </tbody>
                                </table>

                                {/* pagination */}
                                <Pagination
                                    currentPage={currentPage}
                                    setCurrentPage={setCurrentPage}
                                    currentItems={currentItems}
                                    numberOfItems={numberOfItems}
                                />
                            </div>
                        </div>
                        {/* campaign creation */}
                        <div className='hidden md:flex flex-grow '>
                            <div className='md:p-4 bg-white rounded-xl '>
                                <div className='p-2 flex'>
                                    <h1 className='text-sm md:text-md border-b-2 border-emerald-600 font-medium'>Create Category</h1>
                                </div>
                                <form onSubmit={handleCategoryCreation}>
                                    <div className='p-4'>
                                        <input type="text"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Health"
                                            onChange={(e) => setNewCategory(e.target.value)}
                                            value={newCategory}

                                        />
                                    </div>
                                    <div className='p-4 flex justify-end'>
                                        <button type='submit' className='px-4 py-2 flex items-center text-sm bg-emerald-600 transition-all cursor-pointer duration-300 text-white hover:bg-emerald-700 rounded-xl'>
                                            <TiPen className='mr-2' /> Create {isLoading && <FaSpinner className='animate-spin' />}
                                        </button>
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