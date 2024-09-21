/* import { type User } from "@prisma/client" */
import { type AvatarProps } from "@radix-ui/react-avatar"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { User as UserIcon } from "lucide-react"
import { User } from "@/types"


interface UserAvatarProps extends AvatarProps {
    user: Pick<User, "image" | "nom">
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
    return (
        <Avatar {...props}>
            {user.image ? (
                <AvatarImage alt="Picture" src={user.image} />
            ) : (
                <AvatarFallback>
                    <span className="sr-only">{user.nom}</span>
                    <UserIcon className="h-4 w-4" />
                </AvatarFallback>
            )}
        </Avatar>
    )
}