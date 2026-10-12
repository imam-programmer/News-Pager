import React, { useContext, useEffect } from 'react'
import Navbar from './components/Navbar'
import News from './pages/News'
import { ThemeContext } from './context/ThemeContext'
import Root from './components/Root'
import { createBrowserRouter, RouterProvider } from 'react-router'

const App = () => {
  const { theme } = useContext(ThemeContext)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Root,
      children: [
        { index: true, Component: News },



      ],
    },
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App