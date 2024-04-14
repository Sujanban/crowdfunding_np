import { Routes, Route } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Index from './pages/Index'
import axios from "axios"
import { Toaster } from "react-hot-toast"
import Dashboard from './pages/Dashboard'
import { UserContextProvider } from './contexts/userContext'
import Profile from './pages/Profile'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { CampaignContextProvider } from './contexts/campaignContext';
import ManageFundraiserCategory from './pages/backend/ManageFundraiserCategory'
import EditCategory from './pages/backend/EditCategory'
import CreateCampaign from './pages/CreateCampaign'
import Campaign1 from './pages/campaign/Campaign1'
import Campaign2 from './pages/campaign/Campaign2'
import Campaign3 from './pages/campaign/Campaign3'
import Campaign4 from './pages/campaign/Campaign4'
import Campaign5 from './pages/campaign/Campaign5'
import Search from './pages/Search'
import Explore from './pages/Explore'
import Howitworks from './pages/Howitworks'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Campaign from './pages/Campaign'
import Error404 from './pages/Error404'
import MyCampaign from './pages/MyCampaign'
import ManageCampaign from './pages/ManageCampaign'



axios.defaults.baseURL = "http://localhost:5000"
axios.defaults.withCredentials = true

function App() {
  return (
    <CampaignContextProvider>
      <GoogleOAuthProvider clientId="113038173634-mal1sarh7mrqbaq1k833nt7goushh797.apps.googleusercontent.com">
        <UserContextProvider>
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
              <Route  path='/mycampaigns' element={<MyCampaign/>} />
              <Route  path='/managecampaign/:id' element={<ManageCampaign/>} />
              
              
              
              <Route path='/*' element={<Error404 />} />



              <Route path='/campaign/:id' element={<Campaign />} />



              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/createCampaign' element={<CreateCampaign />} />


              {/* campaign creation */}
              <Route path='/create/campaign/step1' element={<Campaign1 />} />
              <Route path='/create/campaign/step2' element={<Campaign2 />} />
              <Route path='/create/campaign/step3' element={<Campaign3 />} />
              <Route path='/create/campaign/step4' element={<Campaign4 />} />
              <Route path='/create/campaign/step5' element={<Campaign5 />} />


              <Route path='/manageFundraiserCategory' element={<ManageFundraiserCategory />} />
              <Route path='/editCategory/:id' element={<EditCategory />} />
              <Route path='/profile' element={<Profile />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </UserContextProvider>
      </GoogleOAuthProvider>
    </CampaignContextProvider>
  )
}

export default App
