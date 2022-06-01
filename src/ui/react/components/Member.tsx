import { Member } from '../../../domain/github'

type Props = {
  member: Member
}

export default function MemberView({ member }: Props) {
  const { login, html_url, avatar_url } = member
  return (
    <div className="card">
      <img src={avatar_url} alt={login} title={login} width={150} height={150} />
      <a href={html_url} target="_blank" rel="noopener noreferrer">
        <h3>{login}</h3>
      </a>
    </div>
  )
}
