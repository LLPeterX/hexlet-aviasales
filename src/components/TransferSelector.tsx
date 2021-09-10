import React, { useState } from 'react'
import ITransferFilter from '../types/transferFilter';
import './transferSelector.css'

// объект по умолчанию для доступных чекбоксов.
// ключи потом преобразуются в id формы
const initialState: ITransferFilter = {
  "all": true,
  "0": false,
  "1": false,
  "2": false,
  "3": false
}

// определить - есть ли отмеченные пункты ниже заданного
const hasCheckedBelow = (filterObj: ITransferFilter, from: string) => {
  return Object.entries(filterObj).some(([key, v]) => key !== 'all' && key >= from && v);
}

export default function TransferSelector() {
  const [transfers, setTransfers] = useState(initialState);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let { checked } = e.target;
    let newFilter = { ...transfers };
    console.log('set filter:', e.target.value);

    switch (e.target.value) {
      case 'all':
        // если включить, то сбросить все остальные
        if (checked) {
          newFilter["all"] = true;
          newFilter["0"] = false;
          newFilter["1"] = false;
          newFilter["2"] = false;
          newFilter["3"] = false;
        } else {
          // если отключить - то сбросить остальные кроме "без пересадок"
          newFilter["all"] = false;
          newFilter["0"] = true;
          newFilter["1"] = false;
          newFilter["2"] = false;
          newFilter["3"] = false;

        }
        break; // не обрабатываем вообще - сн
      default:
        if (checked) {
          // если включен, то убрать "все" и низлежащие
          newFilter['all'] = false;
          //newFilter['0'] = true;
        } else {
          // если отключен, то если нет других маршрутов > 0, то установить all=true
          if (!hasCheckedBelow(newFilter, "0")) {
            newFilter['all'] = true;
          }
        }
    }
    //console.log(e.target.checked, e.target.value, e.target.id);
    console.log('new state:', newFilter);

    setTransfers(newFilter);

  }

  return (
    <div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="chk_all"
          onChange={handleChange}
          defaultChecked={true}
          value="all"
        />
        <label className="form-check-label" htmlFor="chk_all">Все</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox"
          id="chk_0"
          onChange={handleChange}
          defaultChecked={false}
          value="0"
        />
        <label className="form-check-label" htmlFor="chk_0">Без пересадок</label>
      </div>


      {/* 
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="chk_1" onChange={() => handleChange(1)} />
        <label className="form-check-label" htmlFor="chk_1">1 пересадка</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="chk_2" onChange={() => handleChange(2)} />
        <label className="form-check-label" htmlFor="chk_2">2 пересадки</label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="chk_3" onChange={() => handleChange(3)} />
        <label className="form-check-label" htmlFor="chk_3">3 пересадки</label>
      </div>
       */}
    </div>

  )
}
