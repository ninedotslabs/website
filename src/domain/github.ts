export const initialStateMember: Member[] = []
export const initialStateRepo: Repo[] = []
// ts doens't have ADT, sheeessh

export type MemberData = 'MemberData'
export type RepoData = 'RepoData'

export type Member = {
  id: number
  login: string
  avatar_url: string
  html_url: string
}

type Topics = string[]

export type Repo = {
  id: number
  name: string
  description: string | undefined
  html_url: string
  homepage: string | undefined
  created_at: string
  updated_at: string
  forks: number
  watchers: number
  topics: Topics
}
