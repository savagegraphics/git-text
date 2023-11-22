import React from 'react'
import OneGrid from './OneGrid'
import ThreeGrid from './ThreeGrid'
import TwoGrid from './TwoGrid'
import LandPage from './LandPage'
import Cards from './Cards'
import Grid from './Grid'
import Container from './TwoGrid/Container'
import Header from './TwoGrid/Header'
import FourCards from './TwoGrid/FourCards'
import SingleCard from './SingleCard'

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <section className=''>
      <div className='hidden lg:block'>
        <Header />
      </div>
      <div className='container px-6 py-4 mx-auto'>
        <LandPage />
        <FourCards />
        <Grid />
        <Container />
      </div>
    </section>
  )
}

export default Dashboard
