"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
//import { toast } from "@/components/ui/use-toast"
import { useAction } from "next-safe-action/hooks"
import { Loading } from "@/components/common/loading"
import { isExecuting } from "next-safe-action/status"
import toast from "react-hot-toast"
import { produitSchemaSave } from "@/types/produits"
import { createProduit } from '../../../../lib/datas';
import { useProduits } from "@/hooks/useProduits"
import { cn } from "@/lib/utils"


export default function AddNewProduit() {
    const { addItemTable, isOpen } = useProduits()

    const form = useForm<z.infer<typeof produitSchemaSave>>({
        resolver: zodResolver(produitSchemaSave)
    })

    const { register, handleSubmit, formState: { errors }, } = form;
    console.log(errors);
    let toastId = "";

    const { execute, result, status, reset } = useAction(createProduit, {
        onSuccess(data, input: any, reset) {

            const dataToSave = { ...input }
            dataToSave.id = data.data
            dataToSave.id_sub_cat = null;
            addItemTable(dataToSave)



            toast.dismiss(toastId);
            console.log("HELLO FROM ONSUCCESS", data, input);
            toast.success("La modification a bien été effectuée !!");
            // You can reset result object by calling `reset`.
            reset();
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
    }
    if (isExecuting(status)) return <Loading />;
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={cn(
                'transition-all delay-1000 block duration-[2000] opacity-100',
                !isOpen && 'hidden opacity-0',
            )}>

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
                <Button disabled={isExecuting(status)} type="submit">
                    {isExecuting(status) ? 'Submitting...' : 'Valider'}
                </Button>
            </form>
        </Form>
    )
}
