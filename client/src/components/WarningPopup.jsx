import React from 'react'
import warning from '../assets/images/warning.png'
import { useDispatch } from 'react-redux'
import { deleteCampaign } from '../app/feature/campaignSlice';
import { deleteCategory } from '../app/feature/categorySlice';

const WarningPopup = ({ setPopupVisible, id, delCategory, delCampaign }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        if (delCategory) {
            dispatch(deleteCategory(id));
        }

        if (delCampaign) {
            dispatch(deleteCampaign(id));
        }
        setPopupVisible(false)
    }
    return (
        <div className='w-full transition-opacity  backdrop-blur-sm bg-white/30 h-full fixed top-0 left-0 z-50 flex justify-center items-center'>
            <div className='popup ring-1 ring-red-100 bg-white p-4 max-w-md text-center rounded shadow'>
                <img className=' mx-auto' src={warning} alt="" />
                <h1 className='p-2 text-xl font-semibold'>Are you sure?</h1>
                <hr />
                <p className='p-2 text-slate-600 font-thin'>Deleting will permanently remove this campaign from our platform. <span className='text-red-500 font-black'>This cannot be undone!</span></p>
                <hr />
                <div className='font-thin text-sm p-4 flex items-center justify-end space-x-2'>
                    <button onClick={() => setPopupVisible(false)} className='px-4 py-2 border-2 rounded bg-green-500 text-white'>Cancel</button>
                    <button onClick={handleDelete} className='px-4 py-2 border-2 rounded border-red-500 text-red-500'>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default WarningPopup