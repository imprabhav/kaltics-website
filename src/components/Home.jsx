import React from 'react'
import Testimonals from '../components/Testimonals'
import FooterNav from '../components/FooterNav'
import Hero2 from '../components/Hero2'
import Contact from '../components/Contact'
import Service from '../components/Service'
import Innovation from '../components/Innovation'
import BlogCard from '../components/BlogCard'

const Home = () => {
  return (
    <>
      <div className=' text-neutral-200 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      {/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
      {/* <Navbar/> */}
      {/* <Hero/> */}
      <Hero2/>
      {/* <TeamSection/> */}
      <Service/>
      {/* <Innovation/> */}
      <BlogCard/>
      <Testimonals/>
      <Contact/>
      <FooterNav/>
     </div>
    </>
  );
};

export default Home;
