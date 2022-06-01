import LogoView from './Logo'
import { Link } from 'react-router-dom'

export default function NavbarView() {
  return (
    <div className="flex flex-row flex-jc-between">
      <div className="flex flex-row">
        <Link to="/">
          <LogoView />
        </Link>
        <div className="pt-12">NINE DOTS LABS</div>
      </div>
      <nav>
        <ul className="lst-none flex flex-row pt-12 pr-8">
          <li className="pr-4">
            <a href="/#" className="text-white">
              Home
            </a>
          </li>
          <li className="pr-4">
            <a href="/#events" className="text-white">
              Events
            </a>
          </li>
          <li className="pr-4">
            <a href="/#projects" className="text-white">
              Projects
            </a>
          </li>
          <li className="pr-4">
            <a href="/#members" className="text-white">
              Members
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
