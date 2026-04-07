import React from 'react'
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer/Footer'
import GoToTopButton from './components/GoToTopButton/GoToTopButton'
import Sitemap from './Internal_Components/Sitemap/Sitemap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Components from './components/Components'
import Navbar from './components/aNavBar/Navbar'
import Team from './Internal_Components/TeamComp/TeamComp';
import Technology from './Internal_Components/Technology/Technology'
import Services from './Internal_Components/Internal_Services/Services';
import AboutUs from './Internal_Components/AboutUs/AboutUs';
import ContactUs from './Internal_Components/ContactUs/ContactUs';
import TermsOfServices from './Internal_Components/TermOfServices/TermOfServices';
import PrivacyPolicy from './Internal_Components/PrivacyPolicy/PrivacyPolicy';
import FAQ from './Internal_Components/Faq/Faq';
import Fire from './Internal_Components/Fire/Fire';
import Blog from './Internal_Components/Blog/Blog';
import SmartHome from './Internal_Components/Blog/SmartHome';
import ArtIntel from './Internal_Components/Blog/ArtIntel';
import BlockChain from './Internal_Components/Blog/BlockChain';
import Web3 from './Internal_Components/Blog/Web3';
import CyberSecurity from './Internal_Components/Blog/CyberSecurity';
import CloudVsEdge from './Internal_Components/Blog/CloudVsEdge';
import MetaVerse from './Internal_Components/Blog/MetaVerse';
import EthicsOfRobotics from './Internal_Components/Blog/EthicsOfRobotics';
import WorkWithUs from './Internal_Components/WorkWithUs/WorkWithUs';
import ApplyJob from './Internal_Components/WorkWithUs/ApplyJob';


function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Navbar/>
        <Routes>
          <Route path='/' element={<Components/>} />
          <Route path='/Sitemap' element={<Sitemap />} />
          <Route path='/Team' element={<Team/>} />
          <Route path='/Technology' element={<Technology/>} />
          <Route path='/Services' element={<Services/>} />
          <Route path='/About Us' element={<AboutUs/>} />
          <Route path='/LetsConnect' element={<ContactUs/>}/>
          <Route path='/termsofservices' element={<TermsOfServices/>}/>
          <Route path='/Privacy' element={<PrivacyPolicy/>}/>
          <Route path='/faq' element={<FAQ/>} />
          <Route path='/fire' element={<Fire/>} />
          <Route path='/workwithus' element={<WorkWithUs/>} />
          <Route path="/apply/:id" element={<ApplyJob />}/>

          
          <Route path='/blog' element={<Blog/>} />

          <Route path='/blog/smartHome' element={<SmartHome/>} />
          <Route path='/blog/artIntel' element={<ArtIntel/>} />
          <Route path='/blog/blockChain' element={<BlockChain/>} />
          <Route path='/blog/web3' element={<Web3/>} />
          <Route path='/blog/cyberSecurity' element={<CyberSecurity/>} />
          <Route path='/blog/cloudVsEdge' element={<CloudVsEdge/>} />
          <Route path='/blog/metaverse' element={<MetaVerse/>} />
          <Route path='/blog/ethicsOfRobotics' element={<EthicsOfRobotics/>} />

        </Routes>
        <Footer />
        <GoToTopButton />
      </BrowserRouter>
    </>
  )
}

export default App








    
//     <Sitemap/>
    