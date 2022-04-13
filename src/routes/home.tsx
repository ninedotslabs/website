import { memo } from 'react'
import { Helmet } from 'react-helmet-async'

export default memo(function Home() {
  return (
    <div className="home">
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Helmet>
      <div className="logo">
        <svg width="300" height="350" viewBox="0 -50 210 250">
          <g fill="#589bd5">
            <circle cx="104.9" cy="120.97" r="7.9472"></circle>
            <circle cx="104.9" cy="57.986" r="7.9472"></circle>
            <circle cx="136.39" cy="89.479" r="7.9472"></circle>
            <circle cx="41.916" cy="89.479" r="7.9472"></circle>
            <circle cx="167.89" cy="89.479" r="7.9472"></circle>
            <circle cx="73.409" cy="89.479" r="7.9472"></circle>
            <circle cx="104.9" cy="26.494" r="7.9472"></circle>
            <circle cx="136.39" cy="57.986" r="7.9472"></circle>
            <circle cx="73.409" cy="57.986" r="7.9472"></circle>
          </g>
        </svg>
      </div>
      <div className="info">
        <h2>Perkumpulan mahasiswa pegiat pemrograman.</h2>{' '}
        <a href="https://discord.gg/cXbe3TVYcd" className="">
          Gabung Sekarang!
        </a>{' '}
        <p>
          atau, baca <a href="/about">tentang kami.</a>
        </p>
      </div>
    </div>
  )
})
