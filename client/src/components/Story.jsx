import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getStorys } from '../app/feature/storySlice';
import { GoPeople } from "react-icons/go";
import { formatDate, formatTime } from '../utils/dateFormater';
import { FaSpinner } from "react-icons/fa6";
import toast from 'react-hot-toast';

const Story = ({ id }) => {
    const dispatch = useDispatch();
    const story = useSelector((state) => state.story.data);
    const { errorMessage, isLoading } = useSelector((state) => state.story);

    useEffect(() => {
        dispatch(getStorys(id));
    }, [])
    if (isLoading) {
        return <FaSpinner className='text-emerald-600 animate-spin' size={25} />
    }
    return (
        <div>
            {
                story &&
                <>
                    <h1 className='py-2 font-bold'>Updates:</h1>
                    <div className='px-4 '>
                        {
                            story.map((item, index) =>
                                <div key={index} className='flex p-2'>
                                    <GoPeople className='text-emerald-600' size={25} />
                                    <div className='px-2'>
                                        <p className='ml-2'>{item.updateContent}</p>
                                        <p className='ml-2 text-sm text-emerald-600'>{formatDate(item.createdAt)} - {formatTime(item.createdAt)}</p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default Story