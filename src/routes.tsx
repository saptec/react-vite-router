import{Routes, Route}from "react-router-dom"
import Home from "./pages/Home"
import Produto from "./pages/Produto"
import Layout from "./components/Layout"
import Impressao from "@/pages/Impressao"
const MainRoutes = () => {
  return (
    <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/produto" element={<Produto/>}/>
        </Route>
          <Route path="/impressao" element={<Impressao/>}/>
    </Routes>
  )
}

export default MainRoutes