import { Repo } from '../domain/github'

type Props = {
  repo: Repo
}

export default function MemberView({ repo }: Props) {
  const { name, html_url, forks } = repo
  return (
    <div className="card">
      <a href={html_url} target="_blank" rel="noopener noreferrer">
        <h3>{name}</h3>
      </a>
    </div>
  )
}
