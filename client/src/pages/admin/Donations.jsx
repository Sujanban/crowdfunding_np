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
                                    <Link to={"/admin/dashboard"} className=" inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2" >Dashboard</Link>
                                </li>
                                <li>
                                    <div className="flex items-center">
                                        <LuChevronRight className="h-4 w-4" />
                                        <Link to={'/admin/donations'} className=" text-sm font-medium text-gray-800 hover:underline md:ml-2"> Donations </Link>

                                    </div>
                                </li>

                            </ol>
                        </nav>
                    </div>

                    <div className='p-4 grid grid-cols-3 gap-4'>
                        <div className='col-span-2'>
                            co
                        </div>
                        <div>
                            e
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories