import { Member, Repo } from '../domain/github'

export async function getMembers(url: string): Promise<Member[]> {
  const response = await fetch(url)
  const jsonxs: Promise<Member[]> = response.json()
  const xs: Member[] = await jsonxs
  return xs
}

export async function getRepos(url: string): Promise<Repo[]> {
  const response = await fetch(url)
  const jsonxs: Promise<Repo[]> = response.json()
  const xs: Repo[] = await jsonxs
  return xs
}
