import React, { useState } from 'react';
import Controls from './components/Controls';
import logo from './assets/logo.png'
import './App.css'
//import './components/header.css'
import TransferSelector from './components/TransferSelector';
import ITransferFilter from './types/transferFilter';


const initialTransfersState: ITransferFilter = {
  "all": true,
  "0": false,
  "1": false,
  "2": false,
  "3": false
};




function App() {

  // state for switch price/speed
  const [routeFilter, setRouteFilter] = useState('price'); // 'price' or 'speed'
  //state for transfers/transshipment
  const [transfers, setTransfers] = useState(initialTransfersState);

  // handlers

  // handler to switch price/speed
  const handleSwitchFilter = (filter: string) => {
    console.log('set filter to', filter);

    setRouteFilter(filter);
  }

  const handleSelectTransfers = (count: string) => {
    console.log('set tr=', count);
    const newTrans: ITransferFilter = { ...transfers };
    switch (count) {
      case 'all':
        newTrans['all'] = !transfers['all'];
        if (transfers['all']) {
          // when on, turn off any other chekboxes
          newTrans['0'] = newTrans['1'] = newTrans['2'] = newTrans['3'] = false;
        } else {
          //when off, then enable only '0'
          newTrans['0'] = true;
        }
        break;
      case '0':
      case '1':
      case '2':
      case '3':
        newTrans[count] = !transfers[count];
        break;
      default:
        console.log('nothiunf');

        return;
    }
    console.log('newTr = ', newTrans);

    setTransfers(newTrans);
  }



  return (
    <div className="container-sm bg">
      <div className="row">
        <div className="col header">
          <img src={logo} alt="logotype" />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <TransferSelector
            transfers={transfers}
            onSelectTransfers={handleSelectTransfers}

          />
        </div>
        <div className="col-8">
          <Controls
            active={routeFilter}
            setActive={handleSwitchFilter}

          />

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione sunt dicta aliquam minus expedita quos, aliquid tempora debitis. Minus voluptatem vel aspernatur perferendis fugiat eligendi doloribus inventore et consectetur!
        </div>
      </div>
    </div>
  );
}

export default App;
