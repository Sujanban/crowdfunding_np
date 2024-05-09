import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchStory } from '../app/feature/storySlice';
import { GoPeople } from "react-icons/go";
import { formatDate,formatTime } from '../utils/dateFormater';

const Story = ({ id }) => {
    const story = useSelector((state) => state.story.data);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchStory(id));
    }, [])
    return (
        <div>
            {
                story.length > 0 &&
                <>
                    <h1 className='py-2 font-bold'>Updates:</h1>
                    <div className='px-4 '>
                        {
                            story && story.map((item, index) =>
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