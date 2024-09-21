/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0cHZSvbZRjw
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { User, TuserTest } from "@/types"
import { createUser, updateUser } from "@/lib/datas"
import { useAction } from "next-safe-action/hooks"
import { userSchema, userSchemaTest } from "@/lib/validators"
import { log } from "console"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"
import { isExecuting } from "next-safe-action/status"
import toast from "react-hot-toast"
import { Loading } from "@/components/common/loading"

type Props = {
    user: User;
};

const UserForm = (props: Props) => {
    const { register, handleSubmit, formState: { errors }, } = useForm<z.infer<typeof userSchemaTest>>({
        resolver: zodResolver(userSchemaTest),
    });

    const { execute, result, status, reset } = useAction(updateUser, {
        onSuccess(data, input, reset) {
            console.log("HELLO FROM ONSUCCESS", data, input);
            toast.success("La modification a bien été effectuée UserForm");
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
        },
    });

    if (isExecuting(status)) return <Loading />;


    return (
        <Card className="mx-auto max-w-md">
            <CardHeader>
                <CardTitle>Users {props.user.nom}</CardTitle>
                <CardDescription>Enter your information to create a new account.</CardDescription>
            </CardHeader>
            {/*             <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const input = Object.fromEntries(formData) as {
                    id: string;
                    nom: string;
                    prenom: string;
                };
                console.log(input);


                // Action call.
                execute(input);

            }} className="grid gap-4"> */}
            <form onSubmit={handleSubmit(async (data) => {
                // Action call.
                execute(data);
            })} className="grid gap-4">
                <CardContent className="space-y-4">





                    {/* id: number;
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
    permissions: string; */}

                    <div className="grid grid-cols-2 gap-4">
                        <Input id="id" type="hidden"  {...register("id")} defaultValue={props.user.id} />
                        <div className="space-y-2">
                            <Label htmlFor="prenom">First Name</Label>
                            <Input id="prenom" type="text"{...register("prenom")} placeholder={props.user.nom} defaultValue={props.user.nom} />
                            {errors.prenom?.message && <p>{errors.prenom?.message}</p>}
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="nom">Last Name</Label>
                            <Input id="nom" type="text" {...register("nom")} placeholder="Doe" defaultValue={props.user.nom} />
                        </div>
                    </div>
                    {/* <div className="space-y-2">
                        <Label htmlFor="adresse">Address</Label>
                        <Textarea id="adresse" placeholder="123 Main St, Anytown USA" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="example@email.com" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="telephone">Phone</Label>
                        <Input id="telephone" type="tel" placeholder="(123) 456-7890" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" type="text" placeholder="johndoe" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="id">Origin</Label>
                            <Input id="id" type="number" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="origine">Origin</Label>
                            <Input id="origine" type="number" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="subscribed">Subscribed</Label>
                            <Input id="subscribed" type="number" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="is_sent">Sent</Label>
                            <Input id="is_sent" type="number" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="is_account">Account</Label>
                            <Input id="is_account" type="number" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="date_creation">Created At</Label>
                        <Input id="date_creation" type="datetime-local" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="roles">Roles</Label>
                        <Textarea id="roles" placeholder="Enter roles separated by commas" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="permissions">Permissions</Label>
                        <Textarea id="permissions" placeholder="Enter permissions separated by commas" />
                    </div> */}

                </CardContent>
                <CardFooter>
                    <Button disabled={isExecuting(status)} type="submit">
                        {isExecuting(status) ? 'Submitting...' : 'Valider'}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}

export default UserForm;