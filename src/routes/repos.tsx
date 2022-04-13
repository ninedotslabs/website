import { lazy, Suspense, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { initialStateRepo } from '../domain/github'
import { getData } from '../controller/repo'
import { apiGHOrgRepos } from '../utils/endpoint'
const RepoView = lazy(() => import('../components/Repo'))

export default function Repos() {
  const [state, setState] = useState(initialStateRepo)
  useEffect(() => {
    getData(apiGHOrgRepos, 'RepoData').then((repos) => {
      setState(repos)
    })
  }, [])
  return (
    <div className="container">
      <Helmet>
        <title>Repos</title>
        <meta name="description" content="Repos" />
      </Helmet>
      <h2>Repos</h2>
      <div className="repo">
        <Suspense fallback={<div></div>}>
          {state.map((repo) => (
            <RepoView repo={repo} />
          ))}
        </Suspense>
      </div>
    </div>
  )
}
