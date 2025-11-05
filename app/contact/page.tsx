import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { plex } from "../fonts";

export default function Contacts() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>
      <div className="justify-center items-center">
        <h1 className={`text-7xl ${plex.className} font-bold`}>Contact</h1>
        
      </div>
      <Footer/>
    </div>
  )
}