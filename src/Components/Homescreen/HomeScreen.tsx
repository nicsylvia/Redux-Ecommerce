import React from 'react'
import Discover from '../Discover/Discover'
import Hero from '../Home/Hero/Hero'
import Filter from './Filter/Filter'
import NewArrivals from './NewArrivals/NewArrivals'

const HomeScreen = () => {
  return (
    <div>
    <Hero/>
    <Discover />
    <NewArrivals />
    <Filter />
    </div>
  )
}

export default HomeScreen