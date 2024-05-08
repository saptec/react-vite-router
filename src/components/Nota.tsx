import { useProductStore } from "@/store/ProductStore"
import logo from '@/img/logo.jpg'
// import { Button } from "./ui/button"
import { FaTrashAlt } from "react-icons/fa"

const formatter = new Intl.NumberFormat('pt-BR',{
  style: "currency",
  currency:"BRL"
})


const Nota = () => {
  const [produtos, setProdutoEdit,removerProduto ] = useProductStore((state)=>[state.products, state.setProdutoEdit,state.removerProduto])
  const soma = produtos.reduce((acc, item) => acc + (+item.quantidade*+(item.valor.replace(',','.'))),0)

  return (
    <div className="w-full h-full bg-[#fefede] flex flex-col relative">
      <div className="border-b-[1px] border-dotted border-zinc-950 h-24 flex">
        <img src={logo}  className="h-full "/>
        topo
      </div>

      <div className="">
          <div className="border-b-[1px]  border-zinc-950">
            <p className="flex justify-between items-center px-2"><b>Nº</b><b>Nome do Produto</b></p>
            <p className="flex justify-between items-center px-2"><b>quantidade</b><b>x</b><b>Valor Un</b> <b>Valor Total</b></p>
          </div>
          {produtos.map((item, i)=>(
            
            <div className="flex border-b-[1px] border-dashed border-zinc-950 " key={item.id} >
              <div className="flex-1 cursor-pointer " onClick={()=>setProdutoEdit(item)}>
                <p className="flex justify-start items-center px-2 space-x-3"><span># {i+1}</span><span>{item.nome}</span></p>
                <p className="flex justify-between items-center px-2"><span>{item.quantidade}</span><span>x</span><span>{formatter.format(+parseFloat(item.valor.replace(',','.')))}</span><span>{formatter.format(+item.quantidade*+(item.valor.replace(',','.')))}</span>
                </p>
              </div>
              <button className="w-16 text-base text-red-500 flex justify-center items-center border-l-2 border-dotted border-zinc-950" onClick={()=>removerProduto(item.id)}><FaTrashAlt /></button>
              
            </div>
            
          ))}

      </div>

      <div className="bg-green-500 text-white font-extrabold text-3xl flex w-full justify-center items-center py-5 absolute bottom-0 ">
          {formatter.format(soma)}
      </div>
      
    </div>
  )
}

export default Nota