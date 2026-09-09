import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import { useGsap } from '../hooks/useGsap.js'

export default function Layout() {
  useGsap()

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
