import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { GoPeople } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'
import { getCampaign } from '../app/feature/campaignSlice'
import { addStory, getStories, deleteStory } from '../app/feature/storySlice'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../components/Loader'
import { formatDate, formatTime } from '../utils/dateFormater'
import { VscTrash } from 'react-icons/vsc'

const CampaignStoryUpdates = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.data);
  const stories = useSelector(state => state.story.data);
  const campaign = useSelector(state => state.campaign.data);
  const { data, isLoading } = useSelector(state => state.campaign);

  // form state
  const [story, setStory] = useState({
    campaignId: id,
    updateContent: ''
  });

  // handling story update
  const handleStoryUpdate = (e) => {
    e.preventDefault();
    dispatch(addStory(story));
    dispatch(getCampaign(id));
  }

  useEffect(() => {
    dispatch(getCampaign(id));
    dispatch(getStories(id))
  }, [])

  return (
    <div className='bg-gray-100'>
      <Navbar />
      <div className=' max-w-7xl mx-auto w-full'>
        <div className=' md:px-8 py-8 md:py-20 flex justify-center '>
          <h1 className='text-xl font-semibold border-b-2 border-green-600 text-center'>Update your Progress</h1>
        </div>

        {
          isLoading && <Loader />
        }

        <div className='relative px-4 md:px-8 py-8 md:py-12 grid md:grid-cols-3 gap-4'>
          <div className=' p-4 rounded w-full col-span-2 md:col-auto'>
            <h1 className='py-4 font-medium text-md'>Organizer</h1>
            <div className='flex space-x-4'>
              <GoPeople size={30} />
              <div className='text-sm md:text-md'>
                <h1>{campaign?.campaignOwner?.email}</h1>
                <p>{campaign?.campaignOwner?.firstName} {campaign?.campaignOwner?.lastName}</p>
              </div>
            </div>

            {/* displaying all the available story for this campaign */}
            <div>
              <h1 className='py-2 font-medium'>Updates:</h1>
              <div className=''>
                {
                  stories.map((item, index) =>
                    <div key={index} className='flex p-2 space-x-4'>
                      <GoPeople className='text-emerald-600' size={25} />
                      <div className='text-sm md:text-md flex-grow'>
                        <p className=''>{item.userId?.firstName} {item.userId?.lastName} </p>
                        <p className='py-1'>{item.updateContent}</p>
                        <p className=' text-xs text-emerald-600'>{formatDate(item.createdAt)} - {formatTime(item.createdAt)}</p>
                      </div>
                      <button onClick={() => dispatch(deleteStory(item._id))} className='ml-auto'><VscTrash size={25} className='text-red-600 bg-orange-100 p-1 rounded-full' /></button>
                    </div>
                  )
                }
              </div>
            </div>


          </div>
          <div className='p-2 md:p-4 bg-white col-span-2'>
            <form onSubmit={handleStoryUpdate} className='grid gap-8' action="">
              <div className='grid gap-2'>
                <label className='text-sm font-medium'>Selected Campaign</label>
                <input
                  disabled
                  className='bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  '
                  type="text"
                  placeholder='Help for treatment of cancer'
                  value={data?.campaignTitle}
                />
              </div>
              <div className='grid gap-2'>
                <label className='text-sm font-medium'>Write an update*</label>
                <textarea
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  '
                  placeholder='Thankyou for all the donations. We started our project and are in a midway...'
                  cols="30"
                  rows="5"
                  onChange={(e) => setStory({ ...story, updateContent: e.target.value })}
                ></textarea>
                <p className='text-xs text-slate-600'>Note*: Updates will be posted according to the current timestamp</p>
              </div>
              <div>
                <button type='submit' className='block w-full md:w-auto px-4 py-2 bg-emerald-600 transition-all duration-300 text-white hover:bg-emerald-700 rounded-xl'>Post Updates</button>
              </div>
            </form>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default CampaignStoryUpdates