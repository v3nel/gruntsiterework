"use client";

import Navbar from "./components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Navbar />

    {/* Hero avec image de fond + overlay + contenu superposé */}
    <section id="header" className="relative">
        {/* Image de couverture */}
        <img
          src="/Gruntfestival4.png"
          alt="Grünt Festival – 4ème édition"
          className="h-[60vh] w-full object-cover sm:h-[70vh]"
        />

        {/* Voile sombre pour lisibilité du texte */}
  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent pointer-events-none" />

        {/* Contenu superposé */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 pb-6 sm:pb-10">
            <h1 className="text-white text-3xl sm:text-5xl font-extrabold leading-tight drop-shadow-md">
              Grünt festival : 4ème édition
            </h1>
            <p className="mt-2 text-white/90 text-base sm:text-lg max-w-2xl">
              Pour sa 4e édition, le rendez-vous de rentrée des amateurs de rap prend ses quartiers à la Grande Halle de la Villette et convie le meilleur de la scène alternative d’aujourd’hui et de demain.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="https://dice.fm/partner/grunt/event/l8lbew-grnt-festival-4-24th-oct-grande-halle-de-la-villette-paris-tickets?dice_id=5549335&dice_channel=web&dice_tags=organic&dice_campaign=Grunt&dice_feature=mio_marketing&_branch_match_id=1513633086061751827&utm_source=web&utm_campaign=Grunt&utm_medium=mio_marketing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXz8nMy9ZLyUxO1UvL1U8vKs0rMbGvK0pNSy0qysxLj08qyi8vTi2ydc4oys9NBQBLP1XnNQAAAA%3D%3D"
                className="inline-flex items-center rounded-lg bg-white text-black px-4 py-2 text-sm sm:text-base font-medium hover:bg-white/90 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Billetterie
              </Link>
              <Link
                href="/programme"
                className="inline-flex items-center rounded-lg bg-white/10 text-white px-4 py-2 text-sm sm:text-base font-medium backdrop-blur hover:bg-white/20 transition-colors"
              >
                Programme
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="footer" className="flex flex-col bg-black w-full mt-auto py-12 px-52 gap-21">
        <div className="flex flex-row justify-between text-white">
          <div className="flex flex-col gap-1">
            <a className="font-bold">Contenu:</a>
            <a>Podcasts</a>
            <a>Grunts</a>
            <a>Grunts d'or</a>
            <a>Grunt Hors-Série</a>
          </div>
          <div className="flex flex-col gap-1">
            <a className="font-bold">Contenu:</a>
            <a>Podcasts</a>
            <a>Grunts</a>
            <a>Grunts d'or</a>
            <a>Grunt Hors-Série</a>
          </div>
          <div className="flex flex-col gap-1">
            <a className="font-bold">Contenu:</a>
            <a>Podcasts</a>
            <a>Grunts</a>
            <a>Grunts d'or</a>
            <a>Grunt Hors-Série</a>
          </div>
          <div className="flex flex-col gap-1">
            <a className="font-bold">Contenu:</a>
            <a>Podcasts</a>
            <a>Grunts</a>
            <a>Grunts d'or</a>
            <a>Grunt Hors-Série</a>
          </div>
        </div>
        <div className=" flex flex-col gap-1">
          <Link href="/" className="block">
            <img
              src="/grunt-logo-white.svg"
              alt="grunt logo"  
            />
          </Link>
          <div className="pt-2 gap-1 flex flex-col">
            <a className="text-white"> <Link href="/mentions-legales">Mentions Légales / CGU</Link> & <Link href="/cgv">cgv</Link></a>
            <a className="text-white">le service grünt radio respecte le droit d’auteur. Tous les droits des auteurs des œuvres protégées reproduites et communiquées sur ce site, sont réservés. Sauf autorisation expresse, toute utilisation des œuvres autres que l’écoute dans le cadre du cercle de famille sont interdites.</a>
          </div>
          <div className="text-white">
            <a> Site par <Link href="https://github.com/v3nel" className="hover:font-"> venel._</Link> </a>
          </div>
        </div>
      </section>
    </div>
  );
}
