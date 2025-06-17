import { Link, NavLink, useNavigate } from 'react-router-dom'

import HeaderNav from './HeaderNav'

export default function Header() {

  return (
    <div className='header'>
      <Link to='' className='header-logo'>
        <p className='header-title'>
          Elden Café
        </p>
      </Link>
      <HeaderNav/>
    </div>
  )
}