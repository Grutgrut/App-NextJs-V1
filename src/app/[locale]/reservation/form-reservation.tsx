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
import { createReservation, sendMailThanks } from "@/lib/datas"
import { reservationSchema } from "@/lib/validators"
import { useFormReservation } from "@/hooks/useFormReservation"
import { Loading } from "@/components/common/loading"
import { isExecuting } from "next-safe-action/status"
import toast from "react-hot-toast"
import { format } from "date-fns"





/* const FormSchema = z.object({
    prenom: z
        .string()
        .min(10, {
            message: "Bio must be at least 10 characters.",
        })
        .max(160, {
            message: "Bio must not be longer than 30 characters.",
        }),
}) */

const FormSchema = z.object({
    prenom: z
        .string()
        .min(10, {
            message: "Bio must be at least 10 characters.",
        })
        .max(160, {
            message: "Bio must not be longer than 30 characters.",
        }),
    nom: z.string(),

})

const sendEmailReservation = async (data: any) => {


    let dateFormated = format(data.date, "dd/MM/yyyy HH:mm")
    data.dateFormated = dateFormated;

    if (data !== null) {
        console.log(data);
        console.log('sending email');

    }


    await sendMailThanks(data)
    //const staticData = await fetch(`http://localhost:3000/api/email/thanks`, { cache: 'force-cache' })
}

export default function TextareaForm() {
    let { date, nb_couverts } = useFormReservation();
    const form = useForm<z.infer<typeof reservationSchema>>({
        resolver: zodResolver(reservationSchema)
    })

    const { register, handleSubmit, formState: { errors }, } = form;
    //console.log(errors);
    let toastId = "";

    const { execute, result, status, reset } = useAction(createReservation, {
        onSuccess(data, input, reset) {
            toast.dismiss(toastId);
            console.log("HELLO FROM ONSUCCESS Reservation", data, input);
            toast.success("La modification a bien été effectuée !!");

            sendEmailReservation(input)///////////////////////////////////////////////////////////////////////////////ENVOYER LES DATA EN METHODE GET A LEMAIL
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

    async function onSubmit(data: z.infer<typeof reservationSchema>) {
        console.log(data);
        data.date = date
        data.couverts = nb_couverts

        setTimeout(() => { }, 3000)

        execute(data);
        /* toast((t) => (
            <span>
                Custom and <b>bold</b>
                <button onClick={() => toast.dismiss(t.id)}>
                    Dismiss
                </button>
            </span>
        )); */
        //Toast Shadcn UI
        /* toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        }) */
    }
    if (isExecuting(status)) return <Loading />;
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full px-4 sm:w-1/3 space-y-6">

                <FormField
                    control={form.control}
                    name="prenom"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>prenom</FormLabel>
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
                    name="nom"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>nom</FormLabel>
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
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>email</FormLabel>
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
                    name="telephone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>telephone</FormLabel>
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
                    name="commentaire"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Commentaire</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Tell us a little bit about yourself"
                                    className="resize-none"
                                    {...field}
                                />
                            </FormControl>
                            <FormDescription>
                                You can <span>@mention</span> other users and organizations.
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
