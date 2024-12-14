"use client"

import Link from "next/link"
import { z } from "zod"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

const profileFormSchema = z.object({
  username: z
    .string()
    .min(2, {
      message: "Username must be at least 2 characters.",
    })
    .max(30, {
      message: "Username must not be longer than 30 characters.",
    }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  bio: z.string().max(160).min(4),
  urls: z
    .array(
      z.object({
        value: z.string().url({ message: "Please enter a valid URL." }),
      })
    )
    .optional(),
})

type ProfileFormValues = z.infer<typeof profileFormSchema>

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
  bio: "I own a computer.",
  urls: [
    { value: "https://shadcn.com" },
    { value: "http://twitter.com/shadcn" },
  ],
}

export function ProfileForm() {

  return (
      <div className="space-y-6">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="last-name">First Name</Label>
              <Input id="last-name" placeholder="First Name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Last Name" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="last-name">Display Name</Label>
              <Input id="last-name" placeholder="Display Name" />
              <p className="text-sm text-muted-foreground">this will be how your name will be displayed in the account section and in reviews</p>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="last-name">Email address</Label>
              <Input id="last-name" placeholder="Email address" />
            </div>
            <div className="flex justify-end">
        <Button type="submit">Update profile</Button>
</div>
        <Separator />
      <div>
        <h3 className="text-lg font-medium">Password Change</h3>
      </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="last-name">Email address</Label>
              <Input id="last-name" placeholder="Email address" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="last-name">Email address</Label>
              <Input id="last-name" placeholder="Email address" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="last-name">Email address</Label>
              <Input id="last-name" placeholder="Email address" />
            </div>
       <div className="flex justify-end">
        <Button type="submit">Change</Button>
</div>
      </div>
  )
}