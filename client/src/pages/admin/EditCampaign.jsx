import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/admin/Navbar'
import { fetchCategory, getCategories } from '../../app/feature/categorySlice'
import { updateCampaign, deleteCampaign } from '../../app/feature/campaignSlice'
import axios from 'axios'

import { LuHome, LuChevronRight } from "react-icons/lu";
import Search from '../../components/admin/Search'



const EditCampaign = () => {
  const navigate = useNavigate();
  const category = useSelector(getCategories);
  const dispatch = useDispatch();
  const { id } = useParams();



  const [campaignn, setCampaignn] = useState({});
  // updaing campaign
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateCampaign(campaignn)).then(res => {
      if (res.payload.message) {
        navigate('/admin/campaigns')
      }
    })

  }


  // fetching campaign from id
  const fetchCampaign = async (id) => {
    try {
      const res = await axios.get(`/api/campaign/getCampaign/${id}`);
      setCampaignn(res.data);
    } catch (error) {
      console.log("Server Error while fetching API " + error);
    }
  }

  // fetching cateories on page load
  useEffect(() => {
    dispatch(fetchCategory());
    fetchCampaign(id);
  }, [])
  return (
    <div className='flex'>
      <Navbar />
      <div className='w-full'>
        <Search />
        <div className='h-[90vh] overflow-y-auto'>
          <nav className="w-full p-8 flex" >
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  to={"/"}
                  className="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2"
                >
                  <LuHome className="mr-4 h-4 w-4" />
                  Dashboard
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <LuChevronRight className="h-4 w-4" />
                  <Link to={'/managecampaign/' + id} className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
                    Campaigns
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <LuChevronRight className="h-4 w-4" />
                  <Link to={'/editcampaign/' + id} className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
                    Edit Campaign
                  </Link>
                </div>
              </li>
            </ol>
          </nav>

          <div className='p-8 max-w-5xl mx-auto0'>
            <div className='p-4 flex '>
              <h1 className=' text-xl font-semibold border-b-2 border-green-600'>Edit Campaign Details</h1>
            </div>
            <form className="" onSubmit={handleUpdate}>
              <div className='p-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campaign Title *</label>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Help me fund my college fee"
                  onChange={(e) => setCampaignn({ ...campaignn, campaignTitle: e.target.value })}
                  value={campaignn.campaignTitle}
                />
              </div>

              <div className='p-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campaign Story *</label>
                <textarea id="message" rows="12" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Start typing..."
                  onChange={(e) => setCampaignn({ ...campaignn, campaignDescription: e.target.value })}
                  value={campaignn.campaignDescription}
                ></textarea>
              </div>

              <div className='p-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Goal Amount *</label>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder='3000$'
                  onChange={(e) => setCampaignn({ ...campaignn, goalAmount: e.target.value })}
                  value={campaignn.goalAmount}
                />
              </div>

              <div className='p-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thumbnail URL *</label>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Help me fund my college fee"
                  onChange={(e) => setCampaignn({ ...campaignn, thumbnail: e.target.value })}
                  value={campaignn.thumbnail}
                />
              </div>

              <div className='p-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campaign Video </label>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Help me fund my college fee"
                  onChange={(e) => setCampaignn({ ...campaignn, videoUrl: e.target.value })}
                  value={campaignn.videoUrl} />
              </div>

              <div className='p-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your country</label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={campaignn.category} onChange={(e) => setCampaignn({ ...campaignn, category: e.target.value })}>

                  {category && category.map((item, index) => (
                    <option key={index} value={item.category} >{item.category}</option>
                  ))}
                </select>
              </div>

              <div className='p-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campaign Creator * </label>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Help me fund my college fee"
                  onChange={(e) => setCampaignn({ ...campaignn, campaignOwner: e.target.value })}
                  value={campaignn.campaignOwner}

                />
              </div>

              <div className='p-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location </label>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Help me fund my college fee"
                  onChange={(e) => setCampaignn({ ...campaignn, location: e.target.value })}
                  value={campaignn.location}
                />
              </div>

              <div className='p-4'>
                <input type="submit" value='Update Campaign'
                  className=' px-4 py-3 text-sm bg-green-600 transition-all duration-400 rounded-lg text-white hover:bg-yellow-700' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditCampaign