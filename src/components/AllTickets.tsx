//import React, { useState } from 'react'
import Ticket from './Ticket'
//import { ICarrier } from '../types/ICarrier'
import { ITicket } from '../types/ITicket'

type PropsType = {
  tickets: ITicket[],
  order: string
}

export default function AllTickets({ tickets, order }: PropsType) {

  if (!tickets) {
    return null;
  }

  if (order === 'price') {
    // sort by price
    tickets.sort((a: ITicket, b: ITicket) => a.price - b.price);
  } else {
    // sort by duration (ticket.segment[0].duration)
    tickets.sort((a: ITicket, b: ITicket) => a.segments[0].duration - b.segments[0].duration)
  }

  return (
    <div>
      {
        tickets.slice(0, 5).map((t, i) => <Ticket key={`${t.carrier}.${t.price}.${t.segments[0].duration}`} ticket={t} />)
        // tickets.map((t, i) => <div key={i}>
        //   <p>Carrier: {t.carrier}, Price: {t.price}, Duration: {t.segments[0].duration}</p>
        // </div>
        // )
      }
    </div>
  )
}
