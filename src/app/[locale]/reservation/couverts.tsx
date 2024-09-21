"use client"
import React from 'react'
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
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { useFormReservation } from '@/hooks/useFormReservation';
import { format, isSameDay } from 'date-fns';
import { Label } from '@/components/ui/label';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Link } from '@/navigation'

const FormSchema = z.object({
    nb_couverts: z
        .string({
            /*  required_error: "Please select an email to display.", */
        }),
})

const Couverts = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    let { updateNbCouverts, updateStep } = useFormReservation();

    //console.log('FS', service_custom);
    const handleSetNbCouverts = (nb: string) => {
        console.log(nb)
        let value = parseInt(nb)
        updateNbCouverts(value)
        updateStep(4)
    }

    const getnbCouverts = () => {
        let content = [];
        for (let i = 9; i < 43; i++) {
            let value = i.toString()
            content.push(<SelectItem key={i} value={value}>{i}</SelectItem>);

        }
        return content;
    };

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log('sata', data)
    }


    return (
        <>
            <section>
                <div className="flex flex-col items-center justify-center mx-auto max-w-7xl px-4  sm:px-6 lg:px-8 _dark:bg-gray-900">
                    <div className="w-full max-w-xl p-2 space-y-8 sm:p-8 rounded-lg shadow _dark:bg-gray-800">
                        <span>Nombre de couverts :</span>
                        <div className="grid grid-cols-4 gap-4 text-indigo text-xl pb-10">
                            <button type="button" className="text-center shadow mb-4 rounded-md border p-2" onClick={() => { handleSetNbCouverts('1') }}>1</button>
                            <button type="button" className="text-center shadow mb-4 rounded-md border p-2" onClick={() => { handleSetNbCouverts('2') }}>2</button>
                            <button type="button" className="text-center shadow mb-4 rounded-md border p-2" onClick={() => { handleSetNbCouverts('3') }}>3</button>
                            <button type="button" className="text-center shadow mb-4 rounded-md border p-2" onClick={() => { handleSetNbCouverts('4') }}>4</button>
                            <button type="button" className="text-center shadow mb-4 rounded-md border p-2" onClick={() => { handleSetNbCouverts('5') }}>5</button>
                            <button type="button" className="text-center shadow mb-4 rounded-md border p-2" onClick={() => { handleSetNbCouverts('6') }}>6</button>
                            <button type="button" className="text-center shadow mb-4 rounded-md border p-2" onClick={() => { handleSetNbCouverts('7') }}>7</button>
                            <button type="button" className="text-center shadow mb-4 rounded-md border p-2" onClick={() => { handleSetNbCouverts('8') }}>8</button>
                        </div>
                        {/* <h4>Plus de 8, veuillez cliquer ci-dessous :</h4>
                        <div className="grid grid-cols-4 gap-4 text-indigo text-xl">
                            <button type="button" className="text-center shadow mb-4 rounded-md border p-2" onClick={() => { handleSetNbCouverts(10) }}>Plus de 8</button>
                        </div> */}

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="_w-2/3 space-y-6">
                                <FormField
                                    control={form.control}
                                    name="nb_couverts"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Plus de 8, veuillez cliquer ci-dessous :</FormLabel>
                                            {/* <Select onValueChange={field.onChange} > */}
                                            <Select onValueChange={handleSetNbCouverts} >
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Nombre de couverts" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {getnbCouverts()}
                                                    {/* <SelectItem value="m@example.com">m@example.com</SelectItem>
                                                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                                                    <SelectItem value="m@support.com">m@support.com</SelectItem> */}
                                                </SelectContent>
                                            </Select>
                                            {/*  <FormDescription>
                                                You can manage email addresses in your{" "}
                                                <Link href="/reservation">email settings</Link>.
                                            </FormDescription>
                                            <FormMessage /> */}
                                        </FormItem>
                                    )}
                                />
                                {/* <Button type="submit">Submit</Button> */}
                            </form>
                        </Form>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Couverts


