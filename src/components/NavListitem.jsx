import React from 'react'

const NavListitem = ({nav}) => {
  return (
    <li>
        <a href={nav.link}>{nav.name}</a>
    </li>
  )
}

export default NavListitem