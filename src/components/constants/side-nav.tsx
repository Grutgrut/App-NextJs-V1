import { BookOpenCheck, LayoutDashboard } from "lucide-react";
import { type NavItem } from "@/types";

export const NavItems: NavItem[] = [
  {
    title: "Home",
    icon: LayoutDashboard,
    href: "/",
    color: "text-sky-500",
  },
  {
    title: "DashboardTest",
    icon: LayoutDashboard,
    href: "/dashboardTest",
    color: "text-sky-500",
  },
  {
    title: "Dashboard",
    icon: BookOpenCheck,
    href: "/dashboard",
    color: "text-orange-500",
    isChidren: true,
    children: [
      {
        title: "Dashboard",
        icon: BookOpenCheck,
        color: "text-red-500",
        href: "/dashboard",
      },
      {
        title: "Produits",
        icon: BookOpenCheck,
        color: "text-red-500",
        href: "/dashboard/produits",
      },
      {
        title: "Example-02",
        icon: BookOpenCheck,
        color: "text-red-500",
        href: "/page-component/example/example-02",
      },
      {
        title: "Example-03",
        icon: BookOpenCheck,
        color: "text-red-500",
        href: "/page-component/example/example-03",
      },
    ],
  },
];
