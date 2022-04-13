import { memo, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { getData } from '../controller/repo'
import { initialStateEvent } from '../domain/event'
import { isPast, toDate } from '../usecase/event'
import { apiEvent } from '../utils/endpoint'

export default memo(function Home() {
  const [state, setState] = useState(initialStateEvent)
  useEffect(() => {
    getData(apiEvent, 'EventData').then((events) => {
      setState(events)
    })
  }, [])
  return (
    <div className="container">
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Helmet>
      <div className="home">
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
      <div>
        <h2>Events</h2>
        <div>
          {state.map((event) => (
            <div key={event.id}>
              <img
                src={`https://raw.githubusercontent.com/ninedotslabs/events/master/images/${event.image}`}
                alt={event.title}
                width={500}
                height={500}
              />
              <div>{event.title}</div>
              <div>{toDate(event.date)}</div>
              <div>{event.speaker}</div>
              <div>{isPast(event.date) ? 'Event Expired' : <a href={event.url}>Register</a>}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})
