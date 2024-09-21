"use client"
import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"

import { columns } from "./columns"
import { DataTable } from "./components/data-table"
import { UserNav } from "./components/user-nav"
import { useProduits } from "@/hooks/useProduits"
import { useEffect } from "react"
import { TProduitsTable } from "@/types/produits"

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

export default function ProduitPage({
    produits,
}: {
    produits: TProduitsTable
}) {

    return (
        <DataTable data={produits} columns={columns} />
    )
}