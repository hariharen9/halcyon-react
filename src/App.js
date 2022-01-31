import { Card } from '@material-ui/core'
import '@material-tailwind/react/tailwind.css'
import React from 'react'
import Hero from './components/Hero Page/hero'
import Mobile from './components/MobilePage/Mobile'
import Service from './components/services/service_section'
import CardGrid from './components/AccordionReplacement/CardGrid'
function App() {
  return (
    <div>
      <Hero />
      <div class='flex h-screen justify-center items-center'>
        <Service />
      </div>
      <div class='flex justify-center items-center'>
        <CardGrid />
      </div>
    </div>
  )
}

export default App
