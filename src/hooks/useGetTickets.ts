import { useEffect, useState } from "react";
import { ITicket } from '../types/ITicket'
import _ from 'lodash';

/* 
Хук получения данных с сервера
*/

type IReturnType = [
  allTickets: ITicket[],
  isLoading: boolean
];


export default function useGetTickets(): IReturnType {
  const [allTickets, setAllTickets] = useState<ITicket[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchTickets() {
    // get searchId
    setIsLoading(true);
    const resp1 = await fetch('http://localhost:3000/search.json');
    const { searchId } = await resp1.json();

    let stop: boolean = false;
    let tickets: ITicket[] = [];


    // get main data from server
    // TODO: сделать цикл do ... while(!stop) с добавлением данных в массив allTickets[]
    debugger;
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
    setAllTickets(tickets);
    setIsLoading(false);
    // group by
    const grouped = _.groupBy(tickets, (item) => item.carrier);
    console.log('gr = ', grouped);

  } // fetchTickets


  useEffect(() => {
    if (!allTickets.length) {
      fetchTickets();
    }
  }, [])


  return [allTickets, isLoading];

}
