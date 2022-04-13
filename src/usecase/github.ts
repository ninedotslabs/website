import { Member, MemberData, Repo, RepoData } from '../domain/github'

export async function getData(url: string, type: MemberData): Promise<Member[]>
export async function getData(url: string, type: RepoData): Promise<Repo[]>
export async function getData(url: string) {
  const response = await fetch(url)
  const jsonxs = response.json()
  return await jsonxs
}
