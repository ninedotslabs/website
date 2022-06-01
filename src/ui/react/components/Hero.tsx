import { Link } from 'react-router-dom'
import ButtonView from './Button'

export default function HeroView() {
  return (
    <div className="p-14">
      <h1 className="fs80 text-primary">HALO</h1>
      <h1 className="fs80">ANAK IT</h1>
      <p className="pb-2">Selamat datang di perkumpulan pegiat pemrograman.</p>
      <Link to="/about">
        <ButtonView className="bg-primary text-white">Kepoin</ButtonView>
      </Link>
    </div>
  )
}
