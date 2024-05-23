import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/admin/Navbar'
import axios from 'axios'
import { LuHome, LuChevronRight } from "react-icons/lu";
import Search from '../../components/admin/Search'
import { updateCategory } from '../../app/feature/categorySlice'
import { FaSpinner } from 'react-icons/fa'
import Loader from '../../components/Loader'



const EditCategory = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const { isLoading } = useSelector(state => state.category)

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateCategory(formData)).then(res => {
            if (res.payload.message) {
                navigate('/admin/categories')
            }
        })
    }

    const fetchCategoryById = async (id) => {
        try {
            const res = await axios.get("/api/category/getCategoryById/" + id);
            setFormData(res.data);
        } catch (error) {
            console.log("Server Error while fetching API " + error);
        }
    }

    useEffect(() => {
        fetchCategoryById(id);
    }, []);

    return (
        <div className='flex w-full max-w-7xl mx-auto'>
            {
                isLoading && <Loader/>
            }
            <Navbar />
            <div className='w-full'>
                <Search />
                <div className='p-8 h-[90vh] overflow-y-auto'>
                    {/* Breadcrumbs */}
                    <div className='p-4'>
                        <nav className="w-full flex" aria-label="Breadcrumb">
                            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                                <li className="inline-flex items-center">
                                    <Link to={"/admin/dashboard"} className=" inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2" >Dashboard</Link>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <LuChevronRight className="h-4 w-4" />
                                        <Link to={'/admin/categories'} className=" text-sm font-medium text-gray-800 hover:underline md:ml-2">Category</Link>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <LuChevronRight className="h-4 w-4" />
                                        <Link to={''} className=" text-sm font-medium text-gray-800 hover:underline md:ml-2"> Edit Category </Link>
                                    </div>
                                </li>

                            </ol>
                        </nav>
                    </div>

                    <div className='p-4 max-w-5xl mx-auto0'>
                        <div className='px-2 flex'>
                            <h1 className='text-xl font-semibold border-b-2 border-yellow-600'>Edit Category</h1>
                        </div>
                        <form className="p-2" onSubmit={handleUpdate}>
                            <div className='py-4'>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category *</label>
                                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Help me fund my college fee"
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                />
                            </div>

                            <div className='py-4'>
                                <button type='submit' disabled={isLoading} className='flex items-center px-4 py-3 text-sm bg-emerald-600 transition-all duration-300 rounded-xl text-white hover:bg-emerald-700'>
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditCategory