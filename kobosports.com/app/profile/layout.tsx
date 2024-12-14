import { Separator } from "@/components/ui/separator"
import { Metadata } from "next"
import Image from "next/image"
import { SidebarNav } from "./sidebar-nav"
import { Footer } from "../(dashboard)/footer"
import { Navbar } from "../(dashboard)/navbar"

export const metadata: Metadata = {
  title: "Forms",
  description: "Advanced form example using react-hook-form and Zod.",
}

const sidebarNavItems = [
  {
    title: "Profile",
    href: "/examples/profile",
  },
  {
    title: "Orders",
    href: "/examples/forms/orders",
  },
  {
    title: "Addresses",
    href: "/examples/forms/addresses",
  },
  {
    title: "Wishlist",
    href: "/examples/forms/wishlist",
  },
  {
    title: "Logout",
    href: "/",
  },
]

interface SettingsLayoutProps {
  children: React.ReactNode
}

export default function SettingsLayout({ children }: SettingsLayoutProps) {
  return (
    <>
    <Navbar/>
      <div className="space-y-6 p-10 pb-16 min-h-screen w-full">
          <h2 className="text-2xl font-bold tracking-tight text-center">My Account</h2>
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0 max-w-screen-xl justify-center">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl ">{children}</div>
        </div>
      </div>
      <Footer/>
    </>
  )
}