import { useEffect, useState } from "react";
import { ITicket } from '../types/ITicket'

/* 
Хук получения данных с сервера
*/

type IReturnType = [
  allTickets: ITicket[],
  isLoading: boolean
];


export default function useGetTickets(): IReturnType {
  const [allTickets, setAllTickets] = useState<ITicket[]>([]);
  //const [searchId, setSearchId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchTickets() {
    // get searchId
    const resp1 = await fetch('http://localhost:3000/search.json');
    const data1 = await resp1.json();
    //setSearchId(data1.searchId);

    // get main data from server
    // TODO: сделать цикл do ... while(!stop) с добавлением данных в массив allTickets[]
    const resp2 = await fetch(`http://localhost:3000/tickets2.json?searchId=${data1.searchId}`);
    //debugger;
    const { tickets, stop } = await resp2.json();
    setAllTickets(tickets);

    // finally
    setIsLoading(false);
  } // fetchTickets


  useEffect(() => {
    setIsLoading(true);
    if (!allTickets.length) {
      fetchTickets();
    }
  }, [])


  return [allTickets, isLoading];

}
