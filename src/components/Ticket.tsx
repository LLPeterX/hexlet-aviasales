import React from 'react'
import logo from '../assets/logo.png'
import './ticket.css';
import TicketItem from './TicketItem';

export default function Ticket(): JSX.Element {
  return (
    <div className="container ticket">
      <div className="row">
        <div className="col">
          <div className="price">
            13 400 P
          </div>
        </div>
        <div className="col airlines">
          <img src={logo} alt="logo" className="img" />
          Airlines
        </div>
      </div>

      {/* cycle */}
      <div className="ticket_container">
        <TicketItem destination={"MOW-HKT"} range={"10:45 - 08:00"} time={"21ч 15м"} transfersCount={2} transfersList={"HKG, JNB"} />
        <TicketItem destination={"MOW-HKT"} range={"11:20 - 00:50"} time={"13ч 30м"} transfersCount={1} transfersList={"HKG"} />
        <TicketItem destination={"MOW-HKT"} range={"12:00 - 13:00"} time={"1ч"} transfersCount={0} />
      </div>





    </div >
  )
}
