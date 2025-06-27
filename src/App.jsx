import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Home/Footer'
import TestimonialCards from './components/Testimonial/TestimonialCards'
import Partner from './pages/Partner'
import Contact from './pages/Contact'
import EnquiryForm from './pages/EnquiryForm';
// import Aboutus from './pages/Aboutus';
import PTE from './pages/PTE';
import BHM from './pages/Bacholers/BHM';
import BIT from './pages/Bacholers/BIT';
import BBA from './pages/Bacholers/BBA'
import DiplomaPage from './pages/Diploma/DiplomaPage';
import Partners from './pages/Aboutus/Partner';
import Messages from './pages/Aboutus/Messages';
import OurTeam from './pages/Aboutus/OurTeam';
import Gallery from './pages/Galary/Gallery';
import GalleryItem from './pages/Galary/GalleryItems';
import CareerPath from './pages/CareerPath';
import Clubs from './pages/Clubs/ClubDetails';
import Diploma from './pages/Diploma/Diploma';
import ClubsList from './pages/Clubs/ClubsList'

import Aboutus from '../src/pages/Aboutus/Aboutus';


// Chattbot
import MVICBot from '../src/chatbot/MVICBot';

import WhatsAppChat from './WhatsAppChat';

function App() {

  return (<>
    <div className=' flex items-center justify-end h-12 bg-[#003044]'>
      <ul className=' flex font-normal text-[#ebe8e8] text-[16px] pr-8  gap-6'>
        <Link to="/Clubs">Our CLubs</Link>
        <Link to="/PTE">Pearson PTE</Link>
        <Link to='https://hlms.help.edu.my/login/index.php'> <li>Login (LMS)</li> </Link>
      </ul>
    </div>

    <div className=' top-0 sticky z-20'>
      <Navbar />
    </div>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Testimonial' element={<TestimonialCards />}></Route>
      <Route path='/Partner' element={<Partner />}></Route>
      <Route path='/Contact' element={<Contact />}></Route>
      <Route path="/EnquiryForm" element={<EnquiryForm />} />
      {/* <Route path="/Aboutus" element={<Aboutus />} /> */}
      <Route path="/PTE" element={<PTE />} />
      <Route path="/BHM" element={<BHM />} />
      <Route path="/BIT" element={<BIT />} />
      <Route path="/BBA" element={<BBA />} />
      <Route path="/Aboutus" element={<Aboutus/>} />


      {/* added */}
      <Route path="/Diploma" element={<Diploma />} />
      <Route path="/Diploma/:course" element={<DiplomaPage />} />
      <Route path="/CareerPath" element={<CareerPath />} />
      <Route path="/Partners" element={<Partners />} />
      <Route path="/Message" element={<Messages />} />
      <Route path="/Team" element={<OurTeam />} />
      <Route path="/Events" element={<Gallery />} />
      <Route path="/Events/:id" element={<GalleryItem />} />
      <Route path="/Clubs/:clubId" element={<Clubs />} />
      <Route path="/Clubs" element={<ClubsList/>} />
    </Routes>
     <MVICBot />
    {/* <ScrollAnimatedCards /> */}
    <WhatsAppChat  /> 
    <Footer />

  </>
  )
}

export default App
