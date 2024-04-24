import { useProductStore } from "@/store/ProductStore"
import { Button } from "./ui/button"




const Nota = () => {
  const [produtos, removeProduct] = useProductStore((state)=>[state.products, state.removeProduct])

  return (
    <div>
      <ul>
        {produtos.map((item)=>(
          <li key={item.id}>
            {item.name} -- {item.valor} <Button onClick={()=>removeProduct(item.id)}>Remover</Button>
            {item.name} -- {item.valor} <Button onClick={()=>''}>editar</Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nota