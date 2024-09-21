"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProduitPage from "@/components/Table/produit/produit";
import AddNewProduit from './AddNewItem';
import { useProduits } from "@/hooks/useProduits";
import { Suspense, useEffect, useState } from "react";
import { log } from "console";
import { cn } from "@/lib/utils";
import { Button } from '@/components/ui/button';
import { Plus, X } from 'lucide-react';
import { AddNewItemDialog } from './AddNewItemDialog';
import { useCategories } from '@/hooks/useCategories';
import { TCategoriesTable, TProduitsTable, TProduitTable, TProduits } from '@/types/produits';
import { UpdateItemDialog } from './UpdateItemDialog';
import PriceInput from './PriceInput';

const ProduitsTemplate = ({
    ProduitsTable,
    categoriesTable,
    produitsToContext
}: {
    ProduitsTable: TProduitsTable,
    categoriesTable: TCategoriesTable,
    produitsToContext: TProduits
}) => {

    const { produitsTable, setProduitsTable, isOpen, toggle, addItemTable, setProduits, produits } = useProduits()
    const { categories, setCategories } = useCategories()
    const [catForTable, setCatForTable] = useState(categoriesTable)

    useEffect(() => {
        console.log('request 1', ProduitsTable)
        setProduitsTable(ProduitsTable)
    }, [setProduitsTable])


    useEffect(() => {
        console.log('request 2', categoriesTable)
        setCategories(categoriesTable)
    }, [setCategories])

    useEffect(() => {
        console.log('request 2', produitsToContext)
        setProduits(produitsToContext)
    }, [setProduits])



    const handleSaveProduit = (data: any, input: any) => {
        console.log(catForTable);

        console.log(data);
        console.log(input);
        const sub_catLabelArray = catForTable.filter((obj) => obj.id === input.id_sub_cat).map((obj) => obj.label);
        console.log(sub_catLabelArray);



        const dataToSave: TProduitTable = {
            id: data.data,
            nom: input.nom,
            nom_cat: sub_catLabelArray[0],
            disabled: false,
            tx_tva: input.tx_tva
        }
        console.log(dataToSave);

        addItemTable(dataToSave)
    }




    return (
        <>

            <div className="flex">
                <Card className=' grow  p-1 md:m-8'>
                    <CardHeader className='space-y-1 '>
                        <CardTitle className='text-2xl flex justify-between'>
                            Liste des produits
                            {!isOpen ?
                                <Button variant="outline" size="icon" onClick={() => toggle()}>
                                    {isOpen ? null : <Plus className="h-4 w-4" />}
                                </Button>
                                : null}
                            <AddNewItemDialog handleSaveProduit={handleSaveProduit} />
                        </CardTitle>
                        <CardDescription>List Popular web development frameworks</CardDescription>
                    </CardHeader>
                    <CardContent className='grid gap-4'>
                        <ProduitPage produits={produitsTable}></ProduitPage>
                    </CardContent>
                </Card>

                <Card className={cn(
                    'grow-0  p-1 md:m-8 md:ml-0 w-96 opacity-100 transition-all duration-1000 _delay-1000',
                    !isOpen && 'w-0 opacity-0 md:p-0 ',
                )}>
                    <CardHeader className='space-y-1 '>
                        <CardTitle className='text-2xl flex justify-between'>
                            Ajouter un produit
                            <Button variant="outline" size="icon" onClick={() => toggle()}>
                                <X className="h-4 w-4" />
                            </Button>
                        </CardTitle>
                        <CardDescription>List Popular web development frameworks</CardDescription>
                    </CardHeader>
                    <CardContent className='grid gap-4'>
                        <AddNewProduit />

                    </CardContent>
                </Card>
            </div>
            <PriceInput />
            {JSON.stringify(produitsTable)}
            <ul>
                {produits.map((reptile) =>
                    <ul>
                        <li>{reptile.nom}</li>
                        <li>{reptile.disabled}</li>
                    </ul>

                )}
            </ul>
            <ul>
                {produitsTable.map((reptile) =>
                    <ul>
                        <li>Nom :{reptile.nom}</li>
                        <li> Didabled :{reptile.disabled}</li>

                    </ul>

                )}
            </ul>

            {/* <div className='text-2xl flex justify-between'>
                Frameworks

            </div>
            <div className="flex">
                <div className="grow space-y-4 md:p-8">
                    <ProduitPage produits={produits}></ProduitPage>
                </div>
                
                <div className={cn(
                    'grow-0 w-96 opacity-100 space-y-4 md:p-8 transition-all duration-1000 _delay-1000',
                    !isOpen && 'w-0 opacity-0 md:p-0 ',
                )}>
                    <AddNewProduit />
                </div>
            </div> */}

        </>

    )
}

export default ProduitsTemplate;

