import Link from "next/link";

export default function Footer() {
    return (
        <section id="footer" className="flex flex-col bg-black w-full mt-auto py-12 px-52 gap-21">
        <div className="flex flex-row justify-between text-white">
          <div className="flex flex-col gap-1">
            <a className="font-bold">Contenu:</a>
            <Link href="/" className="hover:text-white text-white/70 transition-all">Podcasts</Link>
            <Link href="/" className="hover:text-white text-white/70 transition-all">Grunts</Link>
            <Link href="/" className="hover:text-white text-white/70 transition-all">Grunts d'or</Link>
            <Link href="/" className="hover:text-white text-white/70 transition-all">Grunt Hors-Série</Link>
          </div>
          <div className="flex flex-col gap-1">
            <a className="font-bold">Contenu:</a>
            <Link href="/" className="hover:text-white text-white/70 transition-all">Podcasts</Link>
            <Link href="/" className="hover:text-white text-white/70 transition-all">Grunts</Link>
            <Link href="/" className="hover:text-white text-white/70 transition-all">Grunts d'or</Link>
            <Link href="/" className="hover:text-white text-white/70 transition-all">Grunt Hors-Série</Link>
          </div>
          <div className="flex flex-col gap-1">
            <a className="font-bold">Contenu:</a>
            <Link href="/" className="hover:text-white text-white/70 transition-all">Podcasts</Link>
            <Link href="/" className="hover:text-white text-white/70 transition-all">Grunts</Link>
            <Link href="/" className="hover:text-white text-white/70 transition-all">Grunts d'or</Link>
            <Link href="/" className="hover:text-white text-white/70 transition-all">Grunt Hors-Série</Link>
          </div>
          <div className="flex flex-col gap-1">
            <a className="font-bold">Contenu:</a>
            <Link href="/" className="hover:text-white text-white/70 transition-all">Podcasts</Link>
            <Link href="/" className="hover:text-white text-white/70 transition-all">Grunts</Link>
            <Link href="/" className="hover:text-white text-white/70 transition-all">Grunts d'or</Link>
            <Link href="/" className="hover:text-white text-white/70 transition-all">Grunt Hors-Série</Link>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <Link href="/" className="block">
            <img
              src="/grunt-logo-white.svg"
              alt="grunt logo"
              className="h-11 w-auto"
            />
          </Link>
          <div className="pt-2 gap-1 flex flex-col">
            <p className="text-white/80 text-sm"> <Link href="/mentions-legales" className=" hover:text-white hover:underline transition-all">Mentions Légales / CGU</Link> & <Link href="/cgv" className="hover:text-white hover:underline transition-all">CGV</Link></p>
            <a className="text-white/80 text-sm">Le service Grünt Radio respecte le droit d'auteur. Tous les droits des auteurs des œuvres protégées reproduites et communiquées sur ce site, sont réservés. Sauf autorisation expresse, toute utilisation des œuvres autres que l’écoute dans le cadre du cercle de famille sont interdites.</a>
          </div>
          <div className="text-white text-sm">
            <p className="text-white/80"> © grunt 2025 / Site par <Link href="https://github.com/v3nel" className="hover:text-white hover:underline transition-all"> venel._</Link> </p>
          </div>
        </div>
      </section>
    )
}