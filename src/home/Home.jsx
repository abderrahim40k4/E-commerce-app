import React from 'react'
import Banner from './Banner'
import Category from './Category'
import CategoryShowCase from './CategoryShowCase'
import Register from './Register'
import LocationSprade from './LocationSprade'
import AboutUs from './AboutUs'

const Home = () => {
  return (
    <div>
        <Banner/>
        <Category/>
        <CategoryShowCase/>
        <Register/>
        <LocationSprade/>
        <AboutUs/>
    </div>
  )
}

export default Home