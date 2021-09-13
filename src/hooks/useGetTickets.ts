import { useEffect, useState } from "react";
import { ITicket } from '../types/ITicket'
/* 
Хук получения данных с сервера
*/


export default function useGetTickets() {
  const [allTickets, setAllTickets] = useState<ITicket[]>([]);
  const [searchId, setSearchId] = useState<string | null>(null);

  async function fetchTickets() {
    const resp1 = await fetch('http://localhost:3000/search.json');
    const data1 = await resp1.json();
    //console.log('fetch: ', data1);
    setSearchId(data1.searchId);
    // get main data from server
    const resp2 = await fetch('http://localhost:3000/tickets1.json');
    const data2 = await resp2.json();
    const { tickets, stop } = data2.tickets;
    console.log('fetch: tk=', tickets.length, 'stop=', stop);
    setAllTickets(tickets.slice(0, 5)); // берем первые 4 штук
  }


  useEffect(() => {
    fetchTickets();
  }, [])


  return [searchId, allTickets];

}
