import { ITicket } from './ITicket'

export interface ICarrier {
  [carrier: string]: ITicket[]
}