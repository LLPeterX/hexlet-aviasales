import React from 'react'
import logo from '../assets/logo.png'
import './header.css'

export default function Header() {
  return (
    <div className="row">
      <div className="header">
        <img src={logo} alt="logotype" />
      </div>
    </div>
  )
}
