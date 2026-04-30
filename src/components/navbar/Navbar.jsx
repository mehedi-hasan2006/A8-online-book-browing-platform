"use client";
import { useState } from "react";
import { Button } from "@heroui/react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();

  const navlinks = (
    <ul className="flex flex-col md:flex-row gap-4">
      <li
        className={` hover:font-semibold hover:text-violet-500 ${currentPath === "/" ? " border-b-2 border-b-violet-500 text-violet-500" : ""}`}
      >
        <Link href="/">Home</Link>
      </li>
      <li
        className={` hover:font-semibold hover:text-violet-500 ${currentPath === "/all-books" ? "border-b-2 border-b-violet-500 text-violet-500" : ""}`}
      >
        <Link href="/all-books">All Books</Link>
      </li>
      <li
        className={` hover:font-semibold hover:text-violet-500  ${currentPath === "/my-profile" ? "border-b-2 border-b-violet-500 text-violet-500" : ""}`}
      >
        <Link href="/my-profile">My Profile</Link>
      </li>
    </ul>
  );

  return (
    <nav className=" w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="mx-auto flex h-16 container items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="flex items-center gap-3">
            {/* <Logo /> */}
            <p className="font-bold">ACME</p>
          </div>
        </div>
        <div className="hidden items-center gap-4 md:flex">{navlinks}</div>
        <div className="flex items-center gap-4 md:flex">
          <Link href="/login">Login</Link>
          <Button className="bg-violet-500">
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      </header>
      {isMenuOpen && (
        <div className="border-t border-separator md:hidden">
          <ul className="flex flex-col gap-2 p-4">{navlinks}</ul>
        </div>
      )}
    </nav>
  );
}
