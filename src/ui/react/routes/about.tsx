import { memo } from 'react'
import { Helmet } from 'react-helmet-async'

export default memo(function About() {
  return (
    <div className="p-12 text-center bg-white text-dark">
      <Helmet>
        <title>About</title>
        <meta name="description" content="About" />
      </Helmet>
      <h1>Tentang</h1> <p>Perkumpulan mahasiswa pegiat pemrograman.</p>
      <p>
        Kami independen, tidak terikat dengan nama kampus atau organisasi intra/ekstra kampus
        manapun.
      </p>
      <p>
        Karena founder member dari kampus UIN Walisongo Semarang, kami sementara membuka bagi
        mahasiswa UIN Walisongo Semarang terutama Teknologi Informasi.
      </p>
      <p>
        Kami terbuka untuk sharing ilmu seputar teknologi informasi, pemrograman, maupun
        teknologi-teknologi terbaru lainnya.
      </p>
      <p>
        Member tidak mencerminkan member sebagai mahasiswa kampus X, jadi tidak ada hubungannya
        dengan politik, ekonomi, sosial, budaya, akademis, dan lainnya dari kampus X.
      </p>
    </div>
  )
})
