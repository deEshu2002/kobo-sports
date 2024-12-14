import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { index } from "drizzle-orm/mysql-core";

export default function SettingsAccountPage() {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-6">
 <Card className={"col-span-1 shadow-none"}>
        <CardHeader className="flex-row space-y-0 justify-between items-end pb-3 w-full">
            <CardTitle>Billing Address</CardTitle>
             <Button className="h-fit p-0" variant={"link"}>
            <svg className="size-4 mr-1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4"/></svg>
                Edit
            </Button>
        </CardHeader>
      <CardContent className="">
        <p className="text-sm font-medium ">
            {"name"}
        </p>
        <p className="text-sm font-medium">
            {"address line 1"}
        </p>
        <p className="text-sm font-medium">
            {"address line 2"}
        </p>
        <p className="text-sm font-medium">
            {"Country"}
        </p>
      </CardContent>
    </Card>
 <Card className={"col-span-1 shadow-none"}>
        <CardHeader className="flex-row space-y-0 justify-between items-end pb-3 w-full">
            <CardTitle>Billing Address</CardTitle>
             <Button className="h-fit p-0" variant={"link"}>
            <svg className="size-4 mr-1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4"/></svg>
                Edit
            </Button>
        </CardHeader>
      <CardContent className="">
        <p className="text-sm font-medium ">
            {"name"}
        </p>
        <p className="text-sm font-medium">
            {"address line 1"}
        </p>
        <p className="text-sm font-medium">
            {"address line 2"}
        </p>
        <p className="text-sm font-medium">
            {"Country"}
        </p>
      </CardContent>
    </Card>
    <Card className={"col-span-1 shadow-none"}>
        <CardHeader className="flex-row space-y-0 justify-between items-end pb-3 w-full">
            <CardTitle>Billing Address</CardTitle>
             <Button className="h-fit p-0" variant={"link"}>
            <svg className="size-4 mr-1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-width="2" d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4"/></svg>
                Edit
            </Button>
        </CardHeader>
      <CardContent className="">
        <p className="text-sm font-medium ">
            {"name"}
        </p>
        <p className="text-sm font-medium">
            {"address line 1"}
        </p>
        <p className="text-sm font-medium">
            {"address line 2"}
        </p>
        <p className="text-sm font-medium">
            {"Country"}
        </p>
      </CardContent>
    </Card>
    </div>
  )
}