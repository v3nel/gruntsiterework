import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { plex } from "../fonts";
import Link from "next/link";

export default function Contacts() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <section id="header" className="relative -mt-[72px]">
        <img
          src="/contact/vinyles.jpg"
          className="h-[50vh] w-full object-cover sm:h-[60vh]"
        />

        <div className="absolute inset-0 flex flex-1 bg-black/35"/>

        <div className="flex flex-col inset-0 absolute flex-1 items-center justify-center">
          <h1 className={`${plex.className} text-7xl font-extrabold text-center`}>Contact</h1>
          <div className="flex flex-row gap-2">
            <h2 className="text-lg">Email:</h2>
            <a className="text-lg">gruntmag@gmail.com</a>
          </div>
          <div className="">
            <a>Test</a>
          </div>
        </div>

        <div className="absolute left-0 right-0 bottom-0 flex flex-row justify-center pb-8">
          
        </div>
        
      </section>
      <Footer/>
    </div>
  )
};