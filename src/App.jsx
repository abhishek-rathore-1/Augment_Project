import React from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Testimonails from './components/Testimonails/Testimonails'
import Contacts from './components/Contacts/Contacts'
import { ToastContainer} from 'react-toastify';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonails/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default App