/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FNj2JtlinSI
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Trash2 } from "lucide-react";
import { AlertModal } from "@/components/common/alert-modal";
import { useState } from "react";



function FolderIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
        </svg>
    )
}


function ImageIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
    )
}


function MusicIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
        </svg>
    )
}


function ShareIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
            <polyline points="16 6 12 2 8 6" />
            <line x1="12" x2="12" y1="2" y2="15" />
        </svg>
    )
}


function UploadIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="17 8 12 3 7 8" />
            <line x1="12" x2="12" y1="3" y2="15" />
        </svg>
    )
}


function VideoIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
            <rect x="2" y="6" width="14" height="12" rx="2" />
        </svg>
    )
}

const Folders = () => {
    const [alertModalOpen, setAlertModalOpen] = useState(false);
    return (
        <div className="flex flex-col">
            <div className="flex-1 space-y-4 md:p-8">
                <div className="flex h-screen w-full flex-col">
                    <header className="flex h-16 items-center border-b bg-gray-100 px-6 dark:border-gray-800 dark:bg-gray-950">
                        <Link href="#" className="flex items-center gap-2 font-semibold" prefetch={false}>
                            <FolderIcon className="h-6 w-6" />
                            <span>My Files</span>
                        </Link>
                        <div className="ml-auto flex items-center gap-4">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="hover:bg-secondary"
                                onClick={() => {
                                    setAlertModalOpen(true);
                                }}
                            > <Trash2 className="h-4 w-4 text-foreground" />
                            </Button>
                            <Button variant="outline" size="icon">
                                <UploadIcon className="h-5 w-5" />
                                <span className="sr-only">Upload</span>
                            </Button>
                            <Button variant="outline" size="icon">
                                <ShareIcon className="h-5 w-5" />
                                <span className="sr-only">Share</span>
                            </Button>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="rounded-full">
                                        <img src="/placeholder.svg" width={32} height={32} alt="Avatar" className="rounded-full" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Settings</DropdownMenuItem>
                                    <DropdownMenuItem>Log out</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </header>
                    <main className="flex-1 overflow-auto">
                        <div className="container mx-auto grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6 p-6">
                            <div className="group relative flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-gray-900 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">
                                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                                    <span className="sr-only">Open folder</span>
                                </Link>
                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-gray-900 dark:bg-gray-800 dark:group-hover:bg-gray-700">
                                    <FolderIcon className="h-10 w-10 text-gray-500 transition-colors group-hover:text-white dark:text-gray-400 dark:group-hover:text-white" />
                                </div>
                                <h3 className="mt-4 text-sm font-medium leading-tight">Documents</h3>
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">12 files</p>
                            </div>
                            <div className="group relative flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-gray-900 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">
                                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                                    <span className="sr-only">Open folder</span>
                                </Link>
                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-gray-900 dark:bg-gray-800 dark:group-hover:bg-gray-700">
                                    <ImageIcon className="h-10 w-10 text-gray-500 transition-colors group-hover:text-white dark:text-gray-400 dark:group-hover:text-white" />
                                </div>
                                <h3 className="mt-4 text-sm font-medium leading-tight">Images</h3>
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">45 files</p>
                            </div>
                            <div className="group relative flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-gray-900 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">
                                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                                    <span className="sr-only">Open folder</span>
                                </Link>
                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-gray-900 dark:bg-gray-800 dark:group-hover:bg-gray-700">
                                    <MusicIcon className="h-10 w-10 text-gray-500 transition-colors group-hover:text-white dark:text-gray-400 dark:group-hover:text-white" />
                                </div>
                                <h3 className="mt-4 text-sm font-medium leading-tight">Music</h3>
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">23 files</p>
                            </div>
                            <div className="group relative flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-gray-900 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">
                                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                                    <span className="sr-only">Open folder</span>
                                </Link>
                                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 transition-colors group-hover:bg-gray-900 dark:bg-gray-800 dark:group-hover:bg-gray-700">
                                    <VideoIcon className="h-10 w-10 text-gray-500 transition-colors group-hover:text-white dark:text-gray-400 dark:group-hover:text-white" />
                                </div>
                                <h3 className="mt-4 text-sm font-medium leading-tight">Videos</h3>
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">18 files</p>
                            </div>
                            <div className="group relative flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-gray-900 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">
                                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                                    <span className="sr-only">Open file</span>
                                </Link>
                                <img
                                    src="/placeholder.svg"
                                    width={80}
                                    height={80}
                                    alt="File thumbnail"
                                    className="h-20 w-20 rounded-full object-cover transition-all group-hover:opacity-50"
                                />
                                <h3 className="mt-4 text-sm font-medium leading-tight">Presentation.pptx</h3>
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">12.3 MB</p>
                            </div>
                            <div className="group relative flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-gray-900 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">
                                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                                    <span className="sr-only">Open file</span>
                                </Link>
                                <img
                                    src="/placeholder.svg"
                                    width={80}
                                    height={80}
                                    alt="File thumbnail"
                                    className="h-20 w-20 rounded-full object-cover transition-all group-hover:opacity-50"
                                />
                                <h3 className="mt-4 text-sm font-medium leading-tight">Report.docx</h3>
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">8.7 MB</p>
                            </div>
                            <div className="group relative flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-gray-900 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">
                                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                                    <span className="sr-only">Open file</span>
                                </Link>
                                <img
                                    src="/placeholder.svg"
                                    width={80}
                                    height={80}
                                    alt="File thumbnail"
                                    className="h-20 w-20 rounded-full object-cover transition-all group-hover:opacity-50"
                                />
                                <h3 className="mt-4 text-sm font-medium leading-tight">Design.sketch</h3>
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">45.2 MB</p>
                            </div>
                            <div className="group relative flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:border-gray-900 hover:shadow-lg dark:border-gray-800 dark:bg-gray-950">
                                <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                                    <span className="sr-only">Open file</span>
                                </Link>
                                <img
                                    src="/placeholder.svg"
                                    width={80}
                                    height={80}
                                    alt="File thumbnail"
                                    className="h-20 w-20 rounded-full object-cover transition-all group-hover:opacity-50"
                                />
                                <h3 className="mt-4 text-sm font-medium leading-tight">Invoice.pdf</h3>
                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">3.4 MB</p>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <AlertModal
                title="Are you sure?"
                description="This action cannot be undone."
                name='{data.firstName}'
                isOpen={alertModalOpen}
                onClose={() => setAlertModalOpen(false)}
                onConfirm={() => { }}
                loading={false}
            />
        </div>
    )
}

export default Folders;