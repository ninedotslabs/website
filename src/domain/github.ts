// ts doesn't have ADT, sheeessh

export type MemberData = 'MemberData'
export type RepoData = 'RepoData'

export type Member = {
  id: number
  login: string
  avatar_url: string
  html_url: string
}

type Topics = string[]
type Description = string | undefined
type Homepage = string | undefined

export type Repo = {
  id: number
  name: string
  description: Description
  html_url: string
  homepage: Homepage
  created_at: string
  updated_at: string
  forks: number
  watchers: number
  topics: Topics
}

export const initialStateMember: Member[] = []
export const initialStateRepo: Repo[] = []
