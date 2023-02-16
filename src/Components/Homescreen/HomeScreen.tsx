import React from 'react'
import Discover from '../Discover/Discover'
import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import NewArrivals from '../NewArrivals/NewArrivals'

const HomeScreen = () => {
  return (
    <div>
    <Hero/>
    <Discover />
    <NewArrivals />
    </div>
  )
}

export default HomeScreen