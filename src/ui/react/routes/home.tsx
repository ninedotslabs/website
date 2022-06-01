import { memo, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { getData } from '../../../controller/repo'
import { apiEvent, apiGHOrgMembers, apiGHOrgRepos } from '../../../utils/endpoint'
import EventView from '../components/Event'
import HeroView from '../components/Hero'
import { Event } from '../../../domain/event'
import { Member, Repo } from '../../../domain/github'
import MemberView from '../components/Member'
import RepoView from '../components/Repo'
import ButtonView from '../components/Button'

type State = {
  events: Event[]
  members: Member[]
  repos: Repo[]
}

const initialState: State = { events: [], members: [], repos: [] }

export default memo(function Home() {
  const [state, setState] = useState(initialState)
  useEffect(() => {
    Promise.all([
      getData(apiEvent, 'EventData'),
      getData(apiGHOrgMembers, 'MemberData'),
      getData(apiGHOrgRepos, 'RepoData')
    ])
      .then((xs) => {
        setState({ events: xs[0], members: xs[1], repos: xs[2].reverse() })
      })
      .catch((error) => console.error(error))
  }, [])
  return (
    <div className="">
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Home" />
      </Helmet>
      <HeroView />
      <div id="events" className="bg-white text-dark w100p h1024">
        <h2 className="pt-4 pl-4">Event Kami</h2>
        <div className="flex flex-jc-center pt-6">
          <div className="mw1200 h700 overflow-auto">
            <div className="flex g45">
              {state.events.map((x) => (
                <EventView key={x.id} event={x} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w100p h1024">
        <h2 className="pt-4 pl-4" id="projects">
          Proyek Kami
        </h2>
        <div className="flex flex-jc-center pt-6">
          <div className="mw1200 h700 overflow-auto">
            <div className="flex flex-row flex-wrap flex-jc-center g20">
              {state.repos.map((x) => (
                <RepoView key={x.id} repo={x} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="members" className="bg-white text-dark w100p h1024">
        <h2 className="pt-4 pl-4">Anggota Kami</h2>
        <div className="flex flex-jc-center pt-6">
          <div className="mw1200 h700 overflow-auto">
            <div className="flex flex-row flex-wrap flex-jc-center g45">
              {state.members.map((x) => (
                <MemberView key={x.id} member={x} />
              ))}
            </div>
            <div className="text-center pt-16">
              <p>Tertarik untuk bergabung?</p>
              <a href="https://discord.gg/wmVnvKSMAE">
                <ButtonView className="bg-primary text-white">Gabung</ButtonView>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})
