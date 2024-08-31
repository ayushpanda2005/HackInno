import React from 'react'
import NavListitem from '../components/NavListitem'
import navListData from '../data/navListData'

const Header = () => {
  return (
    <header>
      <a href="/" className="logo">
        Cinema
      </a>
      <ul className="nav">
        {
          navListData.map(nav=>(
            <NavListitem key={nav} nav={nav} />
          ))
        }
        
      </ul>
    </header>
  )
}

export default Header