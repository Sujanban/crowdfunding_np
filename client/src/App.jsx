import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Index from './pages/Index'
import axios from "axios"
import { Toaster } from "react-hot-toast"
import Profile from './pages/Profile'
import { GoogleOAuthProvider } from '@react-oauth/google';
import CreateCampaign from './pages/CreateCampaign'
import Search from './pages/Search'
import Explore from './pages/Explore'
import Howitworks from './pages/Howitworks'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Campaign from './pages/Campaign'
import Error404 from './pages/Error404'
import MyCampaign from './pages/MyCampaign'
import ManageCampaign from './pages/ManageCampaign'
import CampaignStoryUpdates from './pages/CampaignStoryUpdates'
import EditCampaign from './pages/EditCampaign'
import { useSelector } from 'react-redux'
import SearchResult from './pages/SearchResult'
import ManageCategory from './pages/ManageCategory'
import Dashboard from './pages/admin/Dashboard'
import Campaigns from './pages/admin/Campaigns'
import AdminEditCampaign from './pages/admin/EditCampaign'
import AdminCreateCampaign from './pages/admin/CreateCampaign'
import Categories from './pages/admin/Categories'
import AdminEditCategory from './pages/admin/EditCategory'
import Users from './pages/admin/Users'
import Success from './pages/Success'
import Failed from './pages/Failed'
import Donations from './pages/admin/Donations'
import Donation from './pages/admin/Donation'
import UserDonation from './pages/Donations'
import ViewCollectedDonations from './pages/ViewCollectedDonations'








axios.defaults.baseURL = "http://localhost:5000"
axios.defaults.withCredentials = true

function App() {
  const user = useSelector(state => state.user.data)
  return (
    <GoogleOAuthProvider clientId="113038173634-mal1sarh7mrqbaq1k833nt7goushh797.apps.googleusercontent.com">
      <div className='leading-relaxed'>
        <Toaster position='top-right' toastOptions={{ duration: 2000 }} />
        <Routes>
          {/* general routes */}
          <Route path='/' element={<Index />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/campaign/:id' element={<Campaign />} />
          <Route path='/howitworks' element={<Howitworks />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/s' element={<Search />} />
          <Route path='/search/:searchTerm' element={<SearchResult />} />


          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/*' element={<Error404 />} />

          {/* logged user routes */}
          {/* admin access */}
          <Route path='/admin/dashboard' element={user && user.role===1 ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path='/admin/campaigns' element={user && user.role===1 ? <Campaigns /> : <Navigate to="/login" />} />
          <Route path='/admin/createcampaign' element={user && user.role===1 ? <AdminCreateCampaign /> : <Navigate to="/login" />} />
          <Route path='/admin/editcampaign/:id' element={user && user.role===1 ? <AdminEditCampaign /> : <Navigate to="/login" />} />
          <Route path='/admin/categories' element={user && user.role===1 ? <Categories /> : <Navigate to="/login" />} />
          <Route path='/admin/editcategory/:id' element={user && user.role===1 ? <AdminEditCategory /> : <Navigate to="/login" />} />
          <Route path='/admin/users' element={user && user.role===1 ? <Users /> : <Navigate to="/login" />} />
          <Route path='/admin/donations' element={user && user.role===1 ? <Donations /> : <Navigate to="/login" />} />
          <Route path='/admin/donations/donation/:id' element={user && user.role===1 ? <Donation /> : <Navigate to="/login" />} />



          {/* general user access */}
          <Route path='/mycampaigns' element={user ?<MyCampaign /> : <Navigate to="/login"/>} />
          <Route path='/managecampaign/:id' element={user ? <ManageCampaign />: <Navigate to="/login"/>} />
          <Route path='/manageCategory' element={user ? <ManageCategory />: <Navigate to="/login"/>} />

          <Route path='/editcampaign/:id' element={user ? <EditCampaign /> : <Navigate to="/login"/>} />
          <Route path='/campaignStoryUpdates/:id' element={user ? <CampaignStoryUpdates /> : <Navigate to="/login"/>} />
          <Route path='/createCampaign' element={ user ? <CreateCampaign/> : <Navigate to="/login"/>} />
          <Route path='/profile' element={user ? <Profile /> : <Navigate to="/login" />} />
          <Route path='/donations' element={user ? <UserDonation /> : <Navigate to="/login" />} />
          <Route path='/viewDonations/:id' element={user ? <ViewCollectedDonations /> : <Navigate to="/login" />} />

          <Route path='/success' element={<Success />} />
          <Route path='/failed' element={<Failed />} />
        </Routes>
      </div>
    </GoogleOAuthProvider>
  )
}

export default App
