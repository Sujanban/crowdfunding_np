import React from 'react'
import warning from '../assets/images/warning.png'
import { useDispatch } from 'react-redux'
import { deleteCampaign } from '../app/feature/campaignSlice';
import { deleteCategory } from '../app/feature/categorySlice';

const WarningPopup = ({ setPopupVisible, id, delCategory, delCampaign }) => {
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        if (delCategory) {
            dispatch(deleteCategory(id));
        }

        if (delCampaign) {
            dispatch(deleteCampaign(id));
        }
        setPopupVisible(false)
    }
    return (
        <div className='w-full transition-opacity  backdrop-blur-sm bg-black/10 h-full fixed top-0 left-0 z-50 flex justify-center items-center'>
            <div className='popup bg-white sm:px-4 sm:py-2 max-w-[250px] sm:max-w-md text-center rounded-xl shadow-xl '>
                <img className=' w-16 sm:w-auto mx-auto' src={warning} alt="" />
                <h1 className='p-2 sm:text-xl font-medium'>Are you sure?</h1>
                <hr />
                <p className='p-2 text-slate-600'>Deleting will permanently remove this campaign from our platform. <span className='text-red-500 font-medium'>This cannot be undone!</span></p>
                <hr />
                <div className='text-xs sm:text-sm p-2 sm:p-4 flex items-center justify-end space-x-2'>
                    <button onClick={() => setPopupVisible(false)} className='px-4 py-2 border-2 rounded-xl bg-emerald-600  text-white'>Cancel</button>
                    <button onClick={()=> handleDelete(id)} className='px-4 py-2 border-2 rounded-xl border-orange-600 text-orange-600'>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default WarningPopup