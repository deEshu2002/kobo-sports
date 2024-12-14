import { Footer } from "../(dashboard)/footer";
import { Header } from "../(dashboard)/header";
import { Navbar } from "../(dashboard)/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen w-full bg-background">
      {children}
    </div>
    <Footer/>
</>
  );
}
