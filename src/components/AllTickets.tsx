import Ticket from './Ticket'
import { ITicket } from '../types/ITicket'
import ITransferFilter from '../types/transferFilter';

type PropsType = {
  tickets: ITicket[],
  order: string,
  filter: ITransferFilter
}

/* 
 Компонент отображения всех билетов всех перевозчиков
 */
export default function AllTickets({ tickets, order, filter }: PropsType) {

  if (!tickets) {
    return null;
  }

  // фильтрация
  const showTickets = tickets.filter(t => {
    if (filter.all) {
      return true;
    }
    const s = t.segments[0].stops.length;
    if (filter['0'] && s === 0) return true;
    if (filter['1'] && s === 1) return true;
    if (filter['2'] && s === 2) return true;
    if (filter['3'] && s === 3) return true;
    return false;
  });

  // сортировка
  if (order === 'price') {
    // by price
    showTickets.sort((a: ITicket, b: ITicket) => a.price - b.price);
  } else {
    // by duration (ticket.segment[0].duration)
    showTickets.sort((a: ITicket, b: ITicket) => a.segments[0].duration - b.segments[0].duration)
  }

  return (
    <div>
      {
        showTickets.slice(0, 5).map((t, i) => <Ticket key={`${t.carrier}.${t.price}.${t.segments[0].duration}`} ticket={t} />)
      }
    </div>
  )
}
