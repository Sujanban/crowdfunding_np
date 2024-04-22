import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/admin/Navbar'
import { fetchCategory, getCategories, getCategoryById, updateCategory } from '../../app/feature/categorySlice'
import { postCamaign, updateCampaign, deleteCampaign } from '../../app/feature/campaignSlice'
import axios from 'axios'

import { LuHome, LuChevronRight } from "react-icons/lu";
import Search from '../../components/admin/Search'



const EditCategory = () => {
    const navigate = useNavigate();
    const category = useSelector(state=> state.category.data);
    const dispatch = useDispatch();
    const { id } = useParams();

    const [formData, setFormData] = useState({});
    // updaing campaign
    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateCategory(formData)).then(res => {
            if (res.payload.message) {
                navigate('/admin/dashboard')
            }
        })

    }
    useEffect(() => {
        dispatch(getCategoryById(id)).then(res=> setFormData(res.payload))
    }, [dispatch])
    return (
        <div className='flex'>
            <Navbar />
            <div className='w-full'>
                <Search />
                <div className='h-[90vh] overflow-y-auto'>
                    <nav className="w-full p-8 flex" >
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <Link
                                    to={"/"}
                                    className="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2"
                                >
                                    <LuHome className="mr-4 h-4 w-4" />
                                    Dashboard
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <LuChevronRight className="h-4 w-4" />
                                    <Link to={'/managecampaign/' + id} className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
                                        Categories
                                    </Link>
                                </div>
                            </li>
                            <li aria-current="page">
                                <div className="flex items-center">
                                    <LuChevronRight className="h-4 w-4" />
                                    <Link to={'/editcampaign/' + id} className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
                                        Edit Category
                                    </Link>
                                </div>
                            </li>
                        </ol>
                    </nav>

                    <div className='p-8 max-w-5xl mx-auto0'>
                        <div className='p-4 flex '>
                            <h1 className=' text-xl font-semibold border-b-2 border-green-600'>Edit Category</h1>
                        </div>
                        <form className="" onSubmit={handleUpdate}>
                            <div className='p-4'>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category *</label>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Help me fund my college fee"
                                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                                    value={formData.category}
                                />
                            </div>

                            <div className='p-4'>
                                <input type="submit" value='Update Category'
                                    className=' px-4 py-3 text-sm bg-yellow-600 transition-all duration-400 rounded text-white hover:bg-yellow-700' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditCategory