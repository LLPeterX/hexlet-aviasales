import React from 'react'
import './controls.css'

export default function Controls() {
  return (
    <div className="row">
      <div className="btn-group" role="group" aria-label="Basic example">
        <div className="col">
          <button type="button" className="btn outline">КОЛИЧЕСТВО ПЕРЕСАДОК</button>
        </div>
        <div className="col">
          <button type="button" className="btn btn-primary">САМЫЙ ДЕШЕВЫЙ</button>
        </div>
        <div className="col">
          <button type="button" className="btn">САМЫЙ БЫСТРЫЙ</button>
        </div>
      </div>
    </div>
  )
}
