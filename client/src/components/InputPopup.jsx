import React, { useState } from 'react'

const InputPopup = ({setToggle}) => {
    // const [toggle, setToggle] = useState(false)
    
    const handleSubmit = (e) => {
        e.preventDefault()
        setToggle(false)
    }
    return (
        <div className='h-screen absolute w-full bg-blend-saturation backdrop-blur-sm'>
            <div className='absolute bg-slate-50 p-4 text-center transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2'>
            <form className='p-4 border bg-white rounded'>
                <div className='p-4 text-left grid max-w-5xl'>
                    <label className='p-2 text-xl'>Category</label>
                    <div>
                        <input className='m-2 p-2 rounded ' type="text" placeholder='Enter Category' />
                        <input onClick={handleSubmit} className='p-2 bg-slate-800 text-white rounded-md inline-flex' type="submit" value='Update' />
                    </div>
                </div>
            </form>
        </div>
        </div>
    )
}

export default InputPopup