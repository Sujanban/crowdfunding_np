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
import ForgotPassword from './pages/ForgotPassword'

import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUserProfile } from './app/feature/userSlice'
import Banks from './pages/admin/Banks'
import Payouts from './pages/admin/Payouts'
import ResetPassword from './pages/ResetPassword'







axios.defaults.baseURL = "http://localhost:5000"
axios.defaults.withCredentials = true

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector(state => state.user.data)


useEffect(()=>{
  dispatch(fetchUserProfile());

},[])


  return (
    <GoogleOAuthProvider clientId="113038173634-mal1sarh7mrqbaq1k833nt7goushh797.apps.googleusercontent.com">
      <div className='leading-relaxed'>
        <Toaster position='bottom-center' toastOptions={{ duration: 2000 , success: { iconTheme: { primary: '#059669', secondary: 'white' }} }} />
        <Routes>
          


          {/* general user access */}
          {isAuthenticated ?
            <>
              <Route path='/mycampaigns' element={<MyCampaign />} />
              <Route path='/managecampaign/:id' element={<ManageCampaign />} />
              <Route path='/manageCategory' element={<ManageCategory />} />
              <Route path='/editcampaign/:id' element={<EditCampaign />} />
              <Route path='/campaignStoryUpdates/:id' element={<CampaignStoryUpdates />} />
              <Route path='/createCampaign' element={<CreateCampaign />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/donations' element={<UserDonation />} />
              <Route path='/viewDonations/:id' element={<ViewCollectedDonations />} />
              <Route path='/success' element={<Success />} />
              <Route path='/failed' element={<Failed />} />
              <Route path='/*' element={<Login />} />
            </>
            :
            <>
              <Route path='/login' element={<Login />} />
            </>
          }

          {user?.role === 1 && isAuthenticated && 
          <>
            <Route path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/campaigns' element={<Campaigns />} />
            <Route path='/admin/createcampaign' element={<AdminCreateCampaign />} />
            <Route path='/admin/editcampaign/:id' element={<AdminEditCampaign />} />
            <Route path='/admin/categories' element={<Categories />} />
            <Route path='/admin/editcategory/:id' element={<AdminEditCategory />} />
            <Route path='/admin/users' element={<Users />} />
            <Route path='/admin/donations' element={<Donations />} />
            <Route path='/admin/donations/donation/:id' element={<Donation />} />
            <Route path='/admin/banks' element={<Banks />} />
            <Route path='/admin/payouts' element={<Payouts />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/*' element={<Login />} />
          </>
          }
          <Route render={() => <Navigate to="/" />} />

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
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
          <Route path='/*' element={<Error404 />} />


        </Routes>
      </div>
    </GoogleOAuthProvider>
  )
}

export default App
