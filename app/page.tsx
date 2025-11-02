import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* centre la navbar + glow */}
      <div className="relative w-fit mx-auto mt-8 overflow-visible">
        {/* glow blanc subtil autour et sous la navbar */}
        <div className="absolute -inset-1 rounded-2xl bg-white opacity-20 blur-md filter pointer-events-none z-0" />

        <div className="relative flex flex-row justify-between items-center gap-16 px-5 rounded-2xl z-10 stroke-1 bg-black">
          <div className="my-4">
            <Link href="/" className="block">
              <img src="/grunt-logo-white.svg" alt="Grunt logo" className="h-7 w-auto" />
            </Link>
          </div>
          <div className="flex flex-row gap-5">
            <Link href="/"></Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
