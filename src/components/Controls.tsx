import React from 'react'
import './controls.css'

interface IHandler {
  (param: string): void
}

interface IControlProps {
  active: string,
  setActive: IHandler
}

export default function Controls({ active, setActive }: IControlProps) {
  return (
    <div className="container buttons">
      <div className="row">
        <div className="col-12 btn-group" role="group" aria-label="select price or speed">

          <button type="button"
            className={`btn ${active === 'price' ? 'btn-primary' : 'outline'}`}
            onClick={() => setActive('price')}
          >
            <span className="button_text">САМЫЙ ДЕШЕВЫЙ</span>
          </button>

          <button type="button"
            className={`btn ${active === 'speed' ? 'btn-primary' : 'outline'}`}
            onClick={() => setActive('speed')}
          >
            <span className="button_text">САМЫЙ БЫСТРЫЙ</span>
          </button>

        </div>
      </div>
    </div>
  )
}
