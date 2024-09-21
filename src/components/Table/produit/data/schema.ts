import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const produitSchema = z.object({
    id: z.number(),
    nom: z.string().optional(),
    description: z.string().optional(),
    description_longue: z.string().optional(),
})

export type TProduit = z.infer<typeof produitSchema>

export type TProduits = TProduit[];