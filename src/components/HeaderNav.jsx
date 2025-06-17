import { Link, NavLink, useNavigate } from 'react-router-dom'

export default function HeaderNav() {

  return (
    <div className='header-nav'>
      <Link to='/lunch' className='header-nav-item'>Lunch</Link>
      <Link to='/dinner' className='header-nav-item'>Dinner</Link>
      <Link to='/dessert' className='header-nav-item'>Dessert</Link>
      <Link to='/drinks' className='header-nav-item'>Drinks</Link>
    </div>
  )
}