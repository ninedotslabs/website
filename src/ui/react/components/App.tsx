import { Outlet } from 'react-router'
import FooterView from './Footer'
import NavbarView from './Navbar'

export default function App() {
  return (
    <div>
      <header className="h150">
        <NavbarView />
      </header>
      <main className="main">
        <Outlet />
      </main>
      <FooterView />
    </div>
  )
}
