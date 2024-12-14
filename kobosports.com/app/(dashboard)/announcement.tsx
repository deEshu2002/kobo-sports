import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight } from "lucide-react"

export const Announcement = () => {
    return(
        <div className="flex justify-center text-foreground bg-background">
            <div className="flex justify-center lg:justify-between h-auto px-4 py-3 w-full  max-w-screen-2xl">

            <ul className="hidden lg:flex gap-6">
            <li className="bg-muted rounded-full size-6 flex items-center justify-center">
                <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 bg-red transition hover:opacity-75"
                >
                <span className="sr-only">Facebook</span>

                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                    />
                </svg>
                </a>
            </li>
            
            <li className="bg-muted rounded-full size-6 flex items-center justify-center">
                <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
                >
                <span className="sr-only">WhatsApp</span>

                <svg aria-hidden="true" className="size-4" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.95 9.95 0 0 1-5.03-1.355L2.005 22l1.352-4.968A9.95 9.95 0 0 1 2.001 12c0-5.523 4.477-10 10-10M8.593 7.3l-.2.008a1 1 0 0 0-.372.1a1.3 1.3 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.73 2.73 0 0 0 6.9 9.62c.002.49.13.967.33 1.413c.409.902 1.082 1.857 1.97 2.742c.214.213.424.427.65.626a9.45 9.45 0 0 0 3.84 2.046l.568.087c.185.01.37-.004.556-.013a2 2 0 0 0 .833-.231a5 5 0 0 0 .383-.22q.001.002.125-.09c.135-.1.218-.171.33-.288q.126-.13.21-.302c.078-.163.156-.474.188-.733c.024-.198.017-.306.014-.373c-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.402-.621a.5.5 0 0 0-.176-.041a.48.48 0 0 0-.378.127c-.005-.002-.072.055-.795.931a.35.35 0 0 1-.368.13a1.4 1.4 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.108a6 6 0 0 1-1.575-1.003c-.126-.11-.243-.23-.363-.346a6.3 6.3 0 0 1-1.02-1.268l-.059-.095a1 1 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41c.11-.14.203-.276.263-.373c.118-.19.155-.385.093-.536q-.42-1.026-.868-2.041c-.059-.134-.234-.23-.393-.249q-.081-.01-.162-.016a3 3 0 0 0-.403.004z"/></svg>
                </a>
            </li>


            <li className="bg-muted rounded-full size-6 flex items-center justify-center">
                <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
                >
                <span className="sr-only">Instagram</span>
                <svg className="size-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"/></svg>
            </a>
            </li>
            

            </ul>

            <p className="text-center text-sm font-medium">
                <a href="#" className="inline-flex items-center hover:underline underline-offset-4">
                    Buy any 3, Get 20% OFF. It's that Easy.
                    <ArrowRight className="w-4 h-4"/>
                </a>
            </p>

            <div className="gap-4 hidden lg:flex text-blue-gray-900 sm:justify-center">
        <Select defaultValue="india-eng">
        <SelectTrigger className="shadow-none border-none text-xs py-0 h-auto">
            <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent align="end">

            <SelectGroup>
            <SelectLabel>Country-Language</SelectLabel>
            <SelectItem value="india-eng">🇮🇳&nbsp;English</SelectItem>
            <SelectItem value="america-eng">English</SelectItem>
            <SelectItem value="japan-jap">English</SelectItem>
            <SelectItem value="united_kingdom-eng">English</SelectItem>
            </SelectGroup>
        </SelectContent>
        </Select>

        <Select defaultValue="inr" >
        <SelectTrigger className="w-16 shadow-none border-none text-xs py-0 h-auto">
            <SelectValue placeholder="Select a currency" />
        </SelectTrigger>
        <SelectContent align="end">

            <SelectGroup>``
            <SelectLabel>Currency</SelectLabel>
            <SelectItem value="inr">INR</SelectItem>
            <SelectItem value="usd">USD</SelectItem>
            <SelectItem value="yen">YEN</SelectItem>
            <SelectItem value="eur">EUR</SelectItem>
            </SelectGroup>
        </SelectContent>
        </Select>
            </div>
            

            </div>
        </div>
    )
}
