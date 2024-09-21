"use server";
//https://www.youtube.com/watch?v=DJvM2lSPn6w
//https://github.com/balazsorban44/auth-poc-next/blob/main/app/layout.tsx
//https://nextjs.org/docs/app/building-your-application/authentication
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import asyncPromiseRequest from "../Requests";
import { revalidatePath } from "next/cache";
import { useRouter, redirect } from "@/navigation";
import { z } from "zod";
import { action, authAction } from "../safe-action";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("2h")
        .sign(key);
}

export async function decrypt(input: string): Promise<any> {
    const { payload } = await jwtVerify(input, key, {
        algorithms: ["HS256"],
    });
    return payload;
}

// This schema is used to validate input from client.
const signupSchema = z.object({
    username: z.string(),
    email: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z
        .string()
        .min(8, { message: 'Be at least 8 characters long' })
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .regex(/[^a-zA-Z0-9]/, {
            message: 'Contain at least one special character.',
        })
        .trim()
});

// This schema is used to validate input from client.
const signinSchema = z.object({
    username: z.string().email({ message: 'Please enter a valid email.' }).trim(),
    password: z
        .string()
        .min(8, { message: 'Be at least 8 characters long' })
        .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
        .regex(/[0-9]/, { message: 'Contain at least one number.' })
        .regex(/[^a-zA-Z0-9]/, {
            message: 'Contain at least one special character.',
        })
        .trim()
});

export const signUp = action(signupSchema, async ({ username, email, password }) => {
    //const { username, password } = Object.fromEntries(formData);

    let options = { username, email, password };
    let data = { url: 'auth/signup', params: options, method: 'POST', base: 'API' };
    const response = await asyncPromiseRequest(data).then((response) => {
        return response;
    });
    //revalidatePath('/signup1')
    if (response.data.user === "userexist") {
        return { failure: "L'utilisateur existe déjà" };
    } else {
        return response;
    }


    if (username === "johndoe" && password === "123456") {
        return {
            success: "Successfully logged in",
        };
    }
});

export const signIn = action(signinSchema, async ({ username, password }) => {
    // Verify credentials && get the user

    let options = { username, password };
    let data = { url: 'auth/login', params: options, method: 'POST', base: 'API' };
    const response = await asyncPromiseRequest(data).then((response) => {
        return response;
    });
    if (response.data.length !== 0) {
        //const user = { email: formData.get("email"), name: "John" };
        const user = response.data[0];

        // Create the session
        const expires = new Date(Date.now() + 2 * 60 * 60 * 1000);
        const session = await encrypt({ user, expires });

        // Save the session in a cookie
        cookies().set("session", session, { expires, httpOnly: true });

        redirect("/dashboard");
    }
    //return response;
})

export async function logout() {
    // Destroy the session
    cookies().set("session", "", { expires: new Date(0) });
    redirect("/signin");
}

export async function getSession() {
    const session = cookies().get("session")?.value;
    if (!session) return null;
    return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
    const session = request.cookies.get("session")?.value;
    if (!session) {
        return;
    }
    // Refresh the session so it doesn't expire
    const parsed = await decrypt(session);
    parsed.expires = new Date(Date.now() + 2 * 60 * 60 * 1000);
    const res = NextResponse.next();
    res.cookies.set({
        name: "session",
        value: await encrypt(parsed),
        httpOnly: true,
        expires: parsed.expires,
    });
    return res;
}