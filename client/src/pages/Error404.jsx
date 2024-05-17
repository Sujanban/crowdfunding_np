import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <>
      <Navbar />
      <div className='w-full'>
        <section class="max-w-7xl mx-auto  px-8 py-12 ">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center">
              <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">404</h1>
              <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">Something's missing.</p>
              <p class="mb-4 text-lg font-light text-gray-500">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
              <Link to="/" class="px-4 py-3 bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 text-white rounded-xl">Back to Homepage</Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Error404