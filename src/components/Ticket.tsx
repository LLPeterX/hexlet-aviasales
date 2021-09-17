import React from 'react'
//import logo from '../assets/logo.png'
import './ticket.css';
import TicketItem from './TicketItem';
import { ITicket } from '../types/ITicket'

type PropsType = {
  ticket: ITicket
}

// convert munutes to hh mm
function minutes2hhmm(minutes: number): string {
  let hh: number = Math.floor(minutes / 60);
  let mm: number = minutes - (hh * 60);
  return `${hh.toString().padStart(2, '0')}ч ${mm.toString().padStart(2, '0')}м`;
}

function getTimeFromDate(date: Date | string): string {
  let d: Date;
  if (typeof date === 'string') {
    d = new Date(date);
  } else {
    d = date;
  }
  let hh = d.getHours().toString().padStart(2, '0');
  let mm = d.getMinutes().toString().padStart(2, '0');
  return `${hh}:${mm}`;
}

// получить конечное время: прибваить к startDate количество минут
function getEndTime(startDate: Date | string, minutes: number): string {
  let d: Date;
  if (typeof startDate === 'string') {
    d = new Date(startDate);
  } else {
    d = startDate;
  }
  let msec: number = minutes * 60 * 1000;
  let newMsec = d.valueOf() + msec;
  let newDate = new Date(newMsec);
  return getTimeFromDate(newDate);

}

export default function Ticket({ ticket }: PropsType): JSX.Element {

  const price = ticket.price.toLocaleString();

  return (
    <div className="container ticket">
      <div className="row ticket_header">
        <div className="col">
          <div className="price">
            {price} Р
          </div>
        </div>
        <div className="col airlines">
          <div className="airlines_logo">{ticket.carrier}</div>
          Airlines
        </div>
      </div>

      {/* cycle */}
      <div className="ticket_container">
        <TicketItem
          destination={`${ticket.segments[0].origin} - ${ticket.segments[0].destination}`}
          times={`${getTimeFromDate(ticket.segments[0].date)} - ${getEndTime(ticket.segments[0].date, ticket.segments[0].duration)}`}
          duration={minutes2hhmm(ticket.segments[0].duration)}
          stopsList={ticket.segments[0].stops} />
        <TicketItem
          destination={`${ticket.segments[1].origin} - ${ticket.segments[1].destination}`}
          times={`${getTimeFromDate(ticket.segments[1].date)} - ${getEndTime(ticket.segments[1].date, ticket.segments[1].duration)}`}
          duration={minutes2hhmm(ticket.segments[1].duration)}
          stopsList={ticket.segments[1].stops} />
      </div>
    </div >
  )
}
