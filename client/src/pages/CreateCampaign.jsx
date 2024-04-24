import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { fetchCategory, getCategories } from '../app/feature/categorySlice'
import { postCamaign } from '../app/feature/campaignSlice'

const CreateCampaign = () => {
  const navigate = useNavigate();
  const userId = useSelector((state) => state.user.data._id);
  const category = useSelector(getCategories);
  const dispatch = useDispatch();
  const [campaign, setCampaign] = useState({
    campaignOwner: userId,
    campaignTitle: '',
    campaignDescription: '',
    country: '',
    location: '',
    thumbnail: '',
    videoUrl: '',
    goalAmount: '',
    category: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postCamaign(campaign)).then(res=>{
      if(res.payload.message){
        navigate('/mycampaigns')
      }
    })
  }


  // fetching cateories on page load
  useEffect(() => {
    dispatch(fetchCategory());
  }, [])

  return (
    <>
      <Navbar />
      <div className='bg-gray-50 rounded w-full h-full '>
        <div className='  mx-auto max-w-7xl'>
          <div className='md:px-8 my-12 md:py-20 flex justify-center '>
            <h1 className=' text-xl md:text-2xl font-semibold border-b-2 border-green-600'>Create Campaign</h1>
          </div>
          {/* <form className='p-4 md:p-8 py-12 md:py-20 shadow-md bg-white' onSubmit={handleSubmit}>
            <div>
              <div className=' md:grid grid-cols-3 borderr-b border-slate-400'>
                <div className='col-span-1'>
                  <h1 className='text-xl font-medium'>Story for Fundraising *</h1>
                  <p className='text-slate-600 text-sm lowercase'>Provide your storyline for fundraising</p>
                </div>
                <div className='grid col-span-2 gap-6'>
                  <div className='grid gap-2'>
                    <label>Fundraising Title *</label>
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
                <div className='grid grid-coools-2 col-span-2 gap-6'>
                  <div className='grid gap-2'>
                    <label>Cover Image URL*</label>
                    <input className="p-3 placeholder:text-green-800 text-sm outline-none border border-green-500 rounded focus:ring-1 focus:ring-green-600 focus:ring-offset-1"
                      name='file'
                      placeholder='Paste url of your Image'
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
                      disabled
                      placeholder={userId}
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
          </form> */}
          <form className="max-w-5xl mx-auto" onSubmit={handleSubmit}>
              <div className='p-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campaign Title *</label>
                <input type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Help me fund my college fee"
                  onChange={(e) => setCampaign({ ...campaign, campaignTitle: e.target.value })}
                  value={campaign.campaignTitle}
                />
              </div>

              <div className='p-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campaign Story *</label>
                <textarea id="message" rows="12" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Start typing..."
                  onChange={(e) => setCampaign({ ...campaign, campaignDescription: e.target.value })}
                  value={campaign.campaignDescription}
                ></textarea>
              </div>

              <div className='p-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Goal Amount *</label>
                <input type="number"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder='3000$'
                  onChange={(e) => setCampaign({ ...campaign, goalAmount: e.target.value })}
                  value={campaign.goalAmount}
                />
              </div>

              <div className='p-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thumbnail URL *</label>
                <input type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Help me fund my college fee"
                  onChange={(e) => setCampaign({ ...campaign, thumbnail: e.target.value })}
                  value={campaign.thumbnail}
                />
              </div>

              <div className='p-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campaign Video </label>
                <input type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Help me fund my college fee"
                  onChange={(e) => setCampaign({ ...campaign, videoUrl: e.target.value })}
                  value={campaign.videoUrl} />
              </div>

              <div className='p-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your country</label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={campaign.category} onChange={(e) => setCampaign({ ...campaign, category: e.target.value })}>

                  {category && category.map((item, index) => (
                    <option key={index} value={item.category} >{item.category}</option>
                  ))}
                </select>
              </div>

              <div className='p-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campaign Creator * </label>
                <input type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Help me fund my college fee"
                  onChange={(e) => setCampaign({ ...campaign, campaignOwner: e.target.value })}
                  disabled
                  value={campaign.campaignOwner}

                />
              </div>

              <div className='p-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location </label>
                <input type="text"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Help me fund my college fee"
                  onChange={(e) => setCampaign({ ...campaign, location: e.target.value })}
                  value={campaign.location}
                />
              </div>

              <div className='p-4'>
              <button type='submit' className='w-full p-3 bg-yellow-600 transition-all duration-400 rounded text-white hover:bg-yellow-700'>Create</button></div>
            </form>
        </div>
        <Footer/>
      </div>
    </>
  )
}

export default CreateCampaign