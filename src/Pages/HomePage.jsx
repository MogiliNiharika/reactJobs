import React from 'react'
import Hero from '../components/Hero'
import Homecards from '../components/HomeCards'
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'


const HomePage = () => {
  return (
    <>
     <Hero title = "Become a React Dev" subtitle= "Find the React Job that fits your skill set"/>
     <Homecards />
     <JobListings isHome= {true}/>
     <ViewAllJobs/>
    </>
  )
}

export default HomePage