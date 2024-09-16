import React from 'react'
import Banner from './Banner'
import Category from './Category'
import CategoryShowCase from './CategoryShowCase'
import Register from './Register'
import LocationSprade from './LocationSprade'
import AboutUs from './AboutUs'
import OurApp from './OurApp'

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
    </div>
  )
}

export default Home