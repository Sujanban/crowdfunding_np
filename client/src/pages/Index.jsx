import React from 'react'
import { Link } from 'react-router-dom';
import Filedesign from '../components/Filedesign';
import Navbar from '../components/Navbar';
import sujan_folder from '../assets/images/sujan-folder.png'
import sujan_folder2 from '../assets/images/sujan-folder2.png'
import Footer from '../components/Footer';
import create from '../assets/images/create1.png'
import campaign from '../assets/images/campaign1.png'
import money from '../assets/images/money1.png'
import CampaignGrid from '../components/CampaignGrid';
import Faq from '../components/Faq';


// import Swiper core and required modules
import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay";

const Index = () => {
  return (
    <>
      <Navbar />
      <div className='home w-full h-[70h]'>
        <div className='px-4  max-w-7xl mx-auto '>
          <div className='my-12 md:my-16 max-w-lg mx-auto text-center'>
            <h1 className='py-4 text-center text-2xl md:text-5xl'>Great future are built with a small charity</h1>
            <p className='md:py-4 max-w-sm mx-auto text-slate-600'>The world's largest social fundraising platform, optimized for your charity in a more easy way</p>
            <div className='py-4 flex items-center justify-center gap-4'>
              <Link to='/createCampaign' className=' px-3 py-2 rounded-full bg-green-800 text-white'>Create Campaign</Link>
              <Link className=' px-3 py-2 rounded-full bg-yellow-500 '>Learn more</Link>
            </div>
          </div>
          <div className='py-20 '>
            {/* <h1 className='p-4 text-2xl text-center'>Trusted by 10+ Companies</h1> */}
            <div className='p-4 grid grid-cols-4 '>
              <div className="p-4 shadow ">
                <h3 className='relative px-4 text-3xl font-bold'>100M+ <span className='absolute left-0 bg-yellow-500 w-1.5 h-full'></span></h3>
                <p className='p-4'>Projects funded on our platform</p>
              </div>
              <div className="p-4 shadow ">
                <h3 className='relative px-4 text-3xl font-bold'>15,000+ <span className='absolute left-0 bg-yellow-500 w-1.5 h-full'></span></h3>
                <p className='p-4'>Peak concurrent backers</p>
              </div>
              <div className="p-4 shadow ">
                <h3 className='relative px-4 text-3xl font-bold'>99.9% <span className='absolute left-0 bg-yellow-500 w-1.5 h-full'></span></h3>
                <p className='p-4'>Historical uptime for our platform</p>
              </div>
              {/* <div className="p-4 shadow ">
                <h3 className='relative px-4 text-3xl font-bold'>80%</h3>
                <p className='p-4'>Success rate for funded projects</p>
              </div> */}
              <div className="p-4 shadow ">
                <h3 className='relative px-4 text-3xl font-bold'>200+ <span className='absolute left-0 bg-yellow-500 w-1.5 h-full'></span></h3>
                <p className='p-4'>Countries reached by our platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* how it works */}
      <div className='px-4 py-20 max-w-7xl mx-auto border-2 bg-green-800 text-center rounded-3xl text-yellow-50'>
        <h1 className='pb-12 text-3xl '>Fundraising on Collab takes just a few minutes</h1>
        <div className='max-w-5xl mx-auto grid grid-cols-3 gap-4 '>
          <div className='p-4'>
            <img className='mx-auto' width={100} src={create} alt="" />
            <h1 className='py-2 text-2xl '>Register Account</h1>
            <p className='py-2 clear-start '> Follow a simple steps by filling up email and password and create a account for fundraising.</p>
          </div>
          <div className='p-4'>
            <img width="100" className='mx-auto' src={campaign} />
            <h1 className='py-2 text-2xl '>Create Campaign</h1>
            <p className='py-2 clear-start '> Enter your campaign details and start raising money.</p>
          </div>
          <div className='p-4'>
            <img className='mx-auto' width={100} src={money} alt="" />
            <h1 className='py-2 text-2xl '>Withdraw Money</h1>
            <p className='py-2 clear-start '>Add your bank details and Withdraw money from your account.</p>
          </div>
        </div>
      </div>

      {/* campaign Grid */}
      <CampaignGrid />


      {/* testemonial */}
      <div className='ring px-4 py-20  max-w-7xl mx-auto'>
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
      </div>

      {/* join us */}
      {/* <div className=' px-4 max-w-7xl mx-auto  py-20 text-center  '>
        <h1 className='py-4 max-w-[600px] mx-auto text-slate-600 text-lg'>Join our community for donating and be a part of a positive change in the world. With over:</h1>
        <h1 className='py-4 text-6xl'>120,927+</h1>
        <div className='py-4'>
          <p className='pb-6 text-slate-600'>people already joining</p>
          <Link
            className='px-3 py-3 rounded-full bg-green-800 text-white'
            to='/login'>Yes, I want to join community</Link>
        </div>
      </div> */}


      {/* team */}
      <div className='ring px-4 py-20 max-w-7xl mx-auto  '>
        <div className='grid grid-cols-2 gap-4'>
          <div className=' m-auto'>
            <h1 className='relative px-4 text-3xl'>Meet our team <span className='absolute left-0 bg-green-800 w-1.5 h-full'></span></h1>
            {/* <p className='py-4 text-slate-600'>The world's latest social fundraising platform, optimized for your charity in a more easy way</p> */}
            <p className='p-4 text-slate-600'>At Collab, our team is comprised of dedicated professionals who share a common passion for supporting creators and bringing innovative ideas to life. With diverse expertise and a collaborative spirit, we work tirelessly to provide the best possible experience for both project creators and backers. Get to know the faces behind the scenes who are committed to making your crowdfunding journey a success.</p>
          </div>
          {/* <div className='p-4 max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-2 justify-center gap-6 flex-wrap'> */}
          <div className='relative m-auto h-4 w-4 rounded-full bg-yellow-500'>
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
            <div className='absolute w-32  left-full bottom-full'>
              <img
                className='relative w-full '
                src={sujan_folder} alt="" />
              <h1 className='text-sm pt-2'>Sujan Ban</h1>
              <p className='text-xs text-slate-600'>Founder</p>
            </div>
            <div className='absolute w-32  right-full top-full'>
              <img
                className='relative w-full '
                src={sujan_folder2} alt="" />
              <h1 className='text-sm pt-2'>Jane Smith</h1>
              <p className='text-xs text-slate-600'>Marketing Manager</p>
            </div>
           
          </div>


          {/* </div> */}
        </div>
      </div>

      {/* FAQ section */}
      <Faq />


      {/* footer */}
      <Footer />
    </>
  )
}

export default Index