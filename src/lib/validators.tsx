import { z } from "zod";

///////////////A SUPPRIMER  //////////////////////////

// Example
export const employeeFormSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  gender: z.string().min(1),
});

export type EmployeeFromValues = z.infer<typeof employeeFormSchema>;

export const employeeColumn = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  gender: z.string(),
  createAt: z.string(),
  updateAt: z.string(),
});

export type EmployeeColumn = z.infer<typeof employeeColumn>;

export const updateEmployeeFormSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  gender: z.string(),
});
///////////////A SUPPRIMER FIN //////////////////////////

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const userSchema = z.object({
  id: z.number(),
  prenom: z.string().optional().nullable(),
  nom: z.string().optional().nullable(),
  adresse: z.string().optional().nullable(),
  email: z.string().optional().nullable(),
  image: z.string().optional().nullable(),
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


export const userSchemaTest = z.object({
  id: z.string().optional(),
  prenom: z.string().min(1, { message: 'Required' }),
  nom: z.string().optional().nullable(),
})


export const reservationSchema = z.object({
  prenom: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  nom: z.string(),
  email: z.string(),
  telephone: z.string(),
  date: z.date().optional(),
  couverts: z.number().optional(),
  commentaire: z.string().optional(),
})

