import React, { useState } from 'react';
import Controls from './components/Controls';
import logo from './assets/logo.png'
import './App.css'
import TransferSelector from './components/TransferSelector';
import ITransferFilter from './types/transferFilter';
import Loader from './components/Loader'
import useGetTickets from './hooks/useGetTickets';
import AllTickets from './components/AllTickets';
import { ITicket } from './types/ITicket';
//import { sortBy } from 'lodash';


const initialStops: ITransferFilter = {
  "all": false,
  "0": true,
  "1": false,
  "2": false,
  "3": false
};


function App() {
  // state for switch price/speed
  const [order, setOrder] = useState('price'); // 'price' or 'speed'
  //state for transfers/transshipment
  const [stops, setStops] = useState(initialStops);
  const [showTickets, setShowTickets] = useState<ITicket[]>([]);

  // get data from server
  const [allTickets, isLoading] = useGetTickets();


  // ---------------------- handlers --------------------------------

  // выбор сортировки: 'price' - по цене, 'speed' - по времени
  const handleSortBy = (filter: string) => {
    console.log('set filter to', filter);
    setOrder(filter);
  }

  // Обработка переключения количества пересадок
  // count: 'all' - Все пересадки, или строки '0' (без пересадок), '1', '2', '3'
  const handleFilterBy = (count: string) => {
    const newTrans: ITransferFilter = { ...stops };
    switch (count) {
      case 'all':
        newTrans['all'] = !stops['all'];
        if (newTrans['all']) {
          // when on, turn on any other chekboxes
          newTrans['0'] = newTrans['1'] = newTrans['2'] = newTrans['3'] = true;
        } else {
          //when off, then enable only '0'
          newTrans['0'] = true;
        }
        break;
      case '0':
      case '1':
      case '2':
      case '3':
        newTrans['all'] = false;
        newTrans[count] = !stops[count];
        break;
      default:
        return;
    }
    if (!Object.values(newTrans).some(v => v)) {
      newTrans['0'] = true;
    }
    setStops(newTrans);
  }

  // redraw when change oreder
  React.useEffect(() => {
    if (order === 'price') {
      // sort by price
      console.log('--sort by price');
      setShowTickets(() => allTickets.sort((a: ITicket, b: ITicket) => a.price - b.price))
    } else {
      // sort by duration (ticket.segment[0].duration)
      console.log('--sort by duration');

      setShowTickets(() => allTickets.sort((a: ITicket, b: ITicket) => a.segments[0].duration - b.segments[0].duration))
    }
    console.log('--sorted:', showTickets);


  }, [order, allTickets, showTickets])


  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="container main">
      <div className="row">
        <div className="col header">
          <img src={logo} alt="logotype" />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <TransferSelector
            transfers={stops}
            onSelectTransfers={handleFilterBy}

          />
        </div>
        <div className="col-8">
          <Controls
            active={order}
            setActive={handleSortBy}

          />

          <div>
            {showTickets.length && <AllTickets tickets={showTickets} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
