import CadastroPro from "@/components/CadastroPro"
import NavBar from "@/components/NavBar"
import Nota from "@/components/Nota"

const Home = () => {
  return (
    <div className="flex flex-col h-screen bg-slate-50">
      <NavBar/>
      <main className="flex flex-1 overflow-hidden">
        <div className="bg-slate-300 flex-1">
          <CadastroPro/>
        </div>
        <div className="bg-slate-200 w-[600px]">
          <Nota/>
        </div>
      </main>
     
    </div>
  )
}

export default Home