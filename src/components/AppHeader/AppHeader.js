import React from 'react'
import { Link } from 'react-router-dom'
import 'normalize.css'
import './AppHeader.scss'

export default function AppHeader() {
  return (
    <header className='app-header'>
      <nav className='app-header__nav'>
        <ul className='app-header__ul'>
          <li className='app-header__li app-header__li--home'>
            <Link className='app-header__link' to='/'>
              Home
            </Link>
          </li>
          <li className='app-header__li'>
            <Link className='app-header__link' to='/about'>
              About
            </Link>
          </li>
          <li className='app-header__li'>
            <Link className='app-header__link' to='/new-shop'>
              Shop
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
