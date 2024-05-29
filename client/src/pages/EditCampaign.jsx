import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { fetchCategory, getCategories } from '../app/feature/categorySlice'
import { postCampaign, updateCampaign, deleteCampaign } from '../app/feature/campaignSlice'
import { CiEdit } from "react-icons/ci";
import axios from 'axios'
import { LuHome, LuChevronRight } from "react-icons/lu";
import { FaSpinner } from 'react-icons/fa6'



const EditCampaign = () => {
  const navigate = useNavigate();
  const category = useSelector(getCategories);
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) => state.user.data)
  const [isLoading, setIsLoading] = useState(false);



  const [campaignn, setCampaignn] = useState({});

  const transformFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setCampaignn({ ...campaignn, thumbnail: reader.result });
    };
  };


  // updaing campaign
  const handleUpdate = (e) => {
    e.preventDefault();
    setIsLoading(true);
    dispatch(updateCampaign(campaignn)).then(res => {
      setIsLoading(false);
      if (res.payload.message) {
        navigate('/mycampaigns')
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
    <>
      <Navbar />
      <div className='bg-gray-50 rounded w-full h-full '>
        <div className='mx-auto max-w-7xl'>
          <div className='py-12 md:py-20 flex justify-center '>
            <h1 className=' md:text-xl font-medium border-b-2 border-green-600'>Edit Campaign Details</h1>
          </div>

          <form className='px-4 md:px-8 md:py-20  bg-white' onSubmit={handleUpdate}>
            <div className='py-4'>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campaign Title *</label>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Help me fund my college fee"
                onChange={(e) => setCampaignn({ ...campaignn, campaignTitle: e.target.value })}
                value={campaignn.campaignTitle}
              />
            </div>

            <div className='py-4'>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campaign Story *</label>
              <textarea id="message" rows="12" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Start typing..."
                onChange={(e) => setCampaignn({ ...campaignn, campaignDescription: e.target.value })}
                value={campaignn.campaignDescription}
              ></textarea>
            </div>

            <div className='py-4'>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Goal Amount *</label>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder='3000$'
                onChange={(e) => setCampaignn({ ...campaignn, goalAmount: e.target.value })}
                value={campaignn.goalAmount}
              />
            </div>

            <div className='py-4'>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Thumbnail URL *</label>
              <input type="file" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Help me fund my college fee"
                onChange={(e) => transformFile(e)}
              />
              <img className='w-32' src={campaignn?.thumbnail?.url} alt="" />
            </div>

            <div className='py-4'>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select your country</label>
              <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={campaignn.category} onChange={(e) => setCampaignn({ ...campaignn, category: e.target.value })}>
                {category && category.map((item, index) => (
                  <option key={index} value={item.category} >{item.category}</option>
                ))}
              </select>
            </div>

            {/* campaign owner */}
            <div className='py-4'>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campaign Creator *</label>
              <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setCampaignn({ ...campaignn, campaignOwner: e.target.value })}
                disabled
                value={user.firstName + ' ' + user.lastName} />

            </div>

            <div className='py-4'>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location </label>
              <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Help me fund my college fee"
                onChange={(e) => setCampaignn({ ...campaignn, location: e.target.value })}
                value={campaignn.location}
              />
            </div>

            <div className='py-4'>
              <button type='submit' disabled={isLoading} className='w-full md:w-auto flex items-center justify-center px-4 py-3 text-sm bg-emerald-600 transition-all duration-300 rounded-xl text-white hover:bg-emerald-700'>
                Update Campaign {isLoading && <FaSpinner className='animate-spin' />}
              </button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default EditCampaign