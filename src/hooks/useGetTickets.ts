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

const DEBUG = false; // true: use localhost sample json files, false: use real server data

export default function useGetTickets(): IReturnType {
  const [allTickets, setAllTickets] = useState<ITicket[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function fetchTickets() {
    // get searchId
    setIsLoading(true);
    let tickets: ITicket[] = [];
    let stop: boolean = false;

    if (DEBUG) {
      const resp1 = await fetch('http://localhost:3000/search.json');
      const { searchId } = await resp1.json();
      // get main data from local test server
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
    } else {
      const resp1 = await fetch('https://front-test.beta.aviasales.ru/search');
      const { searchId } = await resp1.json();
      // get main data from real remote server
      let n = 0;
      do {
        const resp2 = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`);
        if (!resp2.ok) {
          continue;
        }
        const data = await resp2.json();
        let chunk: ITicket[] = data.tickets;
        stop = data.stop;
        tickets = tickets.concat(chunk);
        console.log('got chunk #', n++);

      } while (!stop);
    }
    setAllTickets(tickets);
    setIsLoading(false);
  } // fetchTickets


  useEffect(() => {
    if (!allTickets.length) {
      fetchTickets();
    }
    // eslint-disable-next-line
  }, []);


  return [allTickets, isLoading];

}
