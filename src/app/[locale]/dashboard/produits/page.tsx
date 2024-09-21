

import { getCategories, getCatProduits, getProduits } from "@/lib/datas";
import ProduitsTemplate from "./produits-template";
import { TCategoriesData, TCategoriesTable, TCategorieTable, TProduitsData, TProduitsTable, TProduitTable } from "@/types/produits";
import { log } from "console";

const Produits = async () => {

    const categories: TCategoriesData = await getCategories()
    const produits: TProduitsData = await getProduits()


    console.log('PRODUITST', produits);

    const ProduitsTableFx = (): TProduitsTable => {
        const produitsTable: TProduitsTable = []
        categories.data.map((categorie, idx) => {
            produits.data.map((produit, idy) => {

                if (produit.id_sub_cat === categorie.id) {
                    const tempProduit: TProduitTable = {
                        id: produit.id,
                        nom: produit.nom,
                        nom_cat: categorie.nom,
                        disabled: Boolean(produit.disabled),
                        tx_tva: produit.tx_tva
                    }
                    produitsTable.push(tempProduit)
                }
            })
        })
        console.log('PRODUITSTable', produitsTable);

        return produitsTable
    }
    const ProduitsTable = ProduitsTableFx()


    const categoriesTableFx = (): TCategoriesTable => {
        const categoriesTable: TCategoriesTable = []
        categories.data.map((categorie, idx) => {
            const catToString = categorie.id.toString()
            const tempProduit: TCategorieTable = { id: catToString, value: categorie.nom, label: categorie.nom, icon_color_class: categorie.icon_color_class }

            categoriesTable.push(tempProduit)
        })
        return categoriesTable
    }

    const categoriesTable = categoriesTableFx()


    return (
        <ProduitsTemplate ProduitsTable={ProduitsTable} categoriesTable={categoriesTable} produitsToContext={produits.data} />
    )
}

export default Produits;

