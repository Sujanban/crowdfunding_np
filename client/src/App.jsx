import { Routes, Route } from 'react-router-dom'
import './App.css'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Index from './pages/Index'
import axios from "axios"
import { Toaster } from "react-hot-toast"
import Dashboard from './pages/Dashboard'
import { UserContextProvider } from './contexts/userContext'

axios.defaults.baseURL = "http://localhost:5000"
axios.defaults.withCredentials = true

function App() {
  return (
    <UserContextProvider>
      <div className='leading-relaxed'>
        <Toaster position='top-right' toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </UserContextProvider>
  )
}

export default App
