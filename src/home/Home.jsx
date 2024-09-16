import React from 'react'
import Banner from './Banner'
import Category from './Category'
import CategoryShowCase from './CategoryShowCase'
import Register from './Register'
import LocationSprade from './LocationSprade'
import AboutUs from './AboutUs'
import OurApp from './OurApp'
import Sponser from './Sponser'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Category/>
        <CategoryShowCase/>
        <Register/>
        <LocationSprade/>
        <AboutUs/>
        <OurApp/>
        <Sponser/>
    </div>
  )
}

export default Home