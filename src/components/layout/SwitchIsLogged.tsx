
import { getSession } from "@/lib/authProvider/authProvider";
import { Session, type User } from "@/types";
import { UserNav } from "@/components/layout/user-nav";
import React from 'react'
import { FC } from 'react'
import { Link } from "@/navigation";

export default async function SwitchIsLogged() {
    /*     const isClientComponent = typeof window !== 'undefined';
        console.log('is client component', isClientComponent) */
    /*     const { data: sessionData } = useSession(); */
    const sessionData: Session = await getSession();
    const userProps: User = sessionData?.user;

    return (
        <div>
            {sessionData?.user ? (
                <UserNav user={userProps} />
            ) : (
                <>
                    <Link href="/signin" className="button">
                        Sign in
                    </Link>
                    {/*  <Button size="sm"
                            onClick={() => {
                                void signIn();
                            }}
                        >
                            Sign In
                        </Button>  */}
                </>
            )}
        </div>
    )
}
