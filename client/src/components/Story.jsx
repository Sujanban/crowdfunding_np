import React, { useEffect } from 'react'
import { GoPeople } from "react-icons/go";
import { formatDate, formatTime } from '../utils/dateFormater';

const Story = ({ story }) => {
    return (
        <div>
            {
                story &&
                <>
                    <h1 className='py-2 font-medium'>Updates:</h1>
                    {
                        story.map((item) =>
                            <div key={item._id} className='m-1 flex space-x-8'>
                                <div>
                                    <GoPeople size={25} className='text-emerald-600' />
                                </div>
                                <div>
                                    <h1 className='text-black font-black capitalize'>{item?.userId?.firstName} {item?.userId?.lastName}</h1>
                                    <p className='pl-1 text-slate-600'>{item.updateContent}</p>
                                    <p className='pl-1 text-xs'>{formatDate(item.createdAt)} - {formatTime(item.createdAt)}</p>
                                </div>
                            </div>
                        )
                    }
                </>
            }
        </div>
    )
}

export default Story