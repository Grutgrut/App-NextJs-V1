//https://github.com/riseworks/zod-mysql
import { z } from "zod"

export const idSchema = z.object({
    id: z.number()
});

export const produitSchemaSave = z.object({
    nom: z.string().min(1, { message: 'Obligatoire' }),
    description: z.string().optional(),
    description_longue: z.string().optional(),
    id_sub_cat: z.union([z.string().min(1, { message: 'Obligatoire' }), z.number().min(1, { message: 'Obligatoire' })]),
    disabled: z.boolean(),
    tx_tva: z.string()
})

export const categorieSchemaSave = z.object({
    nom: z.string().min(1, { message: 'Obligatoire' }),
    id_cat: z.union([z.string().min(1, { message: 'Obligatoire' }), z.number().min(1, { message: 'Obligatoire' })]),
    tx_tva: z.string().optional(),
    icon_color_class: z.string().optional(),
})

export const produitTableSchema = z.object({
    id: z.number(),
    nom: z.string(),
    nom_cat: z.string().optional(),
    disabled: z.union([z.boolean(), z.number()]),
    tx_tva: z.string()
})

export const categorieTableSchema = z.object({
    id: z.string(),
    label: z.string(),
    value: z.string(),
    tx_tva: z.string().optional(),
    icon_color_class: z.string().optional(),
})


export const produitSchema = idSchema.merge(produitSchemaSave);

export type TProduit = z.infer<typeof produitSchema>

export type TProduitSave = Omit<TProduit, "id">;

export type TProduits = TProduit[];

export type TProduitsData = {
    statusCode: number;
    data: TProduits;
}

export const categorie = idSchema.merge(categorieSchemaSave);

export type TCategorie = z.infer<typeof categorie>

export type TCategories = TCategorie[];

export type TCategoriesData = {
    statusCode: number;
    data: TCategories;
}


export type TProduitTable = z.infer<typeof produitTableSchema>

export type TProduitsTable = TProduitTable[];

export type TCategorieTable = {
    id: string;
    label: string
    value: string
    /* icon?: React.ComponentType<{ className?: string }> */
    tx_tva?: string,
    icon_color_class?: string,
}

export type TCategoriesTable = TCategorieTable[];