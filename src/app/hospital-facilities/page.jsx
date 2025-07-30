import CareHelpSection from '@/components/HospitalFacilities/CareHelpSection'
import HospitalFacilitiesHero from '@/components/HospitalFacilities/HospitalFacilitiesHero'
import Technology from '@/components/HospitalFacilities/Technology'
import React from 'react'

const hospital = () => {
  return (
    <>
    <HospitalFacilitiesHero />
    <Technology />
    <CareHelpSection/>
    </>
  )
}

export default hospital