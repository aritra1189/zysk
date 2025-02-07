import { useState } from 'react'

import './App.css'
import Herosection from './components/Herosection'
import FeaturesSection from './components/Features'
import Faq from './components/Faq'
import BlogSection from './components/Blog'
import FreeTrialSection from './components/Trial'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Herosection/>
     <FeaturesSection/>
     <Faq/>
     <BlogSection/>
     <FreeTrialSection/>
     <Footer/>
    </>
  )
}

export default App
