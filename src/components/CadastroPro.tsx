import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver} from "@hookform/resolvers/zod"

import { Card, CardContent } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Button } from "./ui/button"
import { useProductStore } from "@/store/ProductStore"

import { v4 as uuidv4 } from 'uuid'


const creatProductFormSchema = z.object({
  name: z.string()
  .min(1,'Qual nome do produto?'),
  quantidade: z.string(),
  valor: z.string()
  .min(1,'Qual Valor do produto?')
})

type creatProductFormData = z.infer<typeof creatProductFormSchema>
const CadastroPro = () => {
    
  const addProduct = useProductStore((state)=>state.addProduct)

  const {
    register, 
    handleSubmit,       
    reset,
    formState: {errors}  
  } = useForm<creatProductFormData>({
    resolver: zodResolver(creatProductFormSchema)
  })

  const adicionaDados = (data: creatProductFormData)=>{
    console.log(data)
    const newProduto = {
       id:uuidv4(),
       name: data.name,
       quantidade: data.quantidade,
       valor: data.valor
    }
    addProduct(newProduto)
    reset()
  }

  
  
  return (
    <div className="mx-auto max-w-2xl space-y-2 py-10">
      <Card>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit(adicionaDados)}>
              <div className="space-y-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Produto</Label>
                  <Input autoFocus id="name" placeholder="Nome do produto" {...register('name')}/>
                  {errors.name && <span className="text-red-500">{errors.name.message}</span>}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="quantidade">Quantidade</Label>
                  <Input defaultValue={1} min={1} id="quantidade" placeholder="1" type="number" {...register('quantidade')}/>
                  {errors.quantidade && <span className="text-red-500">{errors.quantidade.message}</span>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="valor">Valor</Label>
                  <Input id="valor" placeholder="R$1000,00" type="text" {...register('valor')}/>
                  {errors.valor && <span className="text-red-500">{errors.valor.message}</span>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="valor">Valor Total</Label>
                  <Input id="valor" placeholder="R$1000,00" type="text" disabled />
                </div>
              </div>
              <Button className="w-full" type="submit">
                 Submit
              </Button>
          </form>
        </CardContent>
      </Card>
             
    </div>
  )
}

export default CadastroPro