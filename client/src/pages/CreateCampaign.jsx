import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'

const CreateCampaign = () => {
  const category = useSelector((state) => state.category.data);
  console.log(category);
  const [campaign, setCampaign] = useState({
    campaignOwner: null,
    campaignTitle: null,
    campaignDescription: null,
    location: null,
    thumbnail: null,
    videoUrl: null,
    goalAmount: null,
    category: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <Navbar />
      <div className=' w-full h-full '>
        <div className='px-8 py-12 mx-auto max-w-7xl'>
          <h1 className='p-4 text-3xl font-semibold'>Create Campaign</h1>
          <div>
            <div className='p-8 grid grid-cols-3 border-b border-slate-400'>
              <div className='col-span-1'>
                <h1 className='text-xl font-medium'>Story for Fundraising *</h1>
                <p className='text-slate-600 text-sm lowercase'>Provide your storyline for fundraising</p>
              </div>
              <div className='grid col-span-2 gap-6'>
                <div className='grid gap-2'>
                  <label>Title for campaign *</label>
                  <input className='p-4 placeholder:text-green-800 text-sm outline-none border border-yellow-500 rounded ' type="text" placeholder='Help for treatment of cancer' />
                </div>
                <div className='grid gap-2'>
                  <label>Fundraising Story *</label>
                  <textarea className='p-4 placeholder:text-green-800 text-sm outline-none border border-yellow-500 rounded ' placeholder='Help for treatment of cancer' name="" id="" cols="30" rows="5" ></textarea>
                </div>
              </div>
            </div>

            <div className='p-8 grid grid-cols-3 border-b border-slate-400'>
              <div className='col-span-1'>
                <h1 className='text-xl font-medium'>Media *</h1>
                <p className='text-slate-600 text-sm lowercase'>Provide relevent Image or Video for your campaign</p>
              </div>
              <div className='grid grid-cols-2 col-span-2 gap-6'>
                <div className='grid gap-2'>
                  <label>Upload cover Image *</label>
                  <input className="w-full p-3 flex items-center justify-center border border-yellow-500 rounded cursor-pointer hiddenn"
                    name='file' id="file-upload" type="file" onChange={(e) => setCampaign({ ...campaign, thumbnail: e.target.files[0] })} size="60" />
                </div>
                <div>

                </div>

                <div className='grid gap-2'>
                  <label>Fundraising Story</label>
                  <textarea className='p-4 placeholder:text-green-800 text-sm outline-none border border-yellow-500 rounded ' placeholder='Help for treatment of cancer' name="" id="" cols="30" rows="5" ></textarea>
                </div>
              </div>
            </div>

            <div className='grid gap-2'>
              <label>Choose category *</label>
              <select className='p-4 placeholder:text-green-800 text-sm outline-none border border-yellow-500 rounded' value="">
                {category && category.map((item) => (
                  <option value={item}>{item.name}</option>
                ))}
              </select>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default CreateCampaign