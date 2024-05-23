import { create } from "zustand"
// import { devtools, persist } from 'zustand/middleware'

type ClienteStore = {
    cliente: string
    addCliente: (cli:string)=>void
}


export const useClienteStore = create <ClienteStore>(
    (set)=>({
        cliente:'',
        addCliente: (cl)=>set(()=>({cliente:cl}))
    })
)

// firstName) => set(() => ({ firstName: firstName })),