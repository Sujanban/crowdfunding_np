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



const EditCampaign = () => {
  const navigate = useNavigate();
  const category = useSelector(getCategories);
  const dispatch = useDispatch();
  const { id } = useParams();
  const user = useSelector((state) => state.user.data)



  const [campaignn, setCampaignn] = useState({});

  const transformFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setCampaignn({ ...campaignn, thumbnail: reader.result });
      console.log(reader.result);
    };
  };


  // updaing campaign
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateCampaign(campaignn)).then(res => {
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

      <nav className="w-full p-8 max-w-7xl mx-auto flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              to={"/mycampaigns"}
              className="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2"
            >
              <LuHome className="mr-4 h-4 w-4" />
              Campaign
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <LuChevronRight className="h-4 w-4" />
              <Link to={'/managecampaign/' + id} className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
                Manage Campaign
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

      <div className='bg-gray-50 rounded w-full h-full '>
        <div className='  mx-auto max-w-7xl'>
          <div className='px-8 py-20 flex justify-center '>
            <h1 className=' text-2xl font-semibold border-b-2 border-green-600'>Edit Campaign Details</h1>
          </div>



          <form className='p-8 py-20  bg-white' onSubmit={handleUpdate}>
            <div>
              <div className=' grid grid-cols-3 borderr-b border-slate-400'>
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
                      onChange={(e) => setCampaignn({ ...campaignn, campaignTitle: e.target.value })}
                      value={campaignn.campaignTitle}
                    />
                  </div>
                  <div className='grid gap-2'>
                    <label>Fundraising Story *</label>
                    <textarea
                      className='p-3 placeholder:text-green-800 text-sm outline-none border border-green-500 rounded focus:ring-1 focus:ring-green-600 focus:ring-offset-1'
                      placeholder='Help for treatment of cancer'
                      cols="30"
                      rows="5"
                      onChange={(e) => setCampaignn({ ...campaignn, campaignDescription: e.target.value })}
                      value={campaignn.campaignDescription}
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
                      type="file"
                      onChange={(e) => transformFile(e)}
                      size="60"
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
                    <select value={campaignn.category} className='p-3 placeholder:text-green-800 text-sm outline-none border border-green-500 rounded focus:ring-1 focus:ring-green-600 focus:ring-offset-1' onChange={(e) => setCampaignn({ ...campaignn, category: e.target.value })}>
                      {category && category.map((item, index) => (
                        <option key={index} value={item.category} >{item.category}</option>
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
                      onChange={(e) => setCampaignn({ ...campaignn, goalAmount: e.target.value })}
                      value={campaignn.goalAmount}
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
                    <input className='p-3 disabled:bg-gray-200 placeholder:text-green-800 text-sm outline-none border border-green-500 rounded focus:ring-1 focus:ring-green-600 focus:ring-offset-1'
                      type="text"
                      placeholder='Sam Sulek'
                      onChange={(e) => setCampaignn({ ...campaignn, campaignOwner: e.target.value })}
                      disabled
                      value={user.firstName + ' ' + user.lastName}
                    />
                  </div>
                  <div className='grid gap-2'>
                    <label>Country *</label>
                    <input className='p-3 placeholder:text-green-800 text-sm outline-none border border-green-500 rounded focus:ring-1 focus:ring-green-600 focus:ring-offset-1'
                      type="text"
                      placeholder='Nepal'
                      onChange={(e) => setCampaignn({ ...campaignn, country: e.target.value })}
                      value={campaignn.country}
                    />
                  </div>
                  <div className='grid gap-2'>
                    <label>Address Line*</label>
                    <input
                      className='p-3 placeholder:text-green-800 text-sm outline-none border border-green-500 rounded focus:ring-1 focus:ring-green-600 focus:ring-offset-1'
                      type="text"
                      placeholder='Sundarharaich 5 Morang, Province 1 , Nepal, 58071'
                      onChange={(e) => setCampaignn({ ...campaignn, location: e.target.value })}
                      value={campaignn.location}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='px-8 grid grid-cols-3'>
              <div className='col-span-1'>

              </div>
              <div className='w-full  col-span-2'>
                <button type='submit' className='w-full p-3 bg-yellow-600 transition-all duration-400 rounded text-white hover:bg-yellow-700'>Update</button>
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default EditCampaign