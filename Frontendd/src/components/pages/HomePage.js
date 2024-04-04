import React from 'react'
import AboutUs from '../AboutUs/AboutUs'
import Cards from '../Cards/Cards'
//import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar'
//import Carousel from '../../components/Hero/Carousel'
import ModernCarousel from '../../components/Hero/Carousel'

function HomePage() {
  return (
    <div className="Home">
     <Navbar />
     <ModernCarousel />
     <AboutUs />
     <Cards />
     
     <Footer />
    </div>
  )
}

export default HomePage

//rfce
