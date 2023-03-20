
import React from 'react'
import Button from '../Button/Button.js'
import logo from './media/mail_logo.png'
import s from './Nav.module.css'
import { BsGlobe2 } from 'react-icons/bs';



export default function Nav() {
  return (
    <div className={s.nav}>
        <ul>
            <li>Products</li>
            <li>Resources</li>
            <li>Inspiration</li>
            <li>Pricing</li>
        </ul>
        <img src={logo} alt='logo'/> 
        <div>
        <p>Sales: +1 (800) 315-5939</p>
        <BsGlobe2 className={s.globe_icon}/>
        <p>Search</p>
        <p>Log In</p>
        <Button/>
      </div>
    </div>
  )
}

