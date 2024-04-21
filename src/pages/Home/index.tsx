import NavBar from "@/components/NavBar"
import { Button } from "@/components/ui/button"

const Home = () => {
  return (
    <div className=" text-green-500">
      <NavBar/>
      <h1>Home</h1>
      <div className="">
        <Button>Clicar</Button>
      </div>
    </div>
  )
}

export default Home