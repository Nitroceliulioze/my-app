import React from 'react'
import AboutUs from '../../components/aboutUs/AboutUs'
import Footer from '../../components/footer/Footer'
import TopBar from '../../components/topBar/TopBar'

const AboutUsPage = () => {
  return (
    <>
    <TopBar/>
    < AboutUs title="About Us" description='Some text'/>
    <Footer/>
    </>
    
  )
}

export default AboutUsPage