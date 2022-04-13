import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <header className="header">
        <nav>
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/members">Members</Link>
            </li>
            <li>
              <Link to="/repos">Repos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <p>© 2020-Future Nine Dots Labs</p>
      </footer>
    </div>
  )
}
