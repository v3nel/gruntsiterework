import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <section id="header" className="relative -mt-[72px] ">
        <img
          src="/Gruntfestival4.png"
          alt="Grünt Festival 4ème édition"
          className="h-[60vh] w-full object-cover sm:h-[70vh]"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />

        <div className="absolute inset-0 flex items-end pt-[72px]">
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 pb-6 sm:pb-10">
            <h1 className="text-white text-4xl sm:text-5xl font-extrabold leading-tight drop-shadow-md">
              Grünt festival : 4ème édition
            </h1>
            <p className="mt-2 text-white/90 text-base sm:text-lg max-w-2xl">
              Pour sa 4e édition, le rendez-vous de rentrée des amateurs de rap prend ses quartiers à la Grande Halle de la Villette et convie le meilleur de la scène alternative d’aujourd’hui et de demain.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="https://dice.fm/partner/grunt/event/l8lbew-grnt-festival-4-24th-oct-grande-halle-de-la-villette-paris-tickets?dice_id=5549335&dice_channel=web&dice_tags=organic&dice_campaign=Grunt&dice_feature=mio_marketing&_branch_match_id=1513633086061751827&utm_source=web&utm_campaign=Grunt&utm_medium=mio_marketing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9ZLyUxO1UvL1U8vKs0rMbGvK0pNSy0qysxLj08qyi8vTi2ydc4oys9NBQBLP1XnNQAAAA%3D%3D"
                className="inline-flex items-center rounded-lg bg-white text-black px-4 py-2 text-sm sm:text-base font-medium hover:bg-white/20 hover:text-white transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                Billetterie
              </Link>
              <Link
                href="/programme"
                className="inline-flex items-center rounded-lg bg-white/10 text-white px-4 py-2 text-sm sm:text-base font-medium backdrop-blur hover:bg-white/20 transition-all"
              >
                Programme
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="Content" className="flex-1 flex-col gap-12">
        <div>
          
        </div>
      </section>

      <Footer/>
    </div>
  );
}
