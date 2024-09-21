import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"

import { columns } from "./columns"
import { DataTable } from "../Task/components/data-table"
import { UserNav } from "../Task/components/user-nav"

import { getUsers } from "@/lib/datas"
import { taskSchema } from "../Task/data/schema"
import { userSchema } from "../user/data/schema"

export const metadata: Metadata = {
    title: "Tasks",
    description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
async function getTasks() {
    /* const data = await fs.readFile(
        path.join(process.cwd(), "./src/app/ui/Table/Task/data/tasks.json")
    ) */
    const data = await getUsers();
    const data1 = data.data;
    console.log(data.data)

    //const tasks = JSON.parse(data.data.toString())

    return z.array(userSchema).parse(data1)
}

export default async function UserPage() {
    const response = await getUsers()
    const users = response.data;

    console.log(users);

    return (
        <>
            <div className="md:hidden">
                <Image
                    src="/examples/tasks-light.png"
                    width={1280}
                    height={998}
                    alt="Playground"
                    className="block dark:hidden"
                />
                <Image
                    src="/examples/tasks-dark.png"
                    width={1280}
                    height={998}
                    alt="Playground"
                    className="hidden dark:block"
                />
            </div>
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                {/* <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex"> */}
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
                        <p className="text-muted-foreground">
                            Here&apos;s a list of your tasks for this month!
                        </p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <UserNav />
                    </div>
                </div>
                <DataTable data={users} columns={columns} />
            </div>
        </>
    )
}