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
        <div className="col btn-group" role="group" aria-label="select price or speed">

          <button type="button"
            className={`btn ${active === 'price' ? 'btn-primary' : 'outline'}`}
            onClick={() => setActive('price')}
          >САМЫЙ ДЕШЕВЫЙ
          </button>

          <button type="button"
            className={`btn ${active === 'speed' ? 'btn-primary' : 'outline'}`}
            onClick={() => setActive('speed')}
          >САМЫЙ БЫСТРЫЙ
          </button>

        </div>
      </div>
    </div>
  )
}
