import React from 'react'
import Ticket from './Ticket'
import { ITicket } from '../types/ITicket'

interface IProps {
  tickets: ITicket[]
}

export default function AllTickets({ tickets }: IProps) {
  return (
    <div>
      {
        tickets.map((ticketItem, i) => <Ticket key={i} ticket={ticketItem} />)
      }
    </div>
  )
}
