import React from 'react'
import logo from '../assets/logo.png'
import './header.css'

const Header = (): JSX.Element =>
  <>
    <div className="header">
      <img src={logo} alt="logotype" />
    </div>
  </>


export default React.memo(Header);
