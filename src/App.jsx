import { Button } from '@heroui/react'
import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import About from './pages/About'
import ContactPage from './pages/Contact'
import Gallery from './pages/Gallery'

export default function App() {
  return (
    <div>
      <Navbar/>

      
      <Home/>
      <About/>
      <ContactPage/>
      <Gallery/>
      <Footer/>
     
     
    </div>
  )
}
