import { create } from "zustand"

type Item = {
    id:string
    nome: string
    quantidade: string
    valor: string
    
    
}
type ProductStore={
    products: Item[],   
    addProduto: (produto:Item)=>void
    produtoEdit:Item | null
    setProdutoEdit: (pro:Item|null)=>void
    updateProduto: (pro:Item)=>void  
    removerProduto: (id: string)=> void
     
}

export const useProductStore = create<ProductStore>((set)=>({
    products: [],
    produtoEdit: null,  

    addProduto: (produto)=>set( state=>({products: [...state.products,produto]})),

    setProdutoEdit: (pro)=>set({produtoEdit:pro}),
    removerProduto: (id)=> 
        set((state)=>({products: state.products.filter((item)=> item.id !== id)})),
    updateProduto:(pro)=>
        set((state)=>({
            products: state.products.map((t)=>(t.id === pro.id ? pro : t))
        }))  
    
}))
   

    
