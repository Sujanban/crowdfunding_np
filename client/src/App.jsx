import { Routes, Route } from 'react-router-dom'
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



axios.defaults.baseURL = "http://localhost:5000"
axios.defaults.withCredentials = true

function App() {
  return (
    <GoogleOAuthProvider clientId="113038173634-mal1sarh7mrqbaq1k833nt7goushh797.apps.googleusercontent.com">
      <div className='leading-relaxed'>
        <Toaster position='top-right' toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/explore' element={<Explore />} />
          <Route path='/howitworks' element={<Howitworks />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/search' element={<Search />} />

          {/* logged user routes */}
          <Route path='/mycampaigns' element={<MyCampaign />} />
          <Route path='/managecampaign/:id' element={<ManageCampaign />} />
          <Route path='/editcampaign/:id' element={<EditCampaign />} />
          <Route path='/campaignStoryUpdates/:id' element={<CampaignStoryUpdates />} />




          <Route path='/*' element={<Error404 />} />



          <Route path='/campaign/:id' element={<Campaign />} />



          <Route path='/createCampaign' element={<CreateCampaign />} />


          {/* campaign creation */}


          <Route path='/profile' element={<Profile />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </GoogleOAuthProvider>
  )
}

export default App
