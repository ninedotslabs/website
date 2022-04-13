export type EventData = 'EventData'

export type Event = {
  id: number
  title: string
  speaker: string
  url: string
  date: string
  image: string
}

export const initialStateEvent: Event[] = []
