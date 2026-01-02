import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-white hover:text-blue-400 transition"
        >
          Cloud
        </Link>
        <div className="flex gap-8">
          <Link
            href="/"
            className="text-white hover:text-blue-400 transition duration-300 font-medium"
          >
            Home
          </Link>
          <Link
            href="/scale"
            className="text-white hover:text-blue-400 transition duration-300 font-medium"
          >
            Scale
          </Link>
          <Link
            href="/reliability"
            className="text-white hover:text-blue-400 transition duration-300 font-medium"
          >
            Reliability
          </Link>
          <Link
            href="/performance"
            className="text-white hover:text-blue-400 transition duration-300 font-medium"
          >
            Performance
          </Link>
        </div>
      </nav>
    </header>
  );
}
