import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import create from '../assets/images/create1.png'
import campaign from '../assets/images/campaign1.png'
import money from '../assets/images/money1.png'
import CampaignGrid from '../components/CampaignGrid';
import Faq from '../components/Faq';
import BlogGrid from '../components/BlogGrid';
import CtaBanner from '../components/CtaBanner';
import CountUp from 'react-countup';
import FeaturedCampaignGrid from '../components/FeaturedCampaignGrid';


import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay";
import Hero from '../components/Hero';

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedCampaignGrid />
      <div className='px-4 py-8 md:py-20 max-w-7xl mx-auto border-2 bg-emerald-600 text-center rounded-xl'>
        <h1 className='pb-4 md:pb-8  md:text-2xl font-medium '>Fundraising on Collab takes just a few minutes</h1>
        <div className='max-w-5xl mx-auto md:grid grid-cols-3 gap-4 '>
          <div className='p-2 md:p-4'>
            <img className='mx-auto w-16 md:w-20' src={create} alt="" />
            <h1 className='font-medium '>Register Account</h1>
            <p className='text-sm clear-start '> Create a account for fundraising  with email and password.</p>
          </div>
          <div className='p-2 md:p-4'>
            <img className='mx-auto w-16 md:w-20' src={campaign} />
            <h1 className='font-medium  '>Create Campaign</h1>
            <p className='text-sm clear-start '> Enter your campaign details and start raising money.</p>
          </div>
          <div className='p-2 md:p-4'>
            <img className='mx-auto w-16 md:w-20' src={money} alt="" />
            <h1 className='font-medium  '>Withdraw Money</h1>
            <p className='text-sm clear-start '>Add your bank details and Withdraw money from your account.</p>
          </div>
        </div>
      </div>
      <CampaignGrid />


      {/* testemonial */}
      {/* <div className=' px-4 py-20  max-w-7xl mx-auto'>
        <h1 className='relative px-4 text-3xl'>Testimonials <span className='absolute left-0 bg-green-800 w-1.5 h-full'></span></h1>

        <div>
          <Swiper className='mx-auto max-w-5xl px-4 py-12'
            // install Swiper modules
            modules={[Navigation, Pagination, Autoplay, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false
            }}
            // navigation
            scrollbar={{ draggable: true, hide: true }}
          // onSwiper={(swiper) => console.log(swiper)}
          // onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide className='p-4 flex items-center gap-4'>
              <img className='w-52 h-52 rounded-full object-cover' src="https://as2.ftcdn.net/v2/jpg/01/42/20/17/1000_F_142201762_qMCuIAolgpz4NbF5T5m66KQJzYzrEbUv.jpg" alt="" />
              <span className='absolute w-6 h-6 left-0 bottom-0 rounded-full bg-yellow-500'></span>
              <span className='absolute w-3 h-3 left-6 bottom-6 rounded-full bg-green-500'></span>
              <div className='p-8'>
                <h1 className='text- font-semibold'>Campaign Creator</h1>
                <p className='py-2 '>I was amazed by the support I received for my project. The crowdfunding platform made it easy for me to reach my funding goals and connect with backers.</p>
                <p className=''>Sam Sulek</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='p-4 flex items-center gap-4'>
              <img className='w-52 h-52 rounded-full object-cover' src="https://static.vecteezy.com/system/resources/thumbnails/033/129/417/small/a-business-man-stands-against-white-background-with-his-arms-crossed-ai-generative-photo.jpg" alt="" />
              <span className='absolute w-6 h-6 left-0 bottom-0 rounded-full bg-yellow-500'></span>
              <span className='absolute w-3 h-3 left-6 bottom-6 rounded-full bg-green-500'></span>
              <div className='p-8'>
                <h1 className='text- font-semibold'>Supportor</h1>
                <p className='py-2 '>Using this platform was a game-changer for our team. We were able to turn our idea into a reality thanks to the support and engagement of the community.</p>
                <p>John Doe</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className='p-4 flex items-center gap-4'>
              <img className='w-52 h-52 rounded-full object-cover'
                src="https://t3.ftcdn.net/jpg/01/91/85/06/360_F_191850653_IkzN9vZTtOtJ8NTKLKOp8PlaY8iCk6Ls.jpg" alt="" />
              <span className='absolute w-6 h-6 left-0 bottom-0 rounded-full bg-yellow-500'></span>
              <span className='absolute w-3 h-3 left-6 bottom-6 rounded-full bg-green-500'></span>
              <div className='p-8'>
                <h1 className='text- font-semibold'>Fundraiser</h1>
                <p className='py-2 '>I was amazed by the support I received for my project. The crowdfunding platform made it easy for me to reach my funding goals and connect with backers.</p>
                <p>Jane Smith</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div> */}





      {/* Blog section */}
      <BlogGrid />



      {/* team */}
      {/* <div className=' px-4 py-20 max-w-7xl mx-auto  '>
        <div className='relative grid grid-cols-2 gap-4'>
          <div className=' m-auto'>
            <h1 className='relative px-4 text-3xl'>Meet our team <span className='absolute left-0 bg-green-800 w-1.5 h-full'></span></h1>
            <p className='p-4 text-slate-600'>The world's latest social fundraising platform, optimized for your charity in a more easy way</p>
            <p className='p-4 text-slate-600'>At Collab, our team is comprised of dedicated professionals who share a common passion for supporting creators and bringing innovative ideas to life. With diverse expertise and a collaborative spirit, we work tirelessly to provide the best possible experience for both project creators and backers. Get to know the faces behind the scenes who are committed to making your crowdfunding journey a success.</p>
          </div>
          <div className='relative flex space-x-5 mx-auto'>
            <div className=' translate-y-5'>
              <img
                className='h-[200px]'
                src={sujan_folder} alt="" />
              <h1 className='text-sm pt-2'>Sujan Ban</h1>
              <p className='text-xs text-slate-600'>Founder</p>
            </div>
            <div className='-translate-y-5'>
              <img
                className='h-[200px] '
                src={sujan_folder2} alt="" />
              <h1 className='text-sm pt-2'>Jane Smith</h1>
              <p className='text-xs text-slate-600'>Marketing Manager</p>
            </div>
            <div className='absolute blur-3xl -z-10 right-0 top-0 w-72 h-72 rounded-full bg-green-100'>
            </div>
          </div>
        </div>
      </div> */}


      {/* join us */}
      <CtaBanner />


      {/* <div className='bg-gray-100 px-4 max-w-7xl mx-auto  py-20 text-center  '>
        <h1 className='py-4 max-w-[600px] mx-auto text-slate-600 text-lg'>Join our community for donating and be a part of a positive change in the world. With over:</h1>
        <h1 className='py-4 text-6xl'>1,500+</h1>
        <div className='py-4'>
          <p className='pb-6 text-slate-600'>people already joining</p>
          <Link
            className='px-3 py-3 rounded-full bg-green-800 text-white'
            to='/login'>Yes, I want to join community</Link>
        </div>
      </div> */}

      {/* FAQ section */}
      <Faq />


      {/* footer */}
      <Footer />
    </>
  )
}

export default Index