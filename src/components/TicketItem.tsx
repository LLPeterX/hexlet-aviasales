import React from 'react'
import './ticketItem.css'

interface IProps {
  destination: string,
  range: string,
  time: string,
  transfersCount: number,
  transfersList?: string | null
}

export default function TicketItem({ destination, range, time, transfersCount, transfersList }: IProps): JSX.Element {
  let transfersString: string = "";
  switch (transfersCount) {
    case 0:
      transfersString = "без пересадок";
      break;
    case 1:
      transfersString = "1 пересадка";
      break;
    default:
      transfersString = `${transfersCount} пересадки`;
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
          {transfersCount > 0 && <div className="content">{transfersList}</div>}
        </div>
      </div>
    </div>
  )
}
