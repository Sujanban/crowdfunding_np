import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { fetchStory } from '../app/feature/storySlice';
import { GoPeople } from "react-icons/go";

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
                    <h1 className='py-2 font-bold'>Updates from the Campaigner</h1>
                    <div className='px-4 '>
                        {
                            story && story.map((item, index) =>
                                <div key={index} className='flex p-2'>
                                    <GoPeople size={30} />
                                    <div className='px-2'>
                                        <p className='ml-2'>{item.updateContent}</p>
                                        <p className='ml-2 text-red-600'>Updated at :{item.createdAt}</p>
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