"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

import { priorities, statuses } from "./data/data"
import { TProduit } from "./data/schema"
import { DataTableColumnHeader } from "./components/data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"
import { CellAction } from "./cell-action"
import { useCategories } from "@/hooks/useCategories"
import { TProduitsTable, TProduitTable } from "@/types/produits"
import { UpdateItemDialog } from "@/app/[locale]/dashboard/produits/UpdateItemDialog"
import { cn } from "@/lib/utils"


export const columns: ColumnDef<TProduitTable>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="translate-y-[2px]"
            />

        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-[2px]"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "id",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Id" />
        ),
        cell: ({ row }) => <div /* className="w-[80px]" */>{row.getValue("id")}</div>,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "nom",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Produits" />
        ),
        cell: ({ row }) => <div >{row.getValue("nom")}</div>,
        enableSorting: true,
        enableHiding: false,
    },
    {
        accessorKey: "tx_tva",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Taux TVA" />
        ),
        cell: ({ row }) => <div className="w-[80px]" >{row.getValue("tx_tva")}</div>,

        enableSorting: false,
        enableHiding: false,
    },

    {
        accessorKey: "nom_cat",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Categories" />
        ),
        cell: ({ row }) => {
            const { categories } = useCategories()
            const categorie = categories.find(
                (categorie) => categorie.value === row.getValue("nom_cat")//row.original.categorie.nom
            )

            if (!categorie) {
                return null
            }

            return (
                <div className="flex w-[100px] items-center">
                    <span>{categorie.label}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue("nom_cat"))
        },
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "nom_cat",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Catégories" />
        ),
        cell: ({ row }) => {
            const { categories } = useCategories()
            const categorie = categories.find(
                (categorie) => categorie.value === row.getValue("nom_cat")//row.original.categorie.nom
            )

            if (!categorie) {
                return null
            }

            return (
                <div className="flex w-[200px] items-center">
                    {categorie.icon_color_class && (
                        <span className={cn("block w-2 h-2 mr-2", categorie.icon_color_class)} />
                    )}
                    <span>{categorie.label}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue("nom_cat"))
        },
        enableSorting: true,
        enableHiding: false,
    },
    {
        accessorKey: "disabled",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => <div className="w-[80px]" >{row.getValue("disabled") ? "Désactivé" : "Activé"}</div>,


        enableSorting: true,
        enableHiding: true,
    },
    /* {
        accessorKey: "title",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Title" />
        ),
        cell: ({ row }) => {
            const label = labels.find((label) => label.value === row.original.email)

            return (
                <div className="flex space-x-2">
                    {label && <Badge variant="outline">{label.label}</Badge>}
                    <span className="max-w-[500px] truncate font-medium">
                        {row.getValue("title")}
                    </span>
                </div>
            )
        },
    },
    {
        accessorKey: "status",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => {
            const status = statuses.find(
                (status) => status.value === row.getValue("status")
            )

            if (!status) {
                return null
            }

            return (
                <div className="flex w-[100px] items-center">
                    {status.icon && (
                        <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    )}
                    <span>{status.label}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    },
    {
        accessorKey: "priority",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Priority" />
        ),
        cell: ({ row }) => {
            const priority = priorities.find(
                (priority) => priority.value === row.getValue("priority")
            )

            if (!priority) {
                return null
            }

            return (
                <div className="flex items-center">
                    {priority.icon && (
                        <priority.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                    )}
                    <span>{priority.label}</span>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    }, */
    /*  {
         id: "actions",
         cell: ({ row }) => <DataTableRowActions row={row} />,
     }, */
    {
        accessorKey: "action1",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => <CellAction row={row} />,
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "action2",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => <UpdateItemDialog row={row} />,
        enableSorting: false,
        enableHiding: false,
    },
]