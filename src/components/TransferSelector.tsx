import React, { useState } from 'react'
import './transferSelector.css'
import ITransferFilter from '../types/transferFilter'

interface IHandler {
  (count: string): void
}

interface IProps {
  transfers: ITransferFilter | null,
  onSelectTransfers: IHandler
};

export default function TransferSelector({ transfers, onSelectTransfers }: IProps): JSX.Element {
  console.log('draw  TransferSelector with', transfers);
  return (
    <div className="form-transfer">
      <div className="form-header">КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      <div className="form-check">
        <input
          id="chk_all"
          className="form-check-input"
          type="checkbox"
          onChange={() => onSelectTransfers('all')}
          defaultChecked={true}
          name="all"
        />
        <label className="form-check-label" htmlFor="chk_all">Все</label>
      </div>

      <div className="form-check">
        <input
          id="chk_0"
          className="form-check-input"
          type="checkbox"
          onChange={() => onSelectTransfers('0')}
          defaultChecked={false}
          name="0"
        />
        <label className="form-check-label" htmlFor="chk_0">Без пересадок</label>
      </div>

      <div className="form-check">
        <input className="form-check-input"
          type="checkbox"
          id="chk_1"
          name="1"
          onChange={() => onSelectTransfers('1')}
        />
        <label className="form-check-label" htmlFor="chk_1">1 пересадка</label>
      </div>

      <div className="form-check">
        <input className="form-check-input"
          type="checkbox"
          id="chk_2"
          name="2"
          onChange={() => onSelectTransfers('2')}
        />
        <label className="form-check-label" htmlFor="chk_2">2 пересадки</label>
      </div>

      <div className="form-check">
        <input className="form-check-input"
          type="checkbox"
          id="chk_3"
          name="3"
          onChange={() => onSelectTransfers('3')}
        />
        <label className="form-check-label" htmlFor="chk_3">3 пересадки</label>
      </div>
    </div>

  )
}
