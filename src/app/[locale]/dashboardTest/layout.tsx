"use client"
import { Home, LineChart, Link, Package, Package2, Settings, ShoppingCart, Users2 } from "lucide-react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import Sidebar from "@/components/layout/sidebar";


const layout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <Sidebar />
            <main className="flex-1 overflow-y-auto overflow-x-hidden pt-16 bg-secondary/10 pb-1">
                {children}
            </main>

        </>
    )
}

export default layout
