import { lazy, Suspense, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { initialStateRepo } from '../domain/github'
import { getRepos } from '../usecase/github'
import { apiGHOrgRepos } from '../utils/endpoint'
const RepoView = lazy(() => import('../components/Repo'))

export default function Repos() {
  const [state, setState] = useState(initialStateRepo)
  useEffect(() => {
    getRepos(apiGHOrgRepos).then((repos) => {
      setState(repos)
    })
  }, [])
  return (
    <div className="container">
      <h2>Repos</h2>
      <div className="repo">
        <Helmet>
          <title>Repos</title>
          <meta name="description" content="Repos" />
        </Helmet>
        <Suspense fallback={<div></div>}>
          {state.map((repo) => (
            <RepoView repo={repo} />
          ))}
        </Suspense>
      </div>
    </div>
  )
}
