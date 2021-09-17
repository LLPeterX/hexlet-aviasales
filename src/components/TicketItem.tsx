import React from 'react'
import './ticketItem.css'

interface IProps {
  destination: string,
  range: string,
  time: string,
  stopsList: string[]
}

export default function TicketItem({ destination, range, time, stopsList }: IProps): JSX.Element {
  let transfersString: string = "";
  switch (stopsList.length) {
    case 0:
      transfersString = "без пересадок";
      break;
    case 1:
      transfersString = "1 пересадка";
      break;
    default:
      transfersString = `${stopsList.length} пересадки`;
  }

  return (
    <div className="row">
      <div className="col-4">
        <div className="col_item">
          <div className="title">{destination}</div>
          <div className="content">{range}</div>
        </div>
      </div>
      <div className="col-4">
        <div className="col_item">
          <div className="title">в пути</div>
          <div className="content">{time}</div>
        </div>
      </div>
      <div className="col-4">
        <div className="col_item">
          <div className="title">{transfersString}</div>
          {stopsList.length > 0 && <div className="content">{stopsList.join(',')}</div>}
        </div>
      </div>
    </div>
  )
}
