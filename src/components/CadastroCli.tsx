import{useForm}from 'react-hook-form'
import{z}from 'zod'
import { zodResolver} from "@hookform/resolvers/zod"
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { useClienteStore } from '@/store/ClienteStore'


const creatClienteFormSchema = z.object({
    nome:z.string()
})

type creatClienteFormData = z.infer<typeof creatClienteFormSchema>

const CadastroCli = () => {
    const [addCliente] = useClienteStore(state=>[state.addCliente])

const {
    register, 
    handleSubmit
}=useForm<creatClienteFormData>({
    resolver: zodResolver(creatClienteFormSchema

)})

const adicionarCli = (data:creatClienteFormData)=>{
    const Cliente = data.nome.toUpperCase()
    addCliente(Cliente)
}



  return (
    <div>
        <Card>
            <CardContent>
                <form  className="" onSubmit={handleSubmit(adicionarCli)}>
                    <div className="flex justify-between items-end p-2">
                        <div className="flex flex-col w-full space-y-4">
                            <Label htmlFor='nome'>Cliente</Label>
                            <Input className='uppercase' {...register('nome')} />
                        </div>
                        <Button className='ml-2'>+</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    </div>
  )
}

export default CadastroCli