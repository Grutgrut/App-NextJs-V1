"use client";
import Link from "next/link"

import { Button } from "../../../components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../../../components/ui/card"
import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"
import { signUp } from "@/lib/authProvider/authProvider";
import { useAction } from "next-safe-action/hooks";
import { isExecuting } from "next-safe-action/status";

export function FormError(errors: any) {
    console.log(errors)
    let tableau: any[] = [];
    if (typeof errors !== 'undefined') {
        const tableau = errors.error;
        console.log(tableau)
    }

    return (
        <>

            {tableau.map((element: string, index: number) => (
                <div>test</div>
            )


            )}
        </>
    )
}

function SignForm() {
    const { execute, result, status, reset } = useAction(signUp, {
        onSuccess(data, input, reset) {
            console.log("HELLO FROM ONSUCCESS", data, input);

            // You can reset result object by calling `reset`.
            reset();
        },
        onError(error, input, reset) {
            console.log("OH NO FROM ONERROR", error, input);

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


    /*     const FormAction = async (formData: FormData) => {
            //const name = formData.get('name');
            const response = await signUp(formData);
            console.log(response)
            // if (res.data.users === 'userexist')
            //console.log(res); 
        } */


    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-xl">Sign Up</CardTitle>
                <CardDescription>
                    Enter your information to create an account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const input = Object.fromEntries(formData) as {
                        username: string;
                        email: string;
                        password: string;
                    };

                    // Action call.
                    execute(input);
                }} className="grid gap-4">
                    <pre>Is executing: {JSON.stringify(isExecuting(status))}</pre>
                    <div>Action result:</div>
                    <pre className="result">
                        {
                            result // if got back a result,
                                ? JSON.stringify(result, null, 1)
                                : "fill in form and click on the delete user button" // if action never ran
                        }
                    </pre>
                    <div className="grid gap-2">
                        <Label htmlFor="last-name">name</Label>
                        <Input name="username" id="last-name" placeholder="Robinson" required />
                        {result?.validationErrors?.username && <p>{result.validationErrors.username}</p>}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="m@example.com"
                            required
                        />
                        {result?.validationErrors?.email && <p>{result.validationErrors.email}</p>}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input name="password" id="password" type="password" />
                        {result?.validationErrors?.password && <p>{result.validationErrors.password}</p>}
                        {/* {result?.validationErrors?.password && result.validationErrors.password.forEach((element: string) => <div>{JSON.stringify(element)}</div>)} */}
                        <FormError error={result?.validationErrors?.password}></FormError>

                    </div>
                    <Button type="submit" className="w-full">
                        Create an account
                    </Button>
                    <Button disabled={isExecuting(status)} type="submit">
                        {isExecuting(status) ? 'Submitting...' : 'Sign up'}
                    </Button>
                    <pre className="primary">{result?.data?.failure}</pre>
                    <Button variant="outline" className="w-full">
                        Sign up with GitHub
                    </Button>
                </form>
                <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link href="/signin" className="underline">
                        Sign in
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}

export default SignForm;