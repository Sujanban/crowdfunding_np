import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../../components/admin/Navbar'
import Search from '../../components/admin/Search'
import { fetchCategory, getCategories } from '../../app/feature/categorySlice'
import { postCampaign } from '../../app/feature/campaignSlice'
import { LuChevronRight } from "react-icons/lu";
import axios from 'axios'
import Loader from '../../components/Loader'


const CreateCampaign = () => {
  const navigate = useNavigate();
  const userId = useSelector((state) => state.user.data._id);
  const category = useSelector(getCategories);
  const { isLoading } = useSelector((state) => state.campaign);
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const [campaign, setCampaign] = useState({
    campaignOwner: userId,
    campaignTitle: '',
    campaignDescription: '',
    location: '',
    expiryDate: '',
    thumbnail: '',
    goalAmount: '',
    category: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postCampaign(campaign)).then(res => {
      if (res.payload.message) {
        navigate('/admin/campaigns')
      }
    })
  }

  const fetchAllUsers = async () => {
    try {
      const res = await axios.get('/api/user/users')
      if (res.data.error) {
        toastr.error(res.data.error)
      } else {
        setUsers(res.data)
      }
    } catch (err) {
      console.log("Server Error while fetching API " + err);
    }
  }

  const transformFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setCampaign({ ...campaign, thumbnail: reader.result });
    };
  };

  // fetching cateories on page load
  useEffect(() => {
    dispatch(fetchCategory());
    fetchAllUsers();
  }, [])

  return (
    <div className='flex max-w-7xl mx-auto '>
      {
        isLoading && <Loader />
      }
      <Navbar />
      <div className='w-full'>
        <Search />
        <div className='p-4 h-[90vh] overflow-y-auto'>
          <div className=' mx-auto'>
            <div className='md:p-8'>
              <nav className="w-full flex">
                <ol className="inline-flex items-center md:space-x-3 flex-wrap">
                  <li className="inline-flex items-center">
                    <Link to={"/admin/dashboard"} className=" inline-flex text-xs sm:text-sm font-medium text-gray-800 hover:underline md:ml-2" >Dashboard</Link>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <LuChevronRight className="h-4 w-4" />
                      <Link to={'/admin/campaigns'} className=" text-xs sm:text-sm font-medium text-gray-800 hover:underline md:ml-2"> Campaigns </Link>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <LuChevronRight className="h-4 w-4" />
                      <Link to={''} className=" text-xs sm:text-sm font-medium text-gray-800 hover:underline md:ml-2"> Create Campaign </Link>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
            <div className='py-2 md:px-8  flex text-left '>
              <h1 className=' text-sm md:text-md font-semibold border-b-2 border-yellow-600'>Create Campaign</h1>
            </div>

            <form className="max-w-5xl mx-auto" onSubmit={handleSubmit}>
              <div className='py-2 md:p-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Campaign Title *</label>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Help me fund my college fee"
                  onChange={(e) => setCampaign({ ...campaign, campaignTitle: e.target.value })}
                  value={campaign.campaignTitle}
                />
              </div>

              <div className='py-2 md:p-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Campaign Story *</label>
                <textarea id="message" rows="12" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Start typing..."
                  onChange={(e) => setCampaign({ ...campaign, campaignDescription: e.target.value })}
                  value={campaign.campaignDescription}
                ></textarea>
              </div>

              <div className='py-2 md:p-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Campaign Expiry *</label>
                <input type="date" min={new Date().toISOString().split('T')[0]} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setCampaign({ ...campaign, expiryDate: e.target.value })}
                  value={campaign.expiryDate}
                />
              </div>
              <div className='py-2 md:p-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Goal Amount *</label>
                <input type="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder='3000$'
                  onChange={(e) => setCampaign({ ...campaign, goalAmount: e.target.value })}
                  value={campaign.goalAmount}
                />
              </div>

              <div className='py-2 md:p-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Thumbnail URL *</label>
                <input type="file" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Help me fund my college fee"
                  onChange={(e) => transformFile(e)}
                />
              </div>

              <div className='py-2 md:p-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Select Category *</label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" value={campaign.category} onChange={(e) => setCampaign({ ...campaign, category: e.target.value })}>
                  <option value="">Select a category</option>
                  {category && category.map((item, index) => (
                    <option key={index} value={item.category} >{item.category}</option>
                  ))}
                </select>
              </div>

              <div className='py-2 md:p-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Campaign Creator *</label>
                <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={campaign.campaignOwner}
                  onChange={(e) => setCampaign({ ...campaign, campaignOwner: e.target.value })}>
                  {
                    users && users.map((user, index) =>
                      <option key={index} value={user._id} >{user.firstName + " " + user.lastName}</option>
                    )
                  }
                </select>
              </div>

              <div className='py-2 md:p-4'>
                <label className="block mb-2 text-sm font-medium text-gray-900 ">Location </label>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Help me fund my college fee"
                  onChange={(e) => setCampaign({ ...campaign, location: e.target.value })}
                  value={campaign.location}
                />
              </div>

              <div className='py-2 md:p-4'>
                <button type='submit' disabled={isLoading} className='flex items-center px-4 py-3 text-sm bg-emerald-600 transition-all duration-300 rounded-xl text-white hover:bg-emerald-700'>
                  Create Campaign
                </button></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateCampaign