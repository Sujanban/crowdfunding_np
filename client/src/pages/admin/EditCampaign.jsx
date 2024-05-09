import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/admin/Navbar'
import { fetchCategory, getCategories } from '../../app/feature/categorySlice'
import { updateCampaign } from '../../app/feature/campaignSlice'
import axios from 'axios'
import { LuChevronRight } from "react-icons/lu";
import Search from '../../components/admin/Search'
import { FaSpinner } from "react-icons/fa6";
import {toast} from 'react-hot-toast'

const EditCampaign = () => {
  const navigate = useNavigate();
  const category = useSelector(getCategories);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [users, setUsers] = useState([]);
  const [campaignn, setCampaignn] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);
    e.preventDefault();
    dispatch(updateCampaign(campaignn)).then(res => {
      setIsLoading(false);
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

  const fetchAllUsers = async () => {
    try {
      const res = await axios.get('/api/user/users')
      if (res.data.error) {
        toast.error(res.data.error)
      } else {
        setUsers(res.data)
      }
    } catch (err) {
      console.log("Server Error while fetching API " + err);
    }
  }

  // fetching cateories on page load
  useEffect(() => {
    dispatch(fetchCategory());
    fetchCampaign(id);
    fetchAllUsers();
  }, [])

  return (
    <div className='flex max-w-7xl mx-auto'>
      <Navbar />
      <div className='w-full'>
        <Search />
        <div className='p-8 h-[90vh] overflow-y-auto'>
          {/* Breadcrumbs */}
          <div className='p-4'>
            <nav className="w-full flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                  <Link to={"/admin/dashboard"} className=" inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2" >Dashboard</Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <LuChevronRight className="h-4 w-4" />
                    <Link to={'/admin/campaigns'} className=" text-sm font-medium text-gray-800 hover:underline md:ml-2"> Campaigns </Link>
                  </div>
                </li>
                <li>
                  <div className="flex items-center">
                    <LuChevronRight className="h-4 w-4" />
                    <Link to={''} className=" text-sm font-medium text-gray-800 hover:underline md:ml-2"> Edit Campaigns </Link>
                  </div>
                </li>

              </ol>
            </nav>
          </div>

          {/* User Input */}
          <div className='p-4'>
            <div className='px-2 flex'>
              <h1 className='text-xl font-semibold border-b-2 border-yellow-600'>Edit Campaign Details</h1>
            </div>

            <form className="p-2" onSubmit={handleUpdate}>
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

              <div className='py-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={campaignn.status}
                  onChange={(e) => setCampaignn({ ...campaignn, status: e.target.value })}>
                  <option value='active' >Active</option>
                  <option value='completed' >Completed</option>
                </select>
              </div>

              {/* campaign owner */}
              <div className='py-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Campaign Creator *</label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={campaignn.campaignOwner?._id}
                  onChange={(e) => setCampaignn({ ...campaignn, campaignOwner: e.target.value })}>
                    
                  {
                    users && users.map((user, index) =>
                      <option key={index} value={user._id} >{user.firstName + " " + user.lastName}</option>
                    )
                  }
                </select>
              </div>

              <div className='py-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location </label>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Help me fund my college fee"
                  onChange={(e) => setCampaignn({ ...campaignn, location: e.target.value })}
                  value={campaignn.location}
                />
              </div>

              <div className='py-4'>
                <button type='submit' disabled={isLoading} className='flex items-center px-4 py-3 text-sm bg-emerald-600 transition-all duration-300 rounded-xl text-white hover:bg-emerald-700'>
                  Update Campaign {isLoading && <FaSpinner className='animate-spin' />}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditCampaign