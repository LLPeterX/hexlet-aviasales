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
      <div className="row">
        <div className="col">
          <TicketItem title="MOV-HKT" content="10:45 - 09:00" />
        </div>
        <div className="col">
          <TicketItem title="в пути" content="21ч 45м" />
        </div>
        <div className="col">
          <TicketItem title="2 пересадки" content="HKG, JNB" />
        </div>
      </div>





    </div >
  )
}
