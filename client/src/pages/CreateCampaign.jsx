import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { fetchCategory, getCategories } from '../app/feature/categorySlice'
import { postCamaign } from '../app/feature/campaignSlice'
import { FaSpinner } from "react-icons/fa6";


const CreateCampaign = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.data)
  const category = useSelector(getCategories);
  const { isLoading } = useSelector((state) => state.campaign);
  const dispatch = useDispatch();
  const [campaign, setCampaign] = useState({
    campaignOwner: user._id,
    campaignTitle: '',
    campaignDescription: '',
    country: '',
    location: '',
    thumbnail: '',
    goalAmount: '',
    category: ''
  });

  const transformFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setCampaign({ ...campaign, thumbnail: reader.result });
      console.log(reader.result);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postCamaign(campaign)).then(res => {
      if (res.payload.message) {
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
          <form className="max-w-5xl mx-auto" onSubmit={handleSubmit}>
            <div className='p-4'>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campaign Title *</label>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Help me fund my college fee"
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
              <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder='3000$'
                onChange={(e) => setCampaign({ ...campaign, goalAmount: e.target.value })}
                value={campaign.goalAmount}
              />
            </div>

            <div className='p-4'>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Upload Image *</label>
              <input enctype="multipart/form-data" type="file" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Help me fund my college fee"
                onChange={(e) => transformFile(e)}
              />
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
              <input type="text" className="bg-gray-50 disabled:bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Help me fund my college fee"
                onChange={(e) => setCampaign({ ...campaign, campaignOwner: e.target.value })}
                disabled
                value={user.firstName + ' ' + user.lastName}
              />
            </div>

            <div className='p-4'>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location </label>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Help me fund my college fee"
                onChange={(e) => setCampaign({ ...campaign, location: e.target.value })}
                value={campaign.location}
              />
            </div>

            <div className='p-4'>
              <button type='submit' disabled={isLoading} className='w-full p-3 bg-yellow-600 transition-all duration-400 rounded text-white hover:bg-yellow-700'>{isLoading ? <FaSpinner className='mx-auto animate-spin' /> : 'Create Campaign'}</button></div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default CreateCampaign