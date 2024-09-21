
import { TCategoriesTable, TCategorieTable } from "@/types/produits";
import { create } from "zustand";

export type State = {
    categories: TCategoriesTable;
    id: number;
    itemToAdd: TCategorieTable | null;
}


type Action = {
    setCategories: (categories: State['categories']) => void
    removeItem: (id: number) => void
    addItem: (item: TCategorieTable) => void
    getCategorieById: (id: number) => TCategorieTable | undefined
}


// Create your store, which includes both state and (optionally) actions
export const useCategories = create<State & Action>((set, get) => ({
    categories: [],
    setCategories: (categories) => set(() => ({ categories: categories })),
    id: 0,
    removeItem: (id: number) => set((state) => ({ categories: state.categories.filter((categorie) => categorie.id !== id.toString()) })),
    itemToAdd: null,
    addItem: (item: TCategorieTable) => set((state) => ({ categories: [...state.categories, item] })),
    getCategorieById: (id) => get().categories.find(categorie => categorie.id === id.toString()),
}))

/* export const useServiceRequest = leitenRequest(useModeStore, "modes", async () => {
    return API.get(`/acquisition-modes`);
  }); */