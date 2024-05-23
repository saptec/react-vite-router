import {NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <header className="flex items-center justify-between bg-[#ff4c4c] p-4 text-white print:hidden print:p-0">
       <h1 className="text-xl font-semibold">PDV</h1>
       <div className="flex items-center justify-between space-x-6">
          <NavLink to={'/'} className='text-lg font-bold'>INICIAL</NavLink>
          {/* <NavLink to={'/produto'}>Produto</NavLink> */}
       </div>
    </header>
  )
}

export default NavBar