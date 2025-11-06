import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { plex } from "../fonts";

export default function Contacts() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <section id="header" className="relative -mt-[72px]">
        <img
          src="/contact/vinyles.jpg"
          className="h-[30vh] w-full object-cover sm:h-[40vh]"
        />

        <div className="absolute inset-0 flex flex-1 bg-black/35"/>

        <div className="flex flex-col inset-0 absolute flex-1 items-center justify-center">
          <h1 className={`${plex.className} text-7xl font-bold text-center`}>Contact</h1>
        </div>
      </section>
      <section>
        <div>
          
        </div>
      </section>
      <Footer/>
    </div>
  )
};