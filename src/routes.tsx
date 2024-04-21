import{Routes, Route}from "react-router-dom"
import Home from "./pages/Home"
import Produto from "./pages/Produto"
const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/produto" element={<Produto/>}/>
    </Routes>
  )
}

export default MainRoutes