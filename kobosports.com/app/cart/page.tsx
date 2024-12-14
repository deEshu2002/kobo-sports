import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider, StaticCartSlider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

export default function ShopPage({children}:{children:React.ReactNode}){
    return(
        <main className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="mx-auto max-w-6xl">
      <header className="text-center space-y-8">
        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
         <p>Shop for $34 more to enjoy <span className="font-bold">FREE Shipping</span></p>
         <StaticCartSlider
            defaultValue={[80]}
            max={100}
            step={1}
            className={cn("mx-auto max-w-[500px]",)}
          />
      </header>

      <div className="mt-8">
      <div>
      <table className="w-full mt-4 text-left table-auto min-w-max">
        <thead>
          <tr>
            <th
              className="p-4 transition-colors cursor-pointer border-b border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
              <p
                className="flex items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Member
              </p>
            </th>      
            <th
              className="p-4 transition-colors cursor-pointer border-b border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
              <p
                className="flex justify-self-center items-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Quantity
              </p>
            </th>
            <th
              className="p-4 transition-colors cursor-pointer border-b border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
              <p
                className="flex items-center justify-self-center justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                Price
              </p>
            </th>
            <th
              className="p-4 transition-colors cursor-pointer border-b border-blue-gray-100 bg-blue-gray-50/50 hover:bg-blue-gray-50">
              <p
                className="flex items-center justify-self-end justify-between gap-2 font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Subtotal
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border-b border-blue-gray-50">
              <div className="flex items-center gap-3">
                <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                  alt="John Michael" className="relative inline-block h-24 w-20 object-cover object-center" />
                <div className="flex flex-col space-y-1">
                  <h3 className="block text-sm antialiased font-medium leading-normal">
                    John Michael
                  </h3>
                  <p
                    className="block text-sm antialiased font-normal leading-normal">
                    Size: 2XL, Color: Red
                  </p>
                  <Button type="button" variant={"ghost"} className="px-0 py-0 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                    Remove
                  </Button>
                </div>
              </div>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
                <label htmlFor="Quantity" className="sr-only"> Quantity </label>

                <div className="flex items-center rounded border border-gray-200 w-fit mx-auto h-10">
                  <Button variant={"ghost"} size={"icon"} className="hover:bg-background ">
                    <span className="sr-only">Decrease Quantity</span>
                    <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 12.998H5v-2h14z"/></svg>
                  </Button>

                  <Input type="number" defaultValue={1} id="Quantity" className="px-1 w-6 focus-visible:ring-0 border-none shadow-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none "/>
                  <Button variant={"ghost"} size={"icon"} className="hover:bg-background">
                    <span className="sr-only">Increase Quantity</span>
                    <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 21v-8H3v-2h8V3h2v8h8v2h-8v8z"/></svg>
                  </Button>
                </div>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <p className="block text-center font-medium font-sans text-sm leading-relaxed text-blue-gray-900">
                $90.88
              </p>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <p className="block text-end font-semibold font-sans text-sm leading-relaxed text-blue-gray-900">
                $90.88
              </p>
            </td>
          </tr>
  <tr>
            <td className="p-4 border-b border-blue-gray-50">
              <div className="flex items-center gap-3">
                <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                  alt="John Michael" className="relative inline-block h-24 w-20 object-cover object-center" />
                <div className="flex flex-col space-y-1">
                  <h3 className="block text-sm antialiased font-medium leading-normal">
                    John Michael
                  </h3>
                  <p
                    className="block text-sm antialiased font-normal leading-normal">
                    Size: 2XL, Color: Red
                  </p>
                  <Button type="button" variant={"ghost"} className="px-0 py-0 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                    Remove
                  </Button>
                </div>
              </div>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
                <label htmlFor="Quantity" className="sr-only"> Quantity </label>

                <div className="flex items-center rounded border border-gray-200 w-fit mx-auto h-10">
                  <Button variant={"ghost"} size={"icon"} className="hover:bg-background ">
                    <span className="sr-only">Decrease Quantity</span>
                    <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 12.998H5v-2h14z"/></svg>
                  </Button>

                  <Input type="number" defaultValue={1} id="Quantity" className="px-1 w-6 focus-visible:ring-0 border-none shadow-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none "/>
                  <Button variant={"ghost"} size={"icon"} className="hover:bg-background">
                    <span className="sr-only">Increase Quantity</span>
                    <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 21v-8H3v-2h8V3h2v8h8v2h-8v8z"/></svg>
                  </Button>
                </div>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <p className="block text-center font-medium font-sans text-sm leading-relaxed text-blue-gray-900">
                $90.88
              </p>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <p className="block text-end font-semibold font-sans text-sm leading-relaxed text-blue-gray-900">
                $90.88
              </p>
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b border-blue-gray-50">
              <div className="flex items-center gap-3">
                <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                  alt="John Michael" className="relative inline-block h-24 w-20 object-cover object-center" />
                <div className="flex flex-col space-y-1">
                  <h3 className="block text-sm antialiased font-medium leading-normal">
                    John Michael
                  </h3>
                  <p
                    className="block text-sm antialiased font-normal leading-normal">
                    Size: 2XL, Color: Red
                  </p>
                  <Button type="button" variant={"ghost"} className="px-0 py-0 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                    Remove
                  </Button>
                </div>
              </div>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
                <label htmlFor="Quantity" className="sr-only"> Quantity </label>

                <div className="flex items-center rounded border border-gray-200 w-fit mx-auto h-10">
                  <Button variant={"ghost"} size={"icon"} className="hover:bg-background ">
                    <span className="sr-only">Decrease Quantity</span>
                    <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 12.998H5v-2h14z"/></svg>
                  </Button>

                  <Input type="number" defaultValue={1} id="Quantity" className="px-1 w-6 focus-visible:ring-0 border-none shadow-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none "/>
                  <Button variant={"ghost"} size={"icon"} className="hover:bg-background">
                    <span className="sr-only">Increase Quantity</span>
                    <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 21v-8H3v-2h8V3h2v8h8v2h-8v8z"/></svg>
                  </Button>
                </div>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <p className="block text-center font-medium font-sans text-sm leading-relaxed text-blue-gray-900">
                $90.88
              </p>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <p className="block text-end font-semibold font-sans text-sm leading-relaxed text-blue-gray-900">
                $90.88
              </p>
            </td>
          </tr>
          <tr>
            <td className="p-4 border-b border-blue-gray-50">
              <div className="flex items-center gap-3">
                <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                  alt="John Michael" className="relative inline-block h-24 w-20 object-cover object-center" />
                <div className="flex flex-col space-y-1">
                  <h3 className="block text-sm antialiased font-medium leading-normal">
                    John Michael
                  </h3>
                  <p
                    className="block text-sm antialiased font-normal leading-normal">
                    Size: 2XL, Color: Red
                  </p>
                  <Button type="button" variant={"ghost"} className="px-0 py-0 w-fit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                    Remove
                  </Button>
                </div>
              </div>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
                <label htmlFor="Quantity" className="sr-only"> Quantity </label>

                <div className="flex items-center rounded border border-gray-200 w-fit mx-auto h-10">
                  <Button variant={"ghost"} size={"icon"} className="hover:bg-background ">
                    <span className="sr-only">Decrease Quantity</span>
                    <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 12.998H5v-2h14z"/></svg>
                  </Button>

                  <Input type="number" defaultValue={1} id="Quantity" className="px-1 w-6 focus-visible:ring-0 border-none shadow-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none "/>
                  <Button variant={"ghost"} size={"icon"} className="hover:bg-background">
                    <span className="sr-only">Increase Quantity</span>
                    <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 21v-8H3v-2h8V3h2v8h8v2h-8v8z"/></svg>
                  </Button>
                </div>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <p className="block text-center font-medium font-sans text-sm leading-relaxed text-blue-gray-900">
                $90.88
              </p>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <p className="block text-end font-semibold font-sans text-sm leading-relaxed text-blue-gray-900">
                $90.88
              </p>
            </td>
          </tr>
        </tbody>
      </table>
      </div>

        <div className="mt-24 grid grid-cols-12 gap-x-9">
          <form className="col-start-1 col-span-5 relative h-fit flex-grow">
            <h3 className="font-semibold leading-none text-lg"> Have a coupon?</h3>
            <p className="text-sm text-muted-foreground mt-3">Add your code for instant card discount</p>
              
              <Input name='code' type="text" className="pr-16 h-12 shadow-none mt-4" placeholder="Input"/>
              <Button variant={"ghost"} type="submit" className=" px-3 hover:bg-muted absolute right-0 bottom-1.5 font-semibold">
                Apply
              </Button>
            </form>
          <Card className="col-start-7 col-span-6 border rounded-md shadow-none">
            <CardHeader>
              <CardTitle>
                <h3 className="font-bold text-lg">Cart Summary</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
               <RadioGroup defaultValue="free-ship" className="space-y-2">
                <div className="relative flex items-center p-4">
                  <RadioGroupItem value="free-ship" id="r1" className="peer mr-3 z-10"/>
                  <Label htmlFor="r1" className="z-10">Free Shipping</Label>
                  <div aria-hidden={true} className="absolute left-0 top-0 size-full border-2 rounded-sm peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-secondary/50">
                  </div>
                </div>
                <div className="relative flex items-center p-4">
                  <RadioGroupItem value="express-ship" id="r2" className="peer mr-3 z-10"/>
                  <Label htmlFor="r2" className="z-10">Express Shipping</Label>
                  <div aria-hidden={true} className="absolute left-0 top-0 size-full border-2 rounded-sm peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-secondary/50">
                  </div>
                </div>
              </RadioGroup>

          <dl className="mt-8">
              <div className="flex justify-between items-center">
                <dt className="text-sm text-muted-foreground">Subtotal</dt>
                <dd className="text-sm font-medium">$330.00</dd>
              </div>
              <div className="flex justify-between items-center pt-3">
                <dt className="inline-flex text-sm text-muted-foreground">
                  <span>Shipping estimate</span>
                  <a href="#" className="ml-2 flex-shrink">
                    <span className="sr-only"></span>
                    <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11.95 18q.525 0 .888-.363t.362-.887t-.362-.888t-.888-.362t-.887.363t-.363.887t.363.888t.887.362m.05 4q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m.1-14.3q.625 0 1.088.4t.462 1q0 .55-.337.975t-.763.8q-.575.5-1.012 1.1t-.438 1.35q0 .35.263.588t.612.237q.375 0 .638-.25t.337-.625q.1-.525.45-.937t.75-.788q.575-.55.988-1.2t.412-1.45q0-1.275-1.037-2.087T12.1 6q-.95 0-1.812.4T8.975 7.625q-.175.3-.112.638t.337.512q.35.2.725.125t.625-.425q.275-.375.688-.575t.862-.2"/></svg>
                  </a>
                </dt>
                <dd className="text-sm font-medium">$5.00</dd>
              </div>
              <div className="flex justify-between items-center pt-3">
                <dt className="text-sm text-muted-foreground">Tax estimate</dt>
                <dd className="text-sm font-medium">$13.30</dd>
              </div>
              <div className="flex justify-between items-center border-t pt-3 mt-4">
                <dt className="text-base font-medium ">Order total</dt>
                <dd className="text-base font-medium">$13.30</dd>
              </div>
          </dl>
            </CardContent>
            <CardFooter className="pt-4">
              <Button type="button" className="w-full h-12" size={"lg"}>
                Checkout
              </Button>
            </CardFooter>
          </Card>
          {/* <div className="">


            <dl className="space-y-0.5 text-sm text-gray-700">
              <div className="flex justify-between">
                <dt>Subtotal</dt>
                <dd>£250</dd>
              </div>

              <div className="flex justify-between">
                <dt>VAT</dt>
                <dd>£25</dd>
              </div>

              <div className="flex justify-between">
                <dt>Discount</dt>
                <dd>-£20</dd>
              </div>

              <div className="flex justify-between !text-base font-medium">
                <dt>Total</dt>
                <dd>£200</dd>
              </div>
            </dl>

            <div className="flex justify-end">
              <span
                className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="-ms-1 me-1.5 size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                  />
                </svg>

                <p className="whitespace-nowrap text-xs">2 Discounts Applied</p>
              </span>
            </div>

          </div> */}
        </div>
      </div>
    </div>
    </main>
)}