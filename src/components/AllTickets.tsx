import React from 'react'
import Ticket from './Ticket'
import { ICarrier } from '../types/ICarrier'

interface PropsType {
  tickets: ICarrier | null
}

export default function AllTickets({ tickets }: PropsType) {
  if (!tickets) {
    return null;
  }
  return (
    <div>
      {
        Object.keys(tickets).map(carrier => <Ticket key={carrier} ticket={tickets[carrier]} />)
      }
    </div>
  )
}
