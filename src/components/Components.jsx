import React from 'react'
import About from './About/About'
import OurClients from './OurClients/OurClients'
import Services from './Services/Services'
import Testimonails from './Testimonails/Testimonails'
import Team from './Team/Team'
import Contacts from './Contacts/Contacts'
import Header from './Header/Header'

function Components() {
  return (
    <div className="w-full overflow-x-hidden">
    <Header/>
    <About/>
    <OurClients/>
    <Services/>
    <Testimonails/>
    <Team/>
    <Contacts/>
    </div>
  )
}

export default Components