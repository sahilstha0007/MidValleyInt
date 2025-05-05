import React from 'react'
import Hero from '../components/Home/Hero'
import Courses from '../components/Home/Courses'
import Diploma from '../components/Home/Diploma'
import Main from '../components/Home/Main'
import Gallery from '../components/Home/Gallery'
import About from '../components/Home/About'
import Video from '../components/Home/Video'
import Partners from '../components/Home/Partners'
import Alumni from '../components/Home/Alumni'
import Club from '../components/Home/Club'
import Blog from '../components/Home/Blog'
import Collection from '../components/Home/Collection'
import CreditTransfer from '../components/Home/CreditTransfer'
import Team from '../components/Home/Team'
import ScrollText from '../components/Home/Scroll'

const Home = () => {
  return (
    <div>
      {/* <Main/> */}
      <Hero/>
      <About/>
      <div className='bg-gradient-to-br from-white to-blue-50'>
      <Courses/>
      <Diploma/>
      </div>
      <CreditTransfer/>
      <Gallery/>
      <Video/>
      <Team/>
      <Club/>
      <Collection/>

      <Blog/>
      <Alumni/>
      <Partners/>
      
    </div>
  )
}

export default Home