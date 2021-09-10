import React from 'react';
import Controls from './components/Controls';
import Header from './components/Header';
import TransferSelector from './components/TransferSelector';

function App() {
  return (
    <div className="container-sm">
      <Header />
      <Controls />
      <div className="row">
        <div className="col-4">
          <TransferSelector />
        </div>
        <div className="col-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ratione sunt dicta aliquam minus expedita quos, aliquid tempora debitis. Minus voluptatem vel aspernatur perferendis fugiat eligendi doloribus inventore et consectetur!
        </div>
      </div>
    </div>
  );
}

export default App;
