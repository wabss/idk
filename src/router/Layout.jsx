import { Navbar } from '../components/Navbar/Navbar.jsx'
import { Outlet } from 'react-router'

export const Layout = () => {
  return (
    <>
        <Navbar />
        <main>
            <Outlet />
        </main>
    </>
  )
}
