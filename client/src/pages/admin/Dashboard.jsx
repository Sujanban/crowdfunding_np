import Navbar from '../../components/admin/Navbar'
import Search from '../../components/admin/Search'
import { IoIosArrowDown } from "react-icons/io";
import { TbBrandCampaignmonitor } from "react-icons/tb";
import { LiaMoneyBillWaveAltSolid } from "react-icons/lia";
import { LuChevronRight, LuHome } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { BiHome, BiUser } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampaign } from '../../app/feature/campaignSlice';
import { useEffect } from 'react';

const Dashboard = () => {
  const campaign = useSelector(state => state.campaign.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCampaign())
  }, [])
  return (
    <div className='flex w-full max-w-7xl mx-auto'>
      <Navbar />
      <div className=' w-full'>
        <Search />
        <div className='p-4 h-[90vh] overflow-y-auto'>
          <nav className="w-full px-4 py-8 flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  to={""}
                  className="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2"
                >
                  <LuHome className="mr-4 h-4 w-4" />
                  Dashboard
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <LuChevronRight className="h-4 w-4" />
                  <Link to={''} className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
                    Index
                  </Link>
                </div>
              </li>
              {/* <li aria-current="page">
                        <div className="flex items-center">
                            <LuChevronRight className="h-4 w-4" />
                            <Link to={'/editcampaign/'} className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
                                Edit Campaign
                            </Link>
                        </div>
                    </li> */}
            </ol>
          </nav>
          <div className='p-6 max-w-6xl'>
            <div className='grid grid-cols-3 gap-4'>
              <div className='p-8 relative ring-1 ring-slate-200 rounded'>
                <BiUser className='text-gray-500 absolute top-4 right-4' size={30} />
                <div>
                  <h1 className='text-xl'>Users</h1>
                  <p className='py-2 text-2xl font-semibold'>2152</p>
                  <p className='text-sm flex items-center text-red-600'><IoIosArrowDown /> <span className='px-2'>-21 in last 24 hours</span></p>
                </div>
              </div>
              <div className='p-8 relative ring-1 ring-slate-200 rounded'>
                <TbBrandCampaignmonitor className='text-gray-500 absolute top-4 right-4' size={30} />
                <div>
                  <h1 className='text-xl'>Campaigns</h1>
                  <p className='py-2 text-2xl font-semibold'>{campaign.length}</p>
                  <p className='text-sm flex items-center text-green-600'><IoIosArrowDown className='rotate-180' /> <span className='px-2'>+224 in last 24 hours</span></p>
                </div>
              </div>
              <div className='p-8 relative ring-1 ring-slate-200 rounded'>
                <LiaMoneyBillWaveAltSolid className='text-gray-500 absolute top-4 right-4' size={30} />
                <div>
                  <h1 className='text-xl'>Donations</h1>
                  <p className='py-2 text-2xl font-semibold'>103,000 $</p>
                  <p className='text-sm flex items-center text-green-600'><IoIosArrowDown className='rotate-180' /> <span className='px-2'>+23,000 in last 24 hours</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard