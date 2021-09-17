import { useEffect, useState } from "react";
import { ITicket } from '../types/ITicket'
//import _ from 'lodash';
//import { ICarrier } from "../types/ICarrier";

/* 
Хук получения данных с сервера
*/

type IReturnType = [
  allTickets: ITicket[],
  isLoading: boolean
];


export default function useGetTickets(): IReturnType {
  const [allTickets, setAllTickets] = useState<ITicket[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

    setAllTickets(tickets.slice(0, 10));
    //setGroupedTickets(groupedByCarrier);
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
