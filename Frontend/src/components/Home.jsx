import React from 'react'
import HomeSlider from '../HomePage/HomeSlider'
import Pages from '../HomePage/Pages'
import Management from '../HomePage/Management'
import Appointment from '../HomePage/Appointment'
import MessagePage from '../HomePage/MessagePage'
import Hospital from '../HomePage/Hospital'
import ManagementClinic from '../HomePage/ManagementClinic'
import Footer from '../Footer/Footer'

function Home() {
  return (
    <>
      <HomeSlider />
      <Pages />
      <Management />
      <Appointment />
      <ManagementClinic />
      <Hospital />
      <MessagePage />
      <Footer />
    </>
  )
}

export default Home

