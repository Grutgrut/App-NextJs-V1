"use client";


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { UserAvatar } from "@/components/layout/user-avatar";
import { User } from "@/types";
import { logout } from "@/lib/authProvider/authProvider";



type Props = {
    user: Pick<User, "nom" | "image" | "email">;
};

export function UserNav({ user }: Props) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar
                    user={{ nom: user.nom, image: user.image || null }}
                    className="h-8 w-8 cursor-pointer"
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <div className="flex items-center justify-start gap-4 p-2">
                    <div className="flex flex-col space-y-1 leading-none">
                        {user.nom && <p className="font-medium">{user.nom}</p>}
                        {user.email && (
                            <p className="w-[200px] truncate text-sm text-zinc-700">
                                {user.email}
                            </p>
                        )}
                    </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Button
                        variant="outline"
                        className="w-full"
                        onClick={() => {
                            /*  void signOut(); */
                            logout()
                        }}
                    >
                        <LogOut className="mr-2 h-4 w-4" aria-hidden="true" />
                        Log Out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}