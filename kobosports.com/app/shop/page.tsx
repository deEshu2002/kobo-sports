"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectLabel, SelectItem } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Slider, SliderWithTwoThumb } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

export default function ShopPage({children}:{children:React.ReactNode}){
    return(
        <main className="max-w-screen-2xl mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 ">

    <header>
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Product Collection</h2>

      <p className="mt-4 max-w-md text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
        dicta incidunt est ipsam, officia dolor fugit natus?
      </p>
    </header>

    <div className="mt-8 block lg:hidden">
      <button
        className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
      >
        <span className="text-sm font-medium"> Filters & Sorting </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4 rtl:rotate-180"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>

    <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-8 lg:items-start lg:gap-8">
      <aside className="lg:col-span-2">
        <nav  className="top-36 hidden space-y-8 lg:block">
            <h3 className="font-bold text-xl tracking-wide">Filter</h3>
           
            <div>
                <h3
                    className="group-hover:underline group-hover:underline-offset-4 font-semibold uppercase tracking-wide"
                >
                    Category
                </h3> 
                <ul className="space-y-4 mt-4 leading-tight tracking-tight text-base font-medium text-muted-foreground">
                    <li><Link href={"#"}>Hello</Link></li>
                    <li className="text-foreground underline underline-offset-4"><Link href={"#"}>Bye</Link></li>
                    <li><Link href={"#"}>Good</Link></li>
                    <li><Link href={"#"}>Nice</Link></li>
                    <li><Link href={"#"}>Show</Link></li>
                </ul>
            </div>

            <div>
                <h3
                    className="group-hover:underline group-hover:underline-offset-4 font-semibold uppercase tracking-wide"
                >
                    Color
                </h3> 


                <RadioGroup
                  defaultValue={`zinc`}
                  loop={false}
                  // onValueChange={(value: string) => {}}
                className="mt-4 flex items-center gap-1">
                  {["zinc", "rose", "blue", "green", "orange"].map((elem, idx) => {
                    const colorClass = `bg-${elem}-400`;
                    return (
                    <div key={idx} className="flex items-center">
                      <RadioGroupItem value={`${elem}`} id={`r${elem}`} className={`peer sr-only `} />
                      <Label
                        htmlFor={`r${elem}`}
                        className={cn(
                          "flex size-9 cursor-pointer items-center justify-center rounded-full border-2 border-transparent peer-data-[state=checked]:border-primary "
                        )}>
                        <span
                        aria-disabled={true}
                          className={cn(
                            "flex size-6 items-center justify-center rounded-full text-secondary-foreground",
                            colorClass
                          )}></span>
                        <span className="sr-only">{"Comment correspondance"}</span>
                      </Label>
                    </div>
                  )
                  })}
                </RadioGroup>

            </div>


            <div>
                <h3
                    className="group-hover:underline group-hover:underline-offset-4 font-semibold uppercase tracking-wide"
                >
                    Size
                </h3> 
                <RadioGroup defaultValue={`size-2`} className="mt-4 flex items-center flex-wrap gap-3">

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
                        className="flex flex-col items-center border-2 border-border bg-transparent p-3 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                        40.{num}
                        </Label>
                    </div>
                        )
                    )}
                        </RadioGroup>
            </div>

            
            <div>
                <h3
                    className="group-hover:underline group-hover:underline-offset-4 font-semibold uppercase tracking-wide"
                >
                    Size
                </h3> 
                <SliderWithTwoThumb
                className="mt-6"
                    defaultValue={[18, 80]}
                    max={100}
                    step={1}
                />
                <div className="flex justify-center mt-4">
                    <p>{`$${400} - $${3200}`}</p>
                </div>
            </div>

                 <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1" className="border-b-0 ">
                        <AccordionTrigger className="text-base font-semibold uppercase tracking-wide hover:no-underline">Availability</AccordionTrigger>
                        <AccordionContent>
                            <ul className="space-y-3">
                            <li className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    In Stock (5+)
                                </label>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Pre Order(5+)
                                </label>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Checkbox id="terms" />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Out of Stock (5+)
                                </label>
                            </li>
                        </ul>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

        </nav>
      </aside>

      <div className="lg:col-span-6">
        <div className="flex justify-between items-center">
                <p className="leading-none text-muted-foreground">{`${132} products`}</p>
            <Select>
                <SelectTrigger className="space-x-2 border-none focus:ring-0 text-base font-medium shadow-none size-fit p-0">
                    <SelectValue placeholder="Sort By"/>
                </SelectTrigger>
                <SelectContent align="end">
                    <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                </SelectContent>
        </Select>
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
            <div id="chip" className="inline-flex items-center relative rounded-md bg-muted py-0.5 pl-2 pr-3 border border-transparent text-sm transition-all shadow-sm">
                <Button variant={"secondary"} type="button" size={"icon"} className="size-fit shadow-none mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5">
                    <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                    </svg>
                </Button>
                <span className="font-semibold">hello </span>
            </div>
            <div id="chip" className="inline-flex items-center relative rounded-md bg-muted py-0.5 pl-2 pr-3 border border-transparent text-sm transition-all shadow-sm">
                <Button variant={"secondary"} type="button" size={"icon"} className="size-fit shadow-none mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5">
                    <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                    </svg>
                </Button>
                <span className="font-semibold">hello </span>
            </div>
            <div id="chip" className="inline-flex items-center relative rounded-md bg-muted py-0.5 pl-2 pr-3 border border-transparent text-sm transition-all shadow-sm">
                <Button variant={"secondary"} type="button" size={"icon"} className="size-fit shadow-none mr-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5">
                    <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                    </svg>
                </Button>
                <span className="font-semibold">hello </span>
            </div>
            <div id="chip" className="inline-flex items-center relative rounded-md  py-0.5 pl-2 pr-3 border border-transparent text-sm text-muted-foreground transition-all">
                <Button variant={"secondary"} type="button" size={"icon"} className="size-fit shadow-none mr-1 bg-background hover:bg-background">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-5 text-muted-foreground">
                    <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                    </svg>
                </Button>
                <span className="font-semibold">Clear all </span>
            </div>
        </div>

        <ul className="mt-6 grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {
                Array.from({length: 12}).map((_, idx) => (
          <li key={idx} className="group relative">
            <a href="#" className="block overflow-hidden">

                    <div className="relative h-64 w-full overflow-hidden items-center justify-center">
                        <img className="object-center h-full object-cover transition duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="product image" />
                    </div>

              <div className="relative bg-white">
                <div className="flex items-center pt-3">
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
                    <p className="text-sm leading-none ">{`(${1235})`}</p>
                </div>

                <h3
                  className="group-hover:underline group-hover:underline-offset-4 pt-1"
                >
                  Product Name
                </h3>

                    <div className="inline-flex mt-2 space-x-3">
                        <p>
                            <span className="sr-only"> Discounted Price </span>
                            <span className="tracking-wider font-bold"> £24.00 </span>
                        </p>
                        <p>
                            <span className="sr-only"> Regular Price </span>
                            <span className="text-muted-foreground line-through">$80</span>
                        </p>
                    </div>

              </div>
            </a>
            <div className="absolute top-3 right-3">
                        <button
                            className="invisible group-hover:visible z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
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
            <Button type="button" className="w-full font-medium text-sm mt-3" variant={"secondary"}>Add to Cart</Button>
          </li>


                ))
            }
        </ul>
        <div className="flex justify-center">
            <Button className="my-12" size={"lg"}>Load more</Button>
        </div>
      </div>
    </div>
        </main>
    )
}