import { type LucideIcon } from "lucide-react";
import { z } from "zod"

export interface NavItem {
    title: string;
    href: string;
    icon: LucideIcon;
    color?: string;
    isChidren?: boolean;
    children?: NavItem[];
}


export type User = {
    id: number;
    prenom: string;
    nom: string;
    adresse: string;
    email: string;
    image: string | null;
    telephone: string;
    username: string;
    password: string;
    origine: number;
    subscribed: number;
    is_sent: number;
    is_account: number;
    date_creation: string;
    roles: string;
    permissions: string;
}

export type Session = {
    user: User;
    expires: Date,
    iat: number,
    exp: number
}


export type TuserTest = {
    id: string;
    prenom: string;
    nom: string;
}


export type TServices = {
    id: number;
    jour: number;
    authorizedId: string;
}


export type TServicesData = {
    statusCode: number;
    data: TServices[];
}

export type TServiceCustom = {
    id: number;
    is_hour_complet: string;
    is_day_complet: boolean;
    is_hour_ferme: string;
    date: Date;
}

export type TServiceCustomData = {
    statusCode: number;
    data: TServiceCustom[];
}

const idSchema = z.object({
    id: z.number()
});

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.


//ZUSTAND TUTORIAL
//https://medium.com/@joris.l/tutorial-zustand-a-simple-and-powerful-state-management-solution-9ad4d06d5334


//https://stackoverflow.com/questions/72172857/how-omit-certain-value-from-nested-zod-scheme
//Example d'un OMIT DANS ZOD
/* const dataSchema = z.object({
    id: z.string().optional(),
    someOtherField: z.number(),
    name: z.string().nonempty().optional(),
  });
  
  const noNameDataSchema = dataSchema.omit({ name: true });
  
  type Data = z.TypeOf<typeof noNameDataSchema>; */




// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const produit_sub_catSchemaSave = z.object({
    nom: z.string().optional(),
    id_cat: z.number().optional().nullable(),
})

/* export const categorieSchema = z.object({
    id
    nom: z.string().min(1, { message: 'Obligatoire' }),
    description: z.string().optional(),
    description_longue: z.string().optional(),
})

export const produitWCategorieSchema = z.object({
    nom: z.string().min(1, { message: 'Obligatoire' }),
    description: z.string().optional(),
    description_longue: z.string().optional(),
    id_sub_cat: z.union([z.string().min(1, { message: 'Obligatoire' }), z.number().min(1, { message: 'Obligatoire' })])
    categorie: z.array(userInfoSchema)
    nom_cat: string;
    disabled: boolean;
})
 */

