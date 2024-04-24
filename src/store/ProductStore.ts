import { create } from "zustand"

type Item = {
    id:string,
    name: string,
    quantidade: string,
    valor: string 
}
type ProductStore={
    products: Item[]
    addProduct: (product: Item) =>void
    removeProduct: (id: string) => void
    editProduct: (id: string, products:Item) => void
}

export const useProductStore = create<ProductStore>((set)=>({
    products:[],

    addProduct: (product) => set(state => ({products: [...state.products, product]}) ),

    editProduct: (id, pro) =>
        set((state)=>({
            products: state.products.map((product)=>
                product.id === id ? {...product, pro}:product
            ),
        })),

    removeProduct: (id)=>
        set((state)=>({
            products: state.products.filter((product)=>product.id !== id)
        }))
}))