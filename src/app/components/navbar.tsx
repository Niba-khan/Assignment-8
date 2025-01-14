import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-gray-400 p-6">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center">
        <div className="shrink w-80 sm:order-2">
          <a className="font-black uppercase text-3xl">The World Travel</a>
        </div>

        <div className="w-96 order-3 flex justify-center">
          <div className="flex space-x-8 pr-11 text-black">
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-400">
              About
            </Link>
            <Link href="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
