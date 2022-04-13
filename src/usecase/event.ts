import { Event } from '../domain/event'

function getDayName(date: Date, locale: string) {
  return date.toLocaleDateString(locale, { weekday: 'long' })
}

export function toDate(strDate: string): string {
  const date = new Date(strDate)
  const locale = navigator.languages[0]
  const humanReadableDate = `${getDayName(date, locale)}, ${date.toLocaleDateString(locale)}`
  return humanReadableDate
}

export function isPast(strDate: string): boolean {
  return new Date() > new Date(strDate)
}
