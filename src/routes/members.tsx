import { lazy, Suspense, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { initialStateMember } from '../domain/github'
import { getMembers } from '../usecase/github'
import { apiGHOrgMembers } from '../utils/endpoint'
const MemberView = lazy(() => import('../components/Member'))

export default function Members() {
  const [state, setState] = useState(initialStateMember)
  useEffect(() => {
    getMembers(apiGHOrgMembers).then((members) => {
      setState(members)
    })
  }, [])
  return (
    <div className="container">
      <h2>Members</h2>
      <div className="member">
        <Helmet>
          <title>Members</title>
          <meta name="description" content="Members" />
        </Helmet>
        <Suspense fallback={<div></div>}>
          {state.map((member) => (
            <MemberView member={member} />
          ))}
        </Suspense>
      </div>
    </div>
  )
}
