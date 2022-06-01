import { Repo } from '../../../domain/github'
import ButtonView from './Button'
import ForkLeftIcon from '@mui/icons-material/ForkLeft'
import StarIcon from '@mui/icons-material/Star'
import VisibilityIcon from '@mui/icons-material/Visibility'

type Props = {
  repo: Repo
}

export default function RepoView({ repo }: Props) {
  const { name, description, html_url, homepage, forks, stargazers_count, watchers_count } = repo
  return (
    <div className="bg-grey w100p h300 p-2">
      <h3 className="fs36">{name}</h3>
      <p className="fs22">{description}</p>
      <div className="flex flex-row g45">
        <div className="flex flex-jc-center">
          <ForkLeftIcon /> <span className="pl-2">{forks}</span>
        </div>
        <div className="flex flex-jc-center">
          <StarIcon /> <span className="pl-2">{stargazers_count}</span>
        </div>
        <div className="flex flex-jc-center">
          <VisibilityIcon /> <span className="pl-2">{watchers_count}</span>
        </div>
      </div>
      <div className="mt-4">
        <a href={html_url} target="_blank" rel="noopener noreferrer" className="text-white">
          <ButtonView className="bg-primary text-white">Source</ButtonView>
        </a>
        {homepage && (
          <a href={homepage} target="_blank" rel="noopener noreferrer" className="text-white pl-2">
            <ButtonView className="bg-primary text-white">Live</ButtonView>
          </a>
        )}
      </div>
    </div>
  )
}
