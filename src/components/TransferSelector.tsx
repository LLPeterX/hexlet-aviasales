import React from 'react'
import './transferSelector.css'
import ITransferFilter from '../types/transferFilter'

interface IHandler {
  (count: string): void
}

interface IProps {
  transfers: ITransferFilter,
  onSelectTransfers: IHandler
};

function TransferSelector({ transfers, onSelectTransfers }: IProps): JSX.Element {
  return (
    <div className="form-transfer">
      <div className="form-header">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <div className="form-check">
        <input
          id="chk_all"
          className="form-check-input"
          type="checkbox"
          onChange={() => onSelectTransfers('all')}
          checked={transfers['all']}
          value="all"
        />
        <label className="form-check-label" htmlFor="chk_all">Все</label>
      </div>

      <div className="form-check">
        <input
          id="chk_0"
          className="form-check-input"
          type="checkbox"
          onChange={() => onSelectTransfers('0')}
          checked={transfers['0']}
          value="0"
        />
        <label className="form-check-label" htmlFor="chk_0">Без пересадок</label>
      </div>

      <div className="form-check">
        <input className="form-check-input"
          type="checkbox"
          id="chk_1"
          value="1"
          onChange={() => onSelectTransfers('1')}
          checked={transfers['1']}

        />
        <label className="form-check-label" htmlFor="chk_1">1 пересадка</label>
      </div>

      <div className="form-check">
        <input className="form-check-input"
          type="checkbox"
          id="chk_2"
          value="2"
          onChange={() => onSelectTransfers('2')}
          checked={transfers['2']}
        />
        <label className="form-check-label" htmlFor="chk_2">2 пересадки</label>
      </div>

      <div className="form-check">
        <input className="form-check-input"
          type="checkbox"
          id="chk_3"
          value="3"
          onChange={() => onSelectTransfers('3')}
          checked={transfers['3']}
        />
        <label className="form-check-label" htmlFor="chk_3">3 пересадки</label>
      </div>
    </div>

  )
}

export default React.memo(TransferSelector);