import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Slider, StaticCartSlider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";

export default function ShopPage({children}:{children:React.ReactNode}){
    return(
        <main className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="mx-auto max-w-6xl">
      <header className="text-center">
        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Checkout</h1>
      </header>

      <div className="mt-16">
        <div className="grid grid-cols-12 gap-x-9">
          <div className="space-y- col-start-1 col-span-6 relative h-fit flex flex-col items-center ">
            <p className="text-sm mt-1">Returning Customer? <a href="#" className="font-bold ml-1">Click here to Login</a></p>
            <Separator className="mt-6"/>
             <Card className="mt-8 shadow-none w-full">
      <CardHeader>
        <CardTitle className="text-lg">Contact Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-6">
            <div className="grid grid-cols-2 gap-x-6">

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" placeholder="First Name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Last Name" />
            </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Email Address" />
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
 <Card className="mt-6 shadow-none w-full">
      <CardHeader>
        <CardTitle className="text-lg">Shipping address</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-6">

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">House Number</Label>
              <Input id="email" placeholder="Email Address" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Address</Label>
              <Input id="email" placeholder="Email Address" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Street</Label>
              <Input id="email" placeholder="Email Address" />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Country</Label>
             <Select>
                  <SelectTrigger>
                    
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Town</Label>
              <Input id="email" placeholder="Email Address" />
            </div>


            <div className="grid grid-cols-2 gap-x-6">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="first-name">State</Label>
              <Input id="first-name" placeholder="First Name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="last-name">Zip code</Label>
              <Input id="last-name" placeholder="Last Name" />
            </div>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Use a different billing address
              </label>
          </div>

          </div>
        </form>
      </CardContent>
    </Card>


 <Card className="mt-6 shadow-none w-full">
      <CardHeader>
        <CardTitle className="text-lg">Shipping Method</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
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
        </form>
      </CardContent>
    </Card>

 <Card className="mt-6 shadow-none w-full">
      <CardHeader>
        <CardTitle className="text-lg">Payment Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
               <RadioGroup defaultValue="free-ship" className="space-y-2">
                <div className="relative flex items-center p-4">
                  <RadioGroupItem value="free-ship" id="r1" className="peer mr-3 z-10"/>
                  <Label htmlFor="r1" className="z-10 w-full items-center inline-flex justify-between">
                    Pay by card
                    <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M7 15h3a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2M19 5H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3m1 12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6h16Zm0-8H4V8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"/></svg>
                  </Label>
                  <div aria-hidden={true} className="absolute left-0 top-0 size-full border-2 rounded-sm peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-secondary/50">
                  </div>
                </div>
             </RadioGroup>

          <div className="grid w-full items-center gap-6">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Card Number</Label>
              <Input id="email" placeholder="Email Address" />
            </div>
            <div className="grid grid-cols-2 gap-x-6">

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="first-name">Expiry Date</Label>
              <Input id="first-name" placeholder="First Name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="last-name">CVC Code</Label>
              <Input id="last-name" placeholder="Last Name" />
            </div>
            </div>
            <Separator />
               <RadioGroup className="space-y-2">
                <div className="relative flex items-center p-4">
                  <RadioGroupItem value="free-ship" id="r1" className="peer mr-3 z-10"/>
                  <Label htmlFor="r1" className="z-10 w-full items-center inline-flex justify-between">
                    $10 Monthly installment
                    <Badge className="rounded-full">somecompany</Badge>
                  </Label>
                  <div aria-hidden={true} className="absolute left-0 top-0 size-full border-2 rounded-sm peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-secondary/50">
                  </div>
                </div>
                <div className="relative flex items-center p-4">
                  <RadioGroupItem value="free-ship" id="r1" className="peer mr-3 z-10"/>
                  <Label htmlFor="r1" className="z-10">
                    Paypal
                  </Label>
                  <div aria-hidden={true} className="absolute left-0 top-0 size-full border-2 rounded-sm peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-secondary/50">
                  </div>
                </div>
             </RadioGroup>


          </div>
        </form>
      </CardContent>
    </Card>
    <p className="text-muted-foreground text-sm mt-6 w-full">Your personal data will be used to process your order, support your experience throughout the website, and for other purpose described in our <a href="#" className="font-medium text-foreground">privacy policy</a></p>
    
              <Button type="button" className="w-full h-12 mt-6" size={"lg"}>
                Place Order
              </Button>

          </div>
          <Card className="col-start-8 h-fit col-span-5 border rounded-md shadow-none">
            <CardHeader>
              <CardTitle>
                <h3 className="font-bold text-lg">Order Summary</h3>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <img src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                  alt="John Michael" className="relative inline-block h-24 w-20 object-cover object-center" />
                <div>
                  <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                    <div className="pr-8 sm:pr-5">
                      <p className="text-base font-semibold text-gray-900">Nike Air Max 2019 </p>
                      <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">36EU - 4US</p>
                    </div>

                    <div className="mt-4  flex  flex-col items-end justify-between sm:mt-0">
                      <p className="shrink-0 text-end text-base font-semibold text-gray-900">$1259.00</p>
              <Button type="button" variant={"ghost"} className="">
                <span className="sr-only">Remove</span>
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
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                  </Button>
                    </div>
                  </div>
                  <div>
                      <label htmlFor="Quantity" className="sr-only"> Quantity </label>

                      <div className="flex items-center rounded border border-gray-200 w-fit ">
                        <Button variant={"ghost"} size={"icon"} className="hover:bg-background">
                          <span className="sr-only">Decrease Quantity</span>
                          <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19 12.998H5v-2h14z"/></svg>
                        </Button>

                        <Input type="number" defaultValue={1} id="Quantity" className="px-1 w-6 focus-visible:ring-0 border-none shadow-none [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none "/>
                        <Button variant={"ghost"} size={"icon"} className="hover:bg-background">
                          <span className="sr-only">Increase Quantity</span>
                          <svg className="size-4" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 21v-8H3v-2h8V3h2v8h8v2h-8v8z"/></svg>
                        </Button>
                      </div>
                  </div>

                  {/* <Button type="button" variant={"ghost"} className="px-0 py-0 w-fit">
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
                  </Button> */}
                </div>
              </div>
              <Separator className="mt-4"/>
              <div className="flex space-x-3 mt-6">
                    <Input type="text" placeholder="Input" className="h-10"/>
                    <Button type="button" className="h-10 w-32">Apply</Button>
              </div>

<div className="flex justify-between items-center mt-6">
                    <div className="flex">
                      <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M2.005 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v5.5a2.5 2.5 0 0 0 0 5V20a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1zM8.09 19a1.5 1.5 0 0 1 2.83 0h9.085v-2.968a4.5 4.5 0 0 1 0-8.064V5H10.92a1.5 1.5 0 0 1-2.83 0H4.005v14zm1.415-8a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m0 5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"/></svg>
                      <span className="ml-1 text-sm font-medium">Yes30</span>
                    </div>
                    <Button variant={"ghost"}>
                      Remove
                    </Button>
              </div>

              <Separator className="mt-1"/>

          <dl className="w-full justify-between mt-6">
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
                <dd className="text-sm font-medium">Free</dd>
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
          </Card>
        </div>
      </div>
    </div>
    </main>
)}