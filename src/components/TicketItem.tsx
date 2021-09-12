import React from 'react'
import './ticketItem.css'

interface IProps {
  title: string,
  content: string
}

export default function TicketItem({ title, content }: IProps): JSX.Element {
  return (
    <div className="item">
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </div>
  )
}
