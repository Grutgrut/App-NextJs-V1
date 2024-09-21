import React from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


import { Plus } from "lucide-react"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
//import { toast } from "@/components/ui/use-toast"
import { useAction } from "next-safe-action/hooks"
import { Loading } from "@/components/common/loading"
import { isExecuting } from "next-safe-action/status"
import toast from "react-hot-toast"
import { createProduit } from '../../../../lib/datas';
import { useProduits } from "@/hooks/useProduits"
import { cn } from "@/lib/utils"
import { useCategories } from '@/hooks/useCategories'
import Link from 'next/link'
import { produitSchemaSave } from '@/types/produits'

export function AddNewItemDialog({ handleSaveProduit }: { handleSaveProduit: any }) {

    let { categories } = useCategories()
    const form = useForm<z.infer<typeof produitSchemaSave>>({
        resolver: zodResolver(produitSchemaSave),
        defaultValues: {
            disabled: false,
            tx_tva: "5"
        }
    })

    const { register, handleSubmit, formState: { errors }, reset } = form;
    console.log(errors);
    let toastId = "";


    const { execute, result, status, /* reset */ } = useAction(createProduit, {
        onSuccess(data, input: any, reset) {

            handleSaveProduit(data, input)

            // You can reset result object by calling `reset`.
            reset();
            toast.dismiss(toastId);
            console.log("HELLO FROM ONSUCCESS", data, input);
            toast.success("La modification a bien été effectuée !!");
        },
        onError(error, input, reset) {
            console.log("OH NO FROM ONERROR", error, input);
            toast.error("Une erreur s'est produite");
            // You can reset result object by calling `reset`.
            // reset();
        },
        onSettled(result, input, reset) {
            console.log("HELLO FROM ONSETTLED", result, input);

            // You can reset result object by calling `reset`.
            // reset();
        },
        onExecute(input) {
            console.log("HELLO FROM ONEXECUTE", input);
            toastId = toast.loading('Loading...');
        },
    });

    async function onSubmit(data: z.infer<typeof produitSchemaSave>) {
        execute(data);
        reset();
    }
    if (isExecuting(status)) return <Loading />;
    return (

        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="icon">
                    <Plus className="h-4 w-4" />
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader className="text-start">
                    <DialogTitle>Ajouter un produit</DialogTitle>
                    <DialogDescription>
                        Enter the name of your new framework
                    </DialogDescription>
                </DialogHeader>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} >
                        <FormField
                            control={form.control}
                            name="nom"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nom</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description_longue"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description longue</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="tx_tva"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Taux de TVA</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue="">
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <SelectItem value="5">5 %</SelectItem>
                                            <SelectItem value="10">10 %</SelectItem>
                                            <SelectItem value="20">20 %</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="id_sub_cat"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue="">
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {categories.map((categorie) => <SelectItem key={categorie.id} value={categorie.id}>{categorie.label}</SelectItem>)}
                                        </SelectContent>
                                    </Select>
                                    <FormDescription>
                                        You can manage email addresses in your{" "}
                                        <Link href="/examples/forms">email settings</Link>.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="disabled"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                                    <div className="space-y-0.5">
                                        <FormLabel className="text-base">
                                            Marketing emails
                                        </FormLabel>
                                        <FormDescription>
                                            Receive emails about new products, features, and more.
                                        </FormDescription>
                                    </div>
                                    <FormControl>
                                        <Switch
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <Button disabled={isExecuting(status)} type="submit">
                            {isExecuting(status) ? 'Submitting...' : 'Valider'}
                        </Button>
                    </form>
                </Form>
                <DialogFooter>
                    <Button disabled={isExecuting(status)} type="submit">
                        {isExecuting(status) ? 'Submitting...' : 'Valider'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}