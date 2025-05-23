import React from 'react'
import './App.css'
import Logo from './Components/Logo'
import Header from './Components/Header'
import Hero from './Components/Hero'
import Dashboard from './Components/Dashboard'
import Info from './Components/Info'
import AiOptmizeSection from './Components/AiOptmizeSection'
import Resume from './Components/Resume'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Dashboard />
      <Info />
      <AiOptmizeSection />
      <Resume />
      <Footer />
    </>
  )
}

export default App