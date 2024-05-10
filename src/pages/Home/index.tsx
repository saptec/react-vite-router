import CadastroPro from "@/components/CadastroPro"
import Nota from "@/components/Nota"


const Home = () => {
  return (
    <div className="flex flex-1 overflow-hidden">
      
        <div className="bg-slate-300 flex-1">
          <CadastroPro/>
        </div>
        <div className="bg-slate-200 w-[400px]">
          <Nota/>
        </div>
     
    </div>
  )
}

export default Home