import { Outlet } from "react-router-dom"
import NavBar from "./NavBar"


const Layout = () => {
  return (
    <div className="flex flex-col h-screen bg-slate-100 print:bg-white">
        <NavBar/>
        <main className="flex flex-1 overflow-hidden">
             <Outlet/>
        </main>
    </div>
  )
}

export default Layout