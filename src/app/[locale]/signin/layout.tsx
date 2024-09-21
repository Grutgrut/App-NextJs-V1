import { type AppType } from "next/app";
import Sidebar from "@/components/layout/sidebar";



const layout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <main className="flex-1 overflow-y-auto overflow-x-hidden pt-16 bg-secondary/10 pb-1">
                {children}
            </main>

        </>
    )
}

export default layout
