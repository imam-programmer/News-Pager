import React, { useContext, useEffect } from 'react'
import Navbar from './components/Navbar'
import News from './pages/News'
import { ThemeContext } from './context/ThemeContext'

const App = () => {
  const {theme}=useContext(ThemeContext)
 useEffect(() => {
 document.documentElement.setAttribute('data-theme',theme)
 }, [theme])
 
  return (
    <div>
     <Navbar/>
     <News/>
    </div>
  )
}

export default App