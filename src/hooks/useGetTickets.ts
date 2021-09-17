import { useEffect, useState } from "react";
import { ITicket } from '../types/ITicket'
//import ITransferFilter from '../types/transferFilter'

/* 
Хук получения данных с сервера
*/

type IReturnType = [
  allTickets: ITicket[],
  isLoading: boolean
];


//export default function useGetTickets(order: string, filter: ITransferFilter): IReturnType {
export default function useGetTickets(): IReturnType {
  const [allTickets, setAllTickets] = useState<ITicket[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  //const [sortedTickets, setSortedTickets] = useState<ITicket[]>([]);

  async function fetchTickets() {
    // get searchId
    setIsLoading(true);
    const resp1 = await fetch('http://localhost:3000/search.json');
    const { searchId } = await resp1.json();

    let stop: boolean = false;
    let tickets: ITicket[] = [];


    // get main data from server
    do {
      const resp2 = await fetch(`http://localhost:3000/tickets1.json?searchId=${searchId}`);
      if (!resp2.ok) {
        continue;
      }
      const data = await resp2.json();
      let chunk: ITicket[] = data.tickets;
      stop = data.stop;
      tickets = tickets.concat(chunk);
    } while (!stop);

    // finally

    // сгруппировать данные по перевозчику (carrier):
    //const groupedByCarrier: ICarrier = _.groupBy(tickets, (item) => item.carrier);
    //console.log(groupedByCarrier);

    //setAllTickets(tickets);
    setAllTickets(tickets.slice(0, 5));
    setIsLoading(false);
  } // fetchTickets


  useEffect(() => {
    if (!allTickets.length) {
      fetchTickets();
    }
    // eslint-disable-next-line
  }, []);

  //console.log('sorting by ', order);
  // if (order === 'price') {
  //   // sort by price
  //   setSortedTickets(state => state.sort((a: ITicket, b: ITicket) => a.price - b.price))
  // } else {
  //   // sort by duration (ticket.segment[0].duration)
  //   setSortedTickets(state => state.sort((a: ITicket, b: ITicket) => a.segments[0].duration - b.segments[0].duration))
  // }



  return [allTickets, isLoading];

}
