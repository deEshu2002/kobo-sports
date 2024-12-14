"use client"

import * as React from "react"
import Link from "next/link"

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useMediaQuery } from "@/hooks/use-media-query"
import { Anvil, ArrowLeftIcon, ArrowRightIcon, Baby, Bookmark, Crown, Dot, Filter, MessageCirclePlus, MoreHorizontal, Search } from "lucide-react"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import * as Tabs from "@radix-ui/react-tabs"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar"
import { Separator } from "@/components/ui/separator"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"

const items = [
  { href: "#", label: "Home" },
  { href: "#", label: "Documentation" },
  { href: "#", label: "Building Your Application" },
  { href: "#", label: "Data Fetching" },
  { label: "Caching and Revalidating" },
]

const ITEMS_TO_DISPLAY = 3

export default function ProductPage({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  return (
    <main className="grid grid-cols-12 gap-x- gap-y-4 max-w-screen-xl mx-auto">
        <Breadcrumb className="col-span-12 my-6">
        <BreadcrumbList>
            <BreadcrumbItem>
            <BreadcrumbLink href={items[0].href}>{items[0].label}</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            {items.length > ITEMS_TO_DISPLAY ? (
            <>
                <BreadcrumbItem>
                {isDesktop ? (
                    <DropdownMenu open={open} onOpenChange={setOpen}>
                    <DropdownMenuTrigger
                        className="flex items-center gap-1"
                        aria-label="Toggle menu"
                    >
                        <BreadcrumbEllipsis className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                        {items.slice(1, -2).map((item, index) => (
                        <DropdownMenuItem key={index}>
                            <Link href={item.href ? item.href : "#"}>
                            {item.label}
                            </Link>
                        </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                    </DropdownMenu>
                ) : (
                    <Drawer open={open} onOpenChange={setOpen}>
                    <DrawerTrigger aria-label="Toggle Menu">
                        <BreadcrumbEllipsis className="h-4 w-4" />
                    </DrawerTrigger>
                    <DrawerContent>
                        <DrawerHeader className="text-left">
                        <DrawerTitle>Navigate to</DrawerTitle>
                        <DrawerDescription>
                            Select a page to navigate to.
                        </DrawerDescription>
                        </DrawerHeader>
                        <div className="grid gap-1 px-4">
                        {items.slice(1, -2).map((item, index) => (
                            <Link
                            key={index}
                            href={item.href ? item.href : "#"}
                            className="py-1 text-sm"
                            >
                            {item.label}
                            </Link>
                        ))}
                        </div>
                        <DrawerFooter className="pt-4">
                        <DrawerClose asChild>
                            <Button variant="outline">Close</Button>
                        </DrawerClose>
                        </DrawerFooter>
                    </DrawerContent>
                    </Drawer>
                )}
                </BreadcrumbItem>
                <BreadcrumbSeparator />
            </>
            ) : null}
            {items.slice(-ITEMS_TO_DISPLAY + 1).map((item, index) => (
            <BreadcrumbItem key={index}>
                {item.href ? (
                <>
                    <BreadcrumbLink
                    asChild
                    className="max-w-20 truncate md:max-w-none"
                    >
                    <Link href={item.href}>{item.label}</Link>
                    </BreadcrumbLink>
                    <BreadcrumbSeparator />
                </>
                ) : (
                <BreadcrumbPage className="max-w-20 truncate md:max-w-none">
                    {item.label}
                </BreadcrumbPage>
                )}
            </BreadcrumbItem>
            ))}
        </BreadcrumbList>
        </Breadcrumb>   
        <div className="col-start-1 col-span-6">
             <div className="sticky top-20">
            <div className="w-full h-[32rem] bg-slate-300 ">
            </div>
            <div className="grid grid-cols-5 gap-x-3 mt-6">
                <div className="col-span-1 h-28 bg-red-300"></div>
                <div className="col-span-1 h-28 bg-red-300"></div>
                <div className="col-span-1 h-28 bg-red-300"></div>
                <div className="col-span-1 h-28 bg-red-300"></div>
                <div className="col-span-1 h-28 bg-red-300"></div>
            </div>
            </div>
        </div>
        <div className="col-start-8 col-span-5">
            <div className="flex justify-between items-start">
                <p className="text-muted-foreground font-medium text-sm">12zxff233-8</p>
                <Button variant={"ghost"} size={"icon"} className="h-fit">
                    <span className="sr-only">Options</span>
                    <MoreHorizontal className="size-5"/>
                </Button>
            </div>
    
            {/* <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16"> */}
            <div className="mt-3 lg:col-span-2 lg:row-span-2 lg:row-end-2">
                <h1 className="text-2xl font-bold sm:text-3xl">Kobo Neoprene Kettlebell</h1>

                <div className="mt-5 flex items-center">
                <div className="flex items-center">
                    <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                    </svg>
                    <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                    </svg>
                    <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                    </svg>
                    <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                    </svg>
                    <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                    </svg>
                </div>
                <p className="ml-2 text-sm font-medium text-gray-500">1,209 Reviews</p>
                </div>

                    <h1 className="mt-8 text-4xl font-bold">$60.50</h1>

                    <div className="mt-10 flex flex-col gap-3">
                    
                    <div className="flex items-center">
                        <h2 className="font-semibold leading-none tracking-tight">Color</h2>
                        <Dot className="size-6"/>
                        <p className="font-semibold text-muted-foreground">White</p>
                    </div>

                    <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4 max-w-60">
                    <div>
                        <RadioGroupItem
                        value="card"
                        id="card"
                        className="peer sr-only"
                        aria-label="Card"
                        />
                        <Label
                        htmlFor="card"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent px-3 py-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                        <Baby className="mb-3 size-6"/>
                        Card
                        </Label>
                    </div>

                    <div>
                        <RadioGroupItem
                        value="paypal"
                        id="paypal"
                        className="peer sr-only"
                        aria-label="Paypal"
                        />
                        <Label
                        htmlFor="paypal"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent px-3 py-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                        <Anvil className="mb-3 size-6"/>
                        Paypal
                        </Label>
                    </div>

                    <div>
                        <RadioGroupItem
                        value="apple"
                        id="apple"
                        className="peer sr-only"
                        aria-label="Apple"
                        />
                        <Label
                        htmlFor="apple"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent px-3 py-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                        <Crown className="mb-3 size-6"/>
                        Apple
                        </Label>
                    </div>
                        </RadioGroup>
                    </div>

                    <div className="mt-8 flex flex-col gap-3">
                    
                    <div className="flex items-center">
                        <h2 className="font-semibold leading-none tracking-tight">Size</h2>
                        <Dot className="size-6"/>
                        <p className="font-semibold text-muted-foreground">EU Men</p>
                    </div>

                    <RadioGroup defaultValue={`size-2`} className="grid grid-cols-6 gap-3">

                    {
                        [1,2,3,4,5,6,7,8,9].map((num, index) => (
                    <div key={index}>
                        <RadioGroupItem
                        value={`size-${num.toString()}`}
                        id={`size-${num.toString()}`}
                        className="peer sr-only"
                        aria-label="size"
                        />
                        <Label
                        htmlFor={`size-${num.toString()}`}
                        className="flex flex-col items-center justify-between rounded-md border-2 border-border bg-transparent p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                        40.{num}
                        </Label>
                    </div>
                        )
                    )}
                        </RadioGroup>
                    <p className="text-sm font-semibold -mt-1">See guide</p>
                    </div>

                    <div className="flex gap-3 mt-10">
                        <Button type="button" size={"lg"} className="flex-grow h-14">
                            <svg
                                    className="size-6 mr-2"
                                    xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1m-9-1a2 2 0 0 1 4 0v1h-4Zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2Z"/></svg>

                        
                            <span className="text-base">Add to cart</span>
                            </Button>
                        <Button type="button" variant={"secondary"} className="h-14">
                            <span className="sr-only">Add to Wishlist</span>
                            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2c-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                        </Button>
                    </div>
                    <div className="flex mt-3 items-center">
                        <svg className="size-6 mr-3" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" color="currentColor"><path d="M19.5 17.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-10 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"/><path d="M14.5 17.5h-5m5.5-2V7c0-1.414 0-2.121-.44-2.56C14.122 4 13.415 4 12 4H5c-1.414 0-2.121 0-2.56.44C2 4.878 2 5.585 2 7v8c0 .935 0 1.402.201 1.75a1.5 1.5 0 0 0 .549.549c.348.201.815.201 1.75.201m11-11h1.801c.83 0 1.245 0 1.589.195c.344.194.557.55.984 1.262l1.699 2.83c.212.354.318.532.373.728c.054.197.054.403.054.816V15c0 .935 0 1.402-.201 1.75a1.5 1.5 0 0 1-.549.549c-.348.201-.815.201-1.75.201"/></g></svg>
                        <p className="font-semibold text-sm">
                            Free delivery on orders over $30.0
                        </p>
                    </div>
                </div>
        </div>
        <div className="mt-16 col-span-12">
        <Tabs.Root defaultValue="description">
          <Tabs.List
            className="sticky top-16 z-10 flex w-full items-center justify-between gap-x-3 overflow-x-auto border-b bg-background text-sm"
            aria-label="Manage your account">
            <div>
              <Tabs.Trigger
                className="group border-b-2 border-white py-1.5 text-gray-500 outline-none data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600"
                value={"description"}>
                <div className="rounded-lg px-3 py-1.5 font-medium duration-150 group-hover:bg-gray-50 group-hover:text-indigo-600 group-active:bg-gray-100">
                  {"Description"}
                </div>
              </Tabs.Trigger>

              <Tabs.Trigger
                className="group border-b-2 border-white py-1.5 text-gray-500 outline-none data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600"
                value={"additional-info"}>
                <div className="rounded-lg px-3 py-1.5 font-medium duration-150 group-hover:bg-gray-50 group-hover:text-indigo-600 group-active:bg-gray-100">
                  {"Additional Info"}
                </div>
              </Tabs.Trigger>

              <Tabs.Trigger
                className="group border-b-2 border-white py-1.5 text-gray-500 outline-none data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600"
                value={"reviews"}>
                <div className="rounded-lg px-3 py-1.5 font-medium duration-150 group-hover:bg-gray-50 group-hover:text-indigo-600 group-active:bg-gray-100">
                  {"Reviews"}
                </div>
              </Tabs.Trigger>

              <Tabs.Trigger
                className="group border-b-2 border-white py-1.5 text-gray-500 outline-none data-[state=active]:border-indigo-600 data-[state=active]:text-indigo-600"
                value={"questions"}>
                <div className="rounded-lg px-3 py-1.5 font-medium duration-150 group-hover:bg-gray-50 group-hover:text-indigo-600 group-active:bg-gray-100">
                  {"Questions"}
                </div>
              </Tabs.Trigger>
            </div>
          </Tabs.List>

          <Tabs.Content className="relative space-y-3 py-6" value={"description"}>
            <Card className="border-none shadow-none">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">
                    Description
                </CardTitle>
              </CardHeader>
            <CardContent className="flex flex-col gap-3">
                <p>
                  It is a long established fact that a reader will be distracted by the readable content of a
                  page when looking at its layout. The point of using Lorem Ipsum is that it has a
                  more-or-less normal distribution of letters, as opposed to using Content here, content here,
                  making it look like readable English. Many desktop publishing packages and web page editors
                  now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover
                  many web sites still in their infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour and the like).
                </p>
                <h4 className="font-bold mt-3 mb-2">Information</h4>
                <p>* Weight: 10kg</p>
                <p>* Unit: 10kg</p>
                <p>* Coating: 10kg</p>
                <p>* In the box: 10kg</p>
              </CardContent>
            </Card>
          </Tabs.Content>

          <Tabs.Content className="relative space-y-3 py-6" value={"additional-info"}>
           <div className="flow-root p-6">
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Title</dt>
                    <dd className="text-gray-700 sm:col-span-2">Mr</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Name</dt>
                    <dd className="text-gray-700 sm:col-span-2">John Frusciante</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Occupation</dt>
                    <dd className="text-gray-700 sm:col-span-2">Guitarist</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Salary</dt>
                    <dd className="text-gray-700 sm:col-span-2">$1,000,000+</dd>
                    </div>

                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Bio</dt>
                    <dd className="text-gray-700 sm:col-span-2">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et facilis debitis explicabo
                        doloremque impedit nesciunt dolorem facere, dolor quasi veritatis quia fugit aperiam
                        aspernatur neque molestiae labore aliquam soluta architecto?
                    </dd>
                    </div>
                </dl>
                </div>
          </Tabs.Content>

          <Tabs.Content className="relative space-y-3 py-6" value={"reviews"}>
            <h1 className="font-semibold tracking-tight text-2xl">Customer reviews</h1>
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                <div className="flex items-center">
                    <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                    </svg>
                    <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                    </svg>
                    <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                    </svg>
                    <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                    </svg>
                    <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                    </svg>
                </div>
                <p className="ml-2 text-sm font-medium text-gray-500">1,209 Reviews</p>
                </div>
                <Button type="button" size={"lg"} variant={"outline"}>
                    Write review
                </Button>
            </div>

<div>
            <Separator className="mt-8" />

      </div>      <Card className="border-0 border-b-2 shadow-none rounded-none">
              <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                    <Avatar className="size-8">
                        <AvatarImage src="https://source.unsplash.com/random/?Person&1" alt="profile" width={20}/>
                        <AvatarFallback>HE</AvatarFallback>
                    </Avatar>
                    <p className="text-sm font-medium leading-none">My name is </p>
                    </div>
                <div className="flex items-center">
                    <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                    </svg>
                    <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                    </svg>
                    <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                    </svg>
                    <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                    </svg>
                    <svg className="block h-4 w-4 align-middle text-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                    </svg>
                </div>
                
              </CardHeader>
              <CardContent className="pb-2">
                <p className="line-clamp-3 text-sm">
                  It is a long established fact that a reader will be distracted by the readable content of a
                </p>
              </CardContent>
              <CardFooter>
                <p className="mr-auto text-xs text-muted-foreground">24 hours ago</p>
              </CardFooter>
            </Card>
          </Tabs.Content>

          <Tabs.Content className="relative space-y-3 py-6" value={"questions"}>
            <div className="flex justify-between items-center">
           <h1 className="font-semibold tracking-tight text-2xl">Questions</h1>
               <Button type="button" size={"lg"} variant={"outline"}>
                    Got a Question?
                </Button>
            </div>

<div>
            <Separator className="mt-8" />

      </div>      
      <Card className="border-0 border-b-2 shadow-none rounded-none">
              <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion> 
            </Card>
          </Tabs.Content>
        </Tabs.Root>

        </div>
        <div className="my-16 col-span-12">
            <h4 className="font-semibold text-lg leading-none tracking-tight">
                You might also like
            </h4>

        <Carousel
              opts={{
                align: "start",
              }}
              className="w-full mt-8"
        >
      <CarouselContent className="space-x-6">
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/5">          
             <div className="flex flex-col group/item">
                <div className="relative">
                    <div className="relative h-60 w-full overflow-hidden rounded-sm items-center justify-center">
                        <img className="object-center h-full object-cover transition duration-500 group-hover/item:scale-105" src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="product image" />
                    </div>
                    <Link href={"#"} className="relative mt-4 block">
                        <h3 className="font-medium ">What was the name</h3>
                    </Link>
                    <div className="absolute inset-x-0 top-0 flex h-60 justify-end items-end overflow-hidden rounded-sm p-4">
                        <div aria-hidden={true} className="absolute opacity-0 group-hover/item:opacity-50 transition-opacity inset-x-0 bottom-0 h-28 w-full bg-gradient-to-t from-gray-400 to-transparent"></div>
                        <Button type="button" className="bg-background hover:bg-secondary w-full invisible group-hover/item:visible font-medium text-sm z-10" variant={"secondary"}>Add to Cart</Button>
                    </div>

                    <div className="absolute top-4 right-4">
                        <button
                            className="invisible group-hover/item:visible z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
                        >
                            <span className="sr-only">Wishlist</span>

                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            />
                            </svg>
                        </button>
                </div>
                </div>
                <Link href={"#"}>
                    <p className="font-medium mt-2">
                        $49.99 <span className="text-muted-foreground line-through ml-1">$80</span>
                    </p>
                </Link>

                </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='left-auto right-10 visible -top-11'/>
      <CarouselNext className='visible right-0 -top-11'/>
    </Carousel>


        </div>
    </main>
  );
}

// <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
//         <div className="h-56 w-full">
//           <a href="#">
//             <img className="mx-auto h-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg" alt="" />
//             <img className="mx-auto hidden h-full dark:block" src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg" alt="" />
//           </a>
//         </div>
//         <div className="pt-6">
//           <div className="mb-4 flex items-center justify-between gap-4">
//             <span className="me-2 rounded bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-800 dark:bg-primary-900 dark:text-primary-300"> Up to 35% off </span>

//             <div className="flex items-center justify-end gap-1">
//               <button type="button" data-tooltip-target="tooltip-quick-look" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//                 <span className="sr-only"> Quick look </span>
//                 <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//                   <path stroke="currentColor" stroke-width="2" d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
//                   <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
//                 </svg>
//               </button>
//               <div id="tooltip-quick-look" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
//                 Quick look
//                 <div className="tooltip-arrow" data-popper-arrow=""></div>
//               </div>

//               <button type="button" data-tooltip-target="tooltip-add-to-favorites" className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
//                 <span className="sr-only"> Add to Favorites </span>
//                 <svg className="h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z" />
//                 </svg>
//               </button>
//               <div id="tooltip-add-to-favorites" role="tooltip" className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700" data-popper-placement="top">
//                 Add to favorites
//                 <div className="tooltip-arrow" data-popper-arrow=""></div>
//               </div>
//             </div>
//           </div>

//           <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max</a>

//           <div className="mt-2 flex items-center gap-2">
//             <div className="flex items-center">
//               <svg className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
//               </svg>

//               <svg className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
//               </svg>

//               <svg className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
//               </svg>

//               <svg className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
//               </svg>

//               <svg className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
//               </svg>
//             </div>

//             <p className="text-sm font-medium text-gray-900 dark:text-white">5.0</p>
//             <p className="text-sm font-medium text-gray-500 dark:text-gray-400">(455)</p>
//           </div>

//           <ul className="mt-2 flex items-center gap-4">
//             <li className="flex items-center gap-2">
//               <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
//               </svg>
//               <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Fast Delivery</p>
//             </li>

//             <li className="flex items-center gap-2">
//               <svg className="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
//               </svg>
//               <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Best Price</p>
//             </li>
//           </ul>

//           <div className="mt-4 flex items-center justify-between gap-4">
//             <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">$1,699</p>

//             <button type="button" className="inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
//               <svg className="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
//                 <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6" />
//               </svg>
//               Add to cart
//             </button>
//           </div>
//         </div>
//       </div>