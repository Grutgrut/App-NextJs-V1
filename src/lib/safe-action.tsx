import { createSafeActionClient } from "next-safe-action";
import { getSession } from "./authProvider/authProvider";
//https://next-safe-action.dev/docs/getting-started

export const action = createSafeActionClient();

export const authAction = createSafeActionClient({
    // If you need to access validated input, you can use `parsedInput` how you want
    // in your middleware. Please note that `parsedInput` is typed any, as it
    // comes from an action, while middleware is an (optional) instance function.
    // Can also be a non async function.
    async middleware(parsedInput) {
        const session = await getSession();
        console.log(session);
        //const session = cookies().get("session")?.value;

        if (!session) {
            throw new Error("Session not found!");
        }

        // In the real world, you would check if the session is valid by querying a database.
        // We'll keep it very simple here.
        //const userId = await getUserIdFromSessionId(session);

        // if (!userId) {
        //throw new Error("Session is not valid!");
        //} 

        return { session };
    },
});