import logo from '@/img/logo-delta.png'
import { useClienteStore } from '@/store/ClienteStore'
import { useProductStore } from '@/store/ProductStore'

function Impressao() {

  const [cliente] = useClienteStore(state=>[state.cliente])
  const [produtos] = useProductStore((state)=>[state.products])

  const formatter = new Intl.NumberFormat('pt-BR',{
    style: "currency",
    currency:"BRL"
  })

  const formData = new Intl.DateTimeFormat('pt-BR', {
    dateStyle:'short',
    timeStyle:'short'
  })
  
  const soma = produtos.reduce((acc, item) => acc + (+item.quantidade*+(item.valor.replace(',','.'))),0)

  return (
    <div className="h-screen  flex  font-courier text-sm mx-auto print:mx-0 print:p-0 print:m-0">
      <div className="bg-white w-[75mm] pt-4 ">
          <div className="flex">
            <div className="w-[20mm] p-1">
              <img src={logo} alt="" className='w-auto rounded-sm "'/>
            </div>
            <div className="leading-tight text-sm  flex-1 font-normal pb-4">
                <p className="">DELTA DESIGN DIGITAL</p>
                <p className="">CNPJ: 11.497.154/0001-57</p>
                <p className="">RUA RUI BARBOSA, 159A</p>
                <p className="">CENTRO - ITAMBE-BA</p>
                <p className="">(77)99948-9006</p>
                <p className="">@deltadesigndigital</p>
               
            </div>
          </div>
         
          <p className="flex px-2 text-xs">Cliente: {cliente}</p>
          <p className="flex px-2 justify-end">{formData.format(new Date)}</p>
          <hr className='border-dashed border-1 border-zinc-950 mb-1'/>
          <hr className='border-dashed border-1 border-zinc-950 mb-1 '/>
          <p className='flex justify-center items-center w-full'>Cupom Sem Valor Fiscal!</p>
          <hr className='border-dashed border-1 border-zinc-950 mb-1'/>
          <hr className='border-dashed border-1 border-zinc-950 mb-1 '/>
          <div className="">
            <p className="flex justify-between items-center px-2"><b>Nº</b><b>Nome do Produto</b></p>
            <p className="flex justify-between items-center px-2"><b>Quant.</b><b>x</b><b>Valor Un.</b> <b>Valor Total</b></p>          
          </div>
          <hr className='border-dashed border-1 border-zinc-950'/>
          <div className="overflow-x-hidden">
            {produtos.map((item, i)=>(
              <div className="flex flex-col border-b-[1px] border-dashed border-zinc-950 space-y-1 text-xs" key={item.id} >

                  <p className="flex pt-1"><span> {(i+1).toString().padStart(4, '0') }-</span> <span> {item.nome}</span></p>
                  <p className="flex justify-around py-[0.8]"><span>{item.quantidade}</span><span>x</span><span>{formatter.format(+parseFloat(item.valor.replace(',','.')))}</span><span>{formatter.format(+item.quantidade*+(item.valor.replace(',','.')))}</span>
                  </p> 
                  {/* "45".padStart(4, '0'); // "0045" */}

              </div>
            
          ))}                 
          </div>          
          <hr className='border-dashed border-1 border-zinc-950 mt-1 '/>
          <div className="p-2 flex justify-between font-semibold text-sm">
            <span></span><span>Total: {formatter.format(soma)}</span>
          </div>
          <p className="flex w-full justify-center items-center py-4 text-xs">OBRIGADO E VOLTE SEMPRE!</p>
      </div>

    </div>
  )
}

export default Impressao