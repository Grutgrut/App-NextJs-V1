"use client";
import { Link } from '@/navigation'
import { signIn } from "@/lib/authProvider/authProvider";
import { redirect } from "next/navigation";

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
import { useAction } from "next-safe-action/hooks";
import { isExecuting } from "next-safe-action/status";


function LoginForm() {
    //A retirer
    const initialValue = { username: "phil.arnaud.goddet@gmail.com", password: "Philippe_74" }
    /**/
    const { execute, result, status, reset } = useAction(signIn, {
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

    return (
        <Card className="mx-auto max-w-sm">
            <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account

                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const input = Object.fromEntries(formData) as {
                        username: string;
                        password: string;
                    };

                    // Action call.
                    execute(input);
                }} className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="username"
                            type="text"
                            placeholder="m@example.com"
                            defaultValue={initialValue.username}
                            required
                        />
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                            {/* <Link href="#" className="ml-auto inline-block text-sm underline">
                                Forgot your password?
                            </Link> */}
                        </div>
                        <Input id="password" name="password" type="password" required defaultValue={initialValue.password} />
                    </div>
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                    <Button disabled={isExecuting(status)} type="submit">
                        {isExecuting(status) ? 'Submitting...' : 'Login'}
                    </Button>
                    {/*                     <Button variant="outline" className="w-full">
                        Login with Google
                    </Button> */}
                </form>
                <div className="mt-4 text-center text-sm">
                    Don&apos;t have an account?{" "}
                    <Link href="/signup" className="underline">
                        Sign up
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}
export default LoginForm;