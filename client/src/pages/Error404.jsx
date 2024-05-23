import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <>
      <Navbar />
      <div className='w-full h-[80vh] flex items-center justify-center'>
        <div className='text-center'>
          <h1 class="font-semibold text-5xl">404</h1>
          <p class="py-2 font-medium">Page not Found!</p>
          <p class=" max-w-md">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
          <div className='py-2 flex items-center justify-center'>
            <Link to="/" class="px-4 py-3 bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 text-white rounded-xl">Back to Homepage</Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Error404