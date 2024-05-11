import React, { useEffect } from 'react'
import { GoPeople } from "react-icons/go";
import { formatDate, formatTime } from '../utils/dateFormater';

const Story = ({ story }) => {
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
                                        <p className='ml-2 capitalize'>{item?.userId?.firstName} {item?.userId?.lastName}</p>
                                        <p className='ml-2'>{item.updateContent}</p>
                                        <p className='ml-2 text-xs text-gray-400'>{formatDate(item.createdAt)} - {formatTime(item.createdAt)}</p>
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