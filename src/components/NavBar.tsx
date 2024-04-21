import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className='flex items-center px-4 h-24'>
        <Link to="/">Logo</Link>
        <ul className='flex justify-around items-center w-full'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/produto">Produto</Link></li>
        </ul>
    </nav>
  )
}

export default NavBar