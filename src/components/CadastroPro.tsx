import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver} from "@hookform/resolvers/zod"

import { Card, CardContent } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { useProductStore } from "@/store/ProductStore"

import { v4 as uuidv4 } from 'uuid'
import { useEffect } from "react"



const creatProductFormSchema = z.object({
  name: z.string()
  .min(1,'Qual nome do produto?'),
  quantidade: z.string(),
  valor: z.string()
  .min(1,'Qual Valor do produto?'),
  
})

type creatProductFormData = z.infer<typeof creatProductFormSchema>
const CadastroPro = () => {  
const [addProduto, produtoEdit, updateProduto, setProdutoEdit] = useProductStore(state => [state.addProduto, state.produtoEdit,state.updateProduto, state.setProdutoEdit])

// const [edit,  setEdit] = useState(0)
  
//  console.log(produtoEdit?.id)
 


  const {
    register, 
    handleSubmit,       
    reset,
    watch,
    setValue,    
    formState: {errors}  
  } = useForm<creatProductFormData>({
    resolver: zodResolver(creatProductFormSchema)
  })

  const valorEditar = ()=>{
    setValue("name", produtoEdit!.nome)
    setValue("quantidade", produtoEdit!.quantidade)
    setValue("valor", produtoEdit!.valor)
    
  }


  useEffect(()=>{
    if(produtoEdit){
      valorEditar()
    }
  },[produtoEdit])
 

  const adicionaDados = (data: creatProductFormData)=>{
    // console.log(data)

   

    if(produtoEdit){
      updateProduto({
        id: produtoEdit.id,
        nome: data.name,
        quantidade: data.quantidade,
        valor: data.valor
        
      })
      setProdutoEdit(null)
    }else{
      const newProduto = {
        id:uuidv4(),
        nome: data.name,
        quantidade: data.quantidade,
        valor: data.valor
        
      }
     addProduto(newProduto)     
    }
          
    reset()
  }

  const quant = watch('quantidade')
  const val = watch('valor')

  const calcular = (qt: number, vl: number)=>{
     return (qt*vl)
  }
  
  return (
    <div className="mx-auto max-w-2xl space-y-2 py-10">
      <Card>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit(adicionaDados)}>
              <div className="space-y-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Produto</Label>
                  <Input autoFocus id="name" placeholder="Nome do produto" {...register('name')} autoComplete="off"/>
                  {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="quantidade">Quantidade</Label>
                  <Input defaultValue={1} min={1} id="quantidade" placeholder="1" type="number" step="0.010" {...register('quantidade')}/>
                  {errors.quantidade && <span className="text-red-500">{errors.quantidade.message}</span>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="valor">Valor</Label>
                  <Input id="valor" placeholder="R$1000,00" min={0} type="number" step="0.010" inputMode="numeric" {...register('valor')}/>
                  {errors.valor && <span className="text-red-500">{errors.valor.message}</span>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="valor">Valor Total</Label>                 
                  <div className="text-2xl">
                    <span>R$ {val ? calcular(+quant, parseFloat(val.replace(',','.'))).toFixed(2): calcular(1, 0)} </span>
                  </div>
                </div>
              </div>
              <Button className="p-4 mr-4" type="submit">
                 ADICIONAR 
              </Button>              
          </form>
        </CardContent>
      </Card>
             
    </div>
  )
}

export default CadastroPro