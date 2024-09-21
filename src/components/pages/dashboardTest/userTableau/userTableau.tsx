
import { getUsers, getUsersPages } from "@/lib/datas"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../../../ui/tabs"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../../ui/card"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../../ui/table"
import { Badge } from "../../../ui/badge"
import { useState } from "react"




export default async function UserTableau() {


    type User = {
        id: number,
        prenom: string,
        nom: string,
        adresse: string,
        email: string,
        telephone: string,
        username: string,
        password: string,
        origine: number,
        subscribed: number,
        is_sent: number,
        is_account: number,
        date_creation: Date,
        roles: string[],
        permissions: string[]
    }
    type Users = User[];


    const res = await getUsers();
    const data = res.data;
    const users: Users = data;




    return (
        <>
            <TabsContent value="week">
                <Card x-chunk="dashboard-05-chunk-3">
                    <CardHeader className="px-7">
                        <CardTitle>Orders</CardTitle>
                        <CardDescription>
                            Recent orders from your store.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Customer</TableHead>
                                    <TableHead className="hidden sm:table-cell">
                                        Type
                                    </TableHead>
                                    <TableHead className="hidden sm:table-cell">
                                        Status
                                    </TableHead>
                                    <TableHead className="hidden md:table-cell">
                                        Date
                                    </TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {users.map((option: User, index: number) => (
                                    <>
                                        {/* <h1 key={index}>{option.username} test</h1> */}
                                        <TableRow key={index}>
                                            <TableCell>
                                                <div className="font-medium">{option.username}</div>
                                                <div className="hidden text-sm text-muted-foreground md:inline">
                                                    emma@example.com
                                                </div>
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">
                                                Sale
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">
                                                <Badge className="text-xs" variant="secondary">
                                                    Fulfilled
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                2023-06-26
                                            </TableCell>
                                            <TableCell className="text-right">$450.00</TableCell>
                                        </TableRow>
                                    </>
                                ))
                                }
                                <TableRow className="bg-accent">
                                    <TableCell>
                                        <div className="font-medium">Liam Johnson</div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            liam@example.com
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        Sale
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        <Badge className="text-xs" variant="secondary">
                                            Fulfilled
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        2023-06-23
                                    </TableCell>
                                    <TableCell className="text-right">$250.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">Olivia Smith</div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            olivia@example.com
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        Refund
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        <Badge className="text-xs" variant="outline">
                                            Declined
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        2023-06-24
                                    </TableCell>
                                    <TableCell className="text-right">$150.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">Noah Williams</div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            noah@example.com
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        Subscription
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        <Badge className="text-xs" variant="secondary">
                                            Fulfilled
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        2023-06-25
                                    </TableCell>
                                    <TableCell className="text-right">$350.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">Emma Brown</div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            emma@example.com
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        Sale
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        <Badge className="text-xs" variant="secondary">
                                            Fulfilled
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        2023-06-26
                                    </TableCell>
                                    <TableCell className="text-right">$450.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">Liam Johnson</div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            liam@example.com
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        Sale
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        <Badge className="text-xs" variant="secondary">
                                            Fulfilled
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        2023-06-23
                                    </TableCell>
                                    <TableCell className="text-right">$250.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">Liam Johnson</div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            liam@example.com
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        Sale
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        <Badge className="text-xs" variant="secondary">
                                            Fulfilled
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        2023-06-23
                                    </TableCell>
                                    <TableCell className="text-right">$250.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">Olivia Smith</div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            olivia@example.com
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        Refund
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        <Badge className="text-xs" variant="outline">
                                            Declined
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        2023-06-24
                                    </TableCell>
                                    <TableCell className="text-right">$150.00</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell>
                                        <div className="font-medium">Emma Brown</div>
                                        <div className="hidden text-sm text-muted-foreground md:inline">
                                            emma@example.com
                                        </div>
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        Sale
                                    </TableCell>
                                    <TableCell className="hidden sm:table-cell">
                                        <Badge className="text-xs" variant="secondary">
                                            Fulfilled
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="hidden md:table-cell">
                                        2023-06-26
                                    </TableCell>
                                    <TableCell className="text-right">$450.00</TableCell>
                                </TableRow>
                                {users.map((option: User, index: number) => (
                                    <>
                                        {/* <h1 key={index}>{option.username} test</h1> */}
                                        <TableRow key={index}>
                                            <TableCell>
                                                <div className="font-medium">{option.username}</div>
                                                <div className="hidden text-sm text-muted-foreground md:inline">
                                                    emma@example.com
                                                </div>
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">
                                                Sale
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">
                                                <Badge className="text-xs" variant="secondary">
                                                    Fulfilled
                                                </Badge>
                                            </TableCell>
                                            <TableCell className="hidden md:table-cell">
                                                2023-06-26
                                            </TableCell>
                                            <TableCell className="text-right">$450.00</TableCell>
                                        </TableRow>
                                    </>
                                ))
                                }
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </TabsContent>
        </>
    )
}