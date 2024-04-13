import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import { fetchCategory, getCategories } from '../app/feature/categorySlice'
import { postCamaign } from '../app/feature/campaignSlice'

const CreateCampaign = () => {
  const category = useSelector(getCategories);
  const dispatch = useDispatch();
  const [campaign, setCampaign] = useState({
    campaignOwner: null,
    campaignTitle: null,
    campaignDescription: null,
    country: null,
    location: null,
    thumbnail: null,
    videoUrl: null,
    goalAmount: null,
    category: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log(campaign);
    dispatch(postCamaign(campaign));
  }


  // fetching cateories on page load
  useEffect(() => {
    dispatch(fetchCategory());
  }, [])

  return (
    <>
      <Navbar />
      <div className='bg-gray-100 rounded w-full h-full '>
        <div className=' px-8 py-12 mx-auto max-w-7xl'>
          <h1 className='p-4 text-3xl font-semibold'>Create Campaign</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <div className='p-8 py-12 grid grid-cols-3 borderr-b border-slate-400'>
                <div className='col-span-1'>
                  <h1 className='text-xl font-medium'>Story for Fundraising *</h1>
                  <p className='text-slate-600 text-sm lowercase'>Provide your storyline for fundraising</p>
                </div>
                <div className='grid col-span-2 gap-6'>
                  <div className='grid gap-2'>
                    <label>Title for campaign *</label>
                    <input
                      className='p-3 placeholder:text-green-800 text-sm outline-none border border-green-500 rounded focus:ring-1 focus:ring-green-600 focus:ring-offset-1 '
                      type="text"
                      placeholder='Help for treatment of cancer'
                      onChange={(e) => setCampaign({ ...campaign, campaignTitle: e.target.value })}
                      value={campaign.campaignTitle}
                    />
                  </div>
                  <div className='grid gap-2'>
                    <label>Fundraising Story *</label>
                    <textarea
                      className='p-3 placeholder:text-green-800 text-sm outline-none border border-green-500 rounded focus:ring-1 focus:ring-green-600 focus:ring-offset-1'
                      placeholder='Help for treatment of cancer'
                      cols="30"
                      rows="5"
                      onChange={(e) => setCampaign({ ...campaign, campaignDescription: e.target.value })}
                      value={campaign.campaignDescription}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className='p-8 py-12 grid grid-cols-3 borderr-b border-slate-400'>
                <div className='col-span-1'>
                  <h1 className='text-xl font-medium'>Media *</h1>
                  <p className='text-slate-600 text-sm lowercase'>Provide relevent Image or Video for your campaign</p>
                </div>
                <div className='grid grid-cols-2 col-span-2 gap-6'>
                  <div className='grid gap-2'>
                    <label>Upload cover Image *</label>
                    <input className="w-full p-2 text-sm flex items-center justify-center border border-green-500 rounded cursor-pointer focus:ring-1 focus:ring-green-600 focus:ring-offset-1"
                      name='file' id="file-upload"
                      type="text"
                      onChange={(e) => setCampaign({ ...campaign, thumbnail: e.target.value })}
                      size="60"
                    />
                  </div>
                  <div className='grid gap-2'>
                    <label>Video URL </label>
                    <input

                      className='p-3 placeholder:text-green-800 text-sm outline-none border border-green-500 rounded focus:ring-1 focus:ring-green-600 focus:ring-offset-1'
                      type="text"
                      placeholder='Paste url of your video'
                      onChange={(e) => setCampaign({ ...campaign, videoUrl: e.target.value })}
                      value={campaign.video}
                    />
                  </div>
                </div>
              </div>
              <div className='p-8 py-12 grid grid-cols-3 borderr-b border-slate-400'>
                <div className='col-span-1'>
                  <h1 className='text-xl font-medium'>Category *</h1>
                  <p className='text-slate-600 text-sm lowercase'>Provide relevent category for your campaign</p>
                </div>
                <div className='grid grid-cols-2 col-span-2 gap-6'>
                  <div className='grid gap-2'>
                    <label>Choose category *</label>
                    {/* <select className='p-3 placeholder:text-green-800 text-sm outline-none border border-green-500 rounded focus:ring-1 focus:ring-green-600 focus:ring-offset-1'>
                      {category && category.map((item, index) => (
                        <option onChange={(e) => setCampaign({ ...campaign, category: '11' })} key={index} value={item.category}>{item.category}</option>
                      ))}
                    </select> */}

                    <select className='p-3 placeholder:text-green-800 text-sm outline-none border border-green-500 rounded focus:ring-1 focus:ring-green-600 focus:ring-offset-1' onChange={(e) => setCampaign({ ...campaign, category: e.target.value })}>
                      {category && category.map((item, index) => (
                        <option key={index} value={item.category}>{item.category}</option>
                      ))}
                    </select>

                  </div>
                </div>
              </div>




              <div className='p-8 py-20 grid grid-cols-3 borderr-b border-slate-400'>
                <div className='col-span-1'>
                  <h1 className='text-xl font-medium'>Goal *</h1>
                  <p className='text-slate-600 text-sm lowercase'>Set your campaign Goal</p>
                </div>
                <div className='grid grid-cols-2 col-span-2 gap-6'>
                  <div className='grid gap-2'>
                    <label>Set campaign Goal *</label>
                    <input
                      className='p-3 placeholder:text-green-800 text-sm outline-none border border-green-500 rounded focus:ring-1 focus:ring-green-600 focus:ring-offset-1'
                      type="number"
                      placeholder='3000$'
                      onChange={(e) => setCampaign({ ...campaign, goalAmount: e.target.value })}
                      value={campaign.goalAmount}
                    />
                  </div>
                </div>
              </div>



              <div className='p-8 py-20 grid grid-cols-3 borderr-b border-slate-400'>
                <div className='col-span-1'>
                  <h1 className='text-xl font-medium'>Campaigner Details *</h1>
                  <p className='text-slate-600 text-sm lowercase'>Provide information about the fundraiser</p>
                </div>
                <div className='grid col-span-2 gap-6'>
                  <div className='grid gap-2'>
                    <label>Fundraiser *</label>
                    <input className='p-3 placeholder:text-green-800 text-sm outline-none border border-green-500 rounded focus:ring-1 focus:ring-green-600 focus:ring-offset-1'
                      type="text"
                      placeholder='Sam Sulek'
                      onChange={(e) => setCampaign({ ...campaign, campaignOwner: e.target.value })}
                      value={campaign.campaignOwner}
                    />
                  </div>
                  <div className='grid gap-2'>
                    <label>Country *</label>
                    <input className='p-3 placeholder:text-green-800 text-sm outline-none border border-green-500 rounded focus:ring-1 focus:ring-green-600 focus:ring-offset-1'
                      type="text"
                      placeholder='Nepal'
                      onChange={(e) => setCampaign({ ...campaign, country: e.target.value })}
                      value={campaign.country}
                    />
                  </div>
                  <div className='grid gap-2'>
                    <label>Address Line*</label>
                    <input
                      className='p-3 placeholder:text-green-800 text-sm outline-none border border-green-500 rounded focus:ring-1 focus:ring-green-600 focus:ring-offset-1'
                      type="text"
                      placeholder='Sundarharaich 5 Morang, Province 1 , Nepal, 58071'
                      onChange={(e) => setCampaign({ ...campaign, location: e.target.value })}
                      value={campaign.location}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='px-8 grid grid-cols-3'>
              <div className='col-span-1'>

              </div>
              <div className='w-full  col-span-2'>
                <button type='submit' className='w-full p-3 bg-yellow-600 transition-all duration-400 rounded text-white hover:bg-yellow-700'>Create</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateCampaign