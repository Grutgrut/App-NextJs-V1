import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const userSchema = z.object({
    id: z.number(),
    prenom: z.string().optional().nullable(),
    nom: z.string().optional().nullable(),
    adresse: z.string().optional().nullable(),
    email: z.string(),
    telephone: z.string().optional().nullable(),
    username: z.string().optional().nullable(),
    password: z.string().optional().nullable(),
    origine: z.number(),
    subscribed: z.number(),
    is_sent: z.number(),
    is_account: z.number(),
    date_creation: z.string().optional().nullable(),
    roles: z.string().optional().nullable(),
    permissions: z.string().optional().nullable(),

})

export type Users = User[];

export type User = z.infer<typeof userSchema>