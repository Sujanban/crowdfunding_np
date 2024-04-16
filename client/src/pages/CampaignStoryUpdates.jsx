import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { GoPeople } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSingleCampaign, getCampaigns, updateCampaignStory } from '../app/feature/campaignSlice'
import { useParams } from 'react-router-dom'
import Loading from '../components/Loading'

const CampaignStoryUpdates = () => {
  const { id } = useParams();
  const { error, data, isLoading } = useSelector(state => state.campaign);
  console.log(data)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleCampaign(id))
  }, [])

  // form state
  const [story, setStory] = useState({
    campaignId: id,
    updateContent: ''
  });
  console.log(story)


  // handling story update
  const handleStoryUpdate = (e) => {
    e.preventDefault();
    dispatch(updateCampaignStory(story))
  }
  if (isLoading) {
    return <div className='w-full flex justify-center items-center h-screen text-2xl'>
      <Loading />
    </div>
  }


  return (

    <div className='bg-gray-100'>
      <Navbar />

      <div className=' max-w-7xl mx-auto w-full'>

        <div className=' px-8 py-20 flex justify-center '>
          <h1 className='text-2xl font-semibold border-b-2 border-green-600 text-center'>Update your Progress</h1>
        </div>

        <div className='relative px-8 py-12 grid grid-cols-3 gap-4'>
          <div className='bg-green-500 p-4 rounded'>
            {/* <img className='w-12 h-12 rounded-full object-cover' src="https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp" alt="" /> */}

            <h1 className='py-4 text-xl'>Organizer</h1>
            <div className='flex  space-x-4'>
              <GoPeople size={30} />
              <div>
                <h1>Sam Sulek </h1>
                <p>Software Engineer Texes,USA</p>
                <p className='text-slate-600'>Organizer</p>
              </div>
            </div>
          </div>
          <div className='p-4 bg-white col-span-2'>
            <form onSubmit={handleStoryUpdate} className='grid gap-8' action="">
              <div className='grid gap-2'>
                <label className='font-bold'>Selected Campaign</label>
                <input
                  disabled
                  className='bg-gray-200 p-3 placeholder:text-green-800 text-sm outline-none border border-green-500 rounded focus:ring-1 focus:ring-green-600 focus:ring-offset-1 '
                  type="text"
                  placeholder='Help for treatment of cancer'
                  value={data?.campaignTitle}
                />
              </div>
              <div className='grid gap-2'>
                <label className='font-bold'>Write an Update*</label>
                <textarea
                  className='p-3 placeholder:text-green-800 text-sm outline-none border border-green-500 rounded focus:ring-1 focus:ring-green-600 focus:ring-offset-1'
                  placeholder='Thankyou for all the donations. We started our project and are in a midway...'
                  cols="30"
                  rows="5"
                  onChange={(e) => setStory({ ...story, updateContent: e.target.value })}
                ></textarea>
                <p className='text-xs text-red-600'>Note*: Updates will be posted according to the current timestamp</p>
              </div>
              <div>
                <button type='submit' className='px-4 py-2 bg-green-600 text-white  rounded'>Post Updates</button>
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