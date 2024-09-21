

import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";
import { MobileSidebar } from "@/components/layout/mobile-sidebar";
import Link from "next/link";
import { Boxes } from "lucide-react";
import { UserNav } from "@/components/layout/user-nav";
/* import { signIn, useSession } from "next-auth/react"; */
import { Button } from "@/components/ui/button";
import { getSession } from "@/lib/authProvider/authProvider";
import { Session, type User } from "@/types";

export default async function Header() {
    /*     const { data: sessionData } = useSession(); */
    const sessionData: Session = await getSession();
    const userProps: User = sessionData?.user;

    /*     const userTemp = { name: 'test', image: 'test', email: 'test' }
    
        const props = {
            user: userProps
        };
     */

    console.log(sessionData)
    return (
        <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
            <nav className="flex h-16 items-center justify-between px-4">
                <Link
                    href={"/"}
                    className="hidden items-center justify-between gap-2 md:flex"
                >
                    <Boxes className="h-6 w-6" />
                    <h1 className="text-lg font-semibold">T3 app template</h1>
                </Link>
                <div className={cn("block md:!hidden")}>
                    <MobileSidebar />
                </div>

                <div className="flex items-center gap-2">
                    <ThemeToggle />
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
            </nav>
        </div>
    );
}