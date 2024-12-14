import React from "react";
import { Navbar } from "../(dashboard)/navbar";
import { Footer } from "../(dashboard)/footer";

export default function Layout({children}:{children: React.ReactNode}){
    return(
           <>
                <Navbar/>
                <div className="min-h-screen w-full bg-background">
                {children}
                </div>
                <Footer/>
            </> 
    )
}