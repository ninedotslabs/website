import { Event } from '../../../domain/event'
import { isPast, toDate } from '../../../usecase/event'
import ButtonView from './Button'

type Props = {
  event: Event
}

export default function EventView({ event }: Props) {
  return (
    <div className="bg-dark text-white w800 h600 p-2">
      <div className="flex flex-row flex-jc-between">
        <img
          src={`https://raw.githubusercontent.com/ninedotslabs/events/master/images/${event.image}`}
          alt={event.title}
          width={500}
          height={500}
        />
        <div className="pl-8 pt-30 fs36">{toDate(event.date)}</div>
      </div>
      <div className="fs22 text-wrap">{event.title}</div>
      <div className="fs20 text-wrap">{event.speaker}</div>
      <div className="flex flex-jc-center">
        {isPast(event.date) ? (
          <ButtonView className="bg-white text-dark">Event Expired</ButtonView>
        ) : (
          <a href={event.url}>
            <ButtonView className="bg-primary text-white">Register</ButtonView>
          </a>
        )}
      </div>
    </div>
  )
}
