//https://medium.com/@joris.l/tutorial-zustand-a-simple-and-powerful-state-management-solution-9ad4d06d5334
//https://refine.dev/blog/zustand-react-state/#getting-started-with-zustand
import { create } from "zustand";
import { useCategories } from "./useCategories";
import { TProduitsTable, TProduitTable, TProduits, TProduit, TProduitSave } from "@/types/produits";


export type State = {
    produitsTable: TProduitsTable;
    isOpen: boolean;
    id: number;
    itemToAdd: TProduitTable | null;
    produits: TProduits;
}


type Action = {
    setProduitsTable: (produitsTable: State['produitsTable']) => void
    toggle: () => void
    removeItemTable: (id: number) => void
    addItemTable: (item: TProduitTable) => void
    updateDisabledItemTable: (id: number, newName: boolean) => void
    setProduits: (produits: State['produits']) => void
    getProduitById: (id: number) => TProduit | undefined
    updateItemTable: (id: number, newData: TProduitTable) => void
    updateItem: (id: number, newData: TProduitSave) => void
    updateDisabledItem: (id: number, newName: boolean) => void
}


// Create your store, which includes both state and (optionally) actions
export const useProduits = create<State & Action>((set, get) => ({
    produitsTable: [],
    setProduitsTable: (produitsTable) => set(() => ({ produitsTable: produitsTable })),
    isOpen: false,
    toggle: () => set((state) => ({ isOpen: !state.isOpen })),
    id: 0,
    removeItemTable: (id: number) => set((state) => ({ produitsTable: state.produitsTable.filter((produitTable) => produitTable.id !== id) })),
    itemToAdd: null,
    addItemTable: (item: TProduitTable) => set((state) => ({ produitsTable: [...state.produitsTable, item] })),
    updateDisabledItemTable: (id, newName) => set((state) => ({
        produitsTable: state.produitsTable.map(item =>
            item.id === id ? { ...item, disabled: newName } : item
        )
    })),
    produits: [],
    setProduits: (produits) => set(() => ({ produits: produits })),
    /* getProduitById: (id) => (state) => state.find(product => product.id === id), */
    getProduitById: (id) => get().produits.find(product => product.id === id),
    updateItemTable: (id, newData) => set((state) => ({
        produitsTable: state.produitsTable.map(item =>
            item.id === id ? { ...item, ...newData } : item
        )
    })),
    updateItem: (id, newData) => set((state) => ({
        produits: state.produits.map(item =>
            item.id === id ? { ...item, ...newData } : item
        )
    })),
    updateDisabledItem: (id, newName) => set((state) => ({
        produits: state.produits.map(item =>
            item.id === id ? { ...item, disabled: !item.disabled } : item
        )
    })),


}))

/* export const useServiceRequest = leitenRequest(useModeStore, "modes", async () => {
    return API.get(`/acquisition-modes`);
  }); */