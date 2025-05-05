import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Home/Footer'
import TestimonialCards from './components/Testimonial/TestimonialCards'
import Partner from './pages/Partner'
import Contact from './pages/Contact'
import EnquiryForm from './pages/EnquiryForm';
import Aboutus from './pages/Aboutus';
import PTE from './pages/PTE';
import BHM from './pages/BHM';
import BIT from './pages/BIT';
import BBA from './pages/BBA'

function App() {

  return (<>
            <div className=' flex items-center justify-end h-12 bg-[#003044]'>
              <ul className=' flex font-normal text-[#ebe8e8] text-[16px] pr-8  gap-6'>
                <li>Pearson PTE</li>
                <a href='https://hlms.help.edu.my/login/index.php'> <li>Login (LMS)</li> </a>
              </ul>
            </div>
            
  <div className=' top-0 sticky z-20'>
  <Navbar/>
  </div>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/testimonial' element={<TestimonialCards/>}></Route>
      <Route path='/partner' element={<Partner/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path="/EnquiryForm" element={<EnquiryForm />} />
      <Route path="/Aboutus" element={<Aboutus/>} />
      <Route path="/PTE" element={<PTE />} />
      <Route path="/BHM" element={<BHM />} />
      <Route path="/BIT" element={<BIT />} />
      <Route path="/BBA" element={<BBA />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
