import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaBookOpen, FaArrowRight, FaBookmark } from "react-icons/fa";

async function FeaturedBooks() {
  const res = await fetch(
    "https://online-book-browing-platform.vercel.app/data.json",
  );
  const data = await res.json();

  const books = data.slice(0, 4);

  return (
    <section className="relative py-16 px-6 bg-linear-to-b from-amber-50/30 via-white to-white overflow-hidden">
      {/* Background  */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-rose-200/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-linear-to-r from-amber-100/10 to-rose-100/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="h-px w-8 md:w-12 bg-linear-to-r from-amber-300 to-rose-300" />
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm shadow-amber-100/50 border border-amber-100">
              <FaBookOpen className="text-amber-500 text-sm" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-600">
                Curated Collection
              </span>
            </div>
            <div className="h-px w-8 md:w-12 bg-linear-to-r from-rose-300 to-amber-300" />
          </div>

          <h2 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-gray-900 mb-4">
            Featured{" "}
            <span className="relative inline-block">
              <span className="italic text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-rose-500">
                Books
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 100 15"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 7.5 Q 25 0, 50 7.5 T 100 7.5"
                  stroke="url(#header-underline)"
                  strokeWidth="2"
                  fill="none"
                />
                <defs>
                  <linearGradient
                    id="header-underline"
                    x1="0"
                    y1="0"
                    x2="1"
                    y2="0"
                  >
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#f43f5e" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto text-lg flex items-center justify-center gap-2">
            <FaStar className="text-amber-400 text-sm" />
            Handpicked selections from our library
            <FaStar className="text-amber-400 text-sm" />
          </p>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {books.map((book) => (
            <div
              key={book.id}
              className="group relative bg-white rounded-2xl shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-amber-200/30 transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* Book Cover Section */}
              <div className="relative h-56 bg-linear-to-br from-gray-50 via-amber-50/30 to-rose-50/30 rounded-t-2xl flex items-center justify-center p-6 overflow-hidden">
                {/*  background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <svg className="w-full h-full">
                    <defs>
                      <pattern
                        id="dots"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="2" cy="2" r="1.5" fill="currentColor" />
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      fill="url(#dots)"
                      className="text-gray-400"
                    />
                  </svg>
                </div>

                {/* Book Image with hover effect */}
                <div className="relative transform group-hover:scale-110 transition-transform duration-500 group-hover:-rotate-2">
                  <Image
                    src={book.image_url}
                    alt={book.title}
                    width={130}
                    height={170}
                    loading="lazy"
                    className="object-contain max-h-44 shadow-2xl rounded-md ring-1 ring-gray-200/50"
                  />

                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" />
                </div>

                {/* Category Badge */}
                {book.category && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-white/90 backdrop-blur-sm text-xs font-medium text-gray-700 rounded-full shadow-md border border-gray-200/50">
                      <FaBookmark className="text-amber-500 text-xs" />
                      {book.category}
                    </span>
                  </div>
                )}
              </div>

              {/* Book Details Section */}
              <div className="p-5">
                <h3 className="font-semibold text-gray-800 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-amber-500 group-hover:to-rose-500 transition-all duration-300 min-h-14 ">
                  {book.title}
                </h3>

                {book.author && (
                  <p className="text-sm text-gray-500 mt-2 flex items-center gap-1">
                    <span className="w-1 h-1 bg-amber-400 rounded-full" />
                    {book.author}
                  </p>
                )}

                {/* Action Button */}
                <div className="mt-5">
                  <Link href={`/book/${book.id}`}>
                    <Button className="w-full bg-linear-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white font-medium py-3 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300 group/btn overflow-hidden relative">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        View Details
                        <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-linear-to-r from-amber-600 to-rose-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* button */}
        <div className="text-center">
          <Link href="/all-books">
            <Button className="w-50 bg-linear-to-r from-amber-500 to-rose-500 hover:from-amber-600 hover:to-rose-600 text-white font-medium py-3 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all duration-300 group/btn overflow-hidden relative">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore All Books
                <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-amber-600 to-rose-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FeaturedBooks;
