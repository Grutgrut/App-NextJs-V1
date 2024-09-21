import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const userSchema = z.object({
    id: z.number(),
    prenom: z.string(),
    nom: z.string(),
    adresse: z.string(),
    email: z.string(),
    telephone: z.string(),
    username: z.string(),
    password: z.string(),
    origine: z.number(),
    subscribed: z.number(),
    is_sent: z.boolean(),
    is_account: z.boolean(),
    date_creation: z.string(),
    roles: z.string(),
    permissions: z.string(),

})

export type Users = User[];

export type User = z.infer<typeof userSchema>