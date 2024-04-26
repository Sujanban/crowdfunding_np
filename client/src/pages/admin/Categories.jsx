import React, { useEffect, useState } from 'react'
import Navbar from '../../components/admin/Navbar'
import Search from '../../components/admin/Search'
import { LuChevronRight} from "react-icons/lu";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import WarningPopup from '../../components/WarningPopup';
import { addCategory, fetchCategory } from '../../app/feature/categorySlice';
import { VscEdit,VscTrash  } from "react-icons/vsc";


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
                        <div className='p-4 flex-grow '>
                            <div className='flex justify-between items-center'>
                                <h1 className='border-b-2 border-yellow-600 text-2xl font-semibold'>Categories</h1>
                            </div>
                            

                            <div className="py-8  relative overflow-x-auto sm:rounded-lg ">
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
                                                    <td className=" py-4 flex items-center text-sm">
                                                        <Link to={`/admin/editcategory/${category._id}`}
                                                            className="m-1 px-4 py-2 bg-emerald-100 text-emerald-600 rounded-xl flex items-center hover:bg-emerald-200 transition-all duration-300"><VscEdit size={20}/></Link>
                                                        <button onClick={() => handleDelete(category._id)}
                                                            className="px-4 py-2 text-orange-600 bg-orange-100 rounded-xl flex items-center hover:bg-orange-200 transition-all duration-300"><VscTrash  size={20}/></button>
                                                        {
                                                            popupVisible && selectedCategoryId === category._id && <WarningPopup setPopupVisible={setPopupVisible} id={category._id} delCategory={true} />
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
                                <form onSubmit={handleCategoryCreation}>
                                    <div className='p-4'>
                                        <label className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">Category *</label>
                                        <input type="text" 
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Health" 
                                        onChange={(e) => setCatData(e.target.value)}

                                        />
                                    </div>
                                    <div className='p-4 flex justify-end'>
                                        <input type="submit" value={"Create"} className='px-4 py-2 text-sm bg-emerald-600 transition-all duration-400 text-white hover:bg-green-700 rounded-xl' />
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