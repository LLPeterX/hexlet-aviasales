import React from 'react'
import Ticket from './Ticket'
//import { ICarrier } from '../types/ICarrier'
import { ITicket } from '../types/ITicket'

type PropsType = {
  tickets: ITicket[]
}

export default function AllTickets({ tickets }: PropsType) {
  if (!tickets) {
    return null;
  }
  return (
    <div>
      {
        //Object.keys(tickets).map(carrier => <Ticket key={carrier} ticket={tickets[carrier]} />)
        tickets.map((t, i) => <Ticket key={i} ticket={t} />)
      }
    </div>
  )
}
