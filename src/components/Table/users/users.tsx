import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"

import { columns } from "./columns"
import { DataTable } from "./components/data-table"
import { UserNav } from "./components/user-nav"
import { userSchema } from "./data/schema"
import { getUsers } from "@/lib/datas"

export const metadata: Metadata = {
    title: "Tasks",
    description: "A task and issue tracker build using Tanstack Table.",
}

// Simulate a database read for tasks.
/* async function getTasks() {
    const data = await fs.readFile(
        path.join(process.cwd(), "./src/app/ui/Table/Task/data/tasks.json")
    )

    const tasks = JSON.parse(data.toString())

    return z.array(userSchema).parse(tasks)
} */

export default async function UsersPage() {
    const response = await getUsers()
    const users = response?.data;
    console.log(users)
    return (
        <DataTable data={users} columns={columns} />
    )
}