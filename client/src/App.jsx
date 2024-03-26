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
