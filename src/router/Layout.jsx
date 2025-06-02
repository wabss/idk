import { Navbar } from '../components/Navbar/Navbar.jsx'
import { Footer } from '../components/Footer/Footer.jsx'
import { Outlet } from 'react-router'

export const Layout = () => {
  return (
    <>
        <Navbar />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
  )
}
