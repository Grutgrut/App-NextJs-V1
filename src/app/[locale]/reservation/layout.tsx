"use client"
const layout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            <main className="">
                {children}
            </main>

        </>
    )
}

export default layout
