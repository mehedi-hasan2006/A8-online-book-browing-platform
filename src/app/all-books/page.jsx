"use client";

import Search from "@/components/search/Search";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

function AllBookPage() {
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  // const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://online-book-browing-platform.vercel.app/data.json",
      );
      const data = await res.json();
      setBooks(data);

      const uniqueCategories = [
        ...new Set(data.map((book) => book.category).filter(Boolean)),
      ];
      setCategories(uniqueCategories);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filter books based on selected category
  const filteredBooks =
    selectedCategory === "all"
      ? books
      : books.filter((book) => book.category === selectedCategory);

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="animate__animated animate__lightSpeedInLeft text-4xl md:text-5xl font-bold bg-linear-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">
            Discover Books
          </h1>
          <p className="mt-3 text-gray-600 text-lg">
            Explore our collection of {books.length} amazing books
          </p>
        </div>

        {/* Search Section */}
        <div className="container flex justify-center mx-auto mb-8">
          <Search books={books} setBooks={setBooks} />
        </div>

        <div className="sm:flex  gap-8 pb-10">
          {/* Left Sidebar - Categories */}
          <div className="w-auto shrink-0">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-4">
              <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-amber-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
                Categories
              </h2>

              <div className="space-y-1 mt-5">
                {/* All Books Button */}
                <button
                  onClick={() => setSelectedCategory("all")}
                  className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200 font-medium flex  items-center ${
                    selectedCategory === "all"
                      ? "bg-linear-to-r from-amber-500 to-rose-500 text-white  shadow-md"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                    All Books
                  </span>
                  <span className="float-right text-sm ml-2">
                    ({books.length})
                  </span>
                </button>

                {/* Category Buttons */}
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg transition-all duration-200 font-medium flex  items-center ${
                      selectedCategory === category
                        ? "bg-linear-to-r from-amber-500 to-rose-500 text-white  shadow-md"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                        />
                      </svg>
                      {category}
                    </span>
                    <span className="float-right text-sm ml-2">
                      (
                      {
                        books.filter((book) => book.category === category)
                          .length
                      }
                      )
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 mt-5">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                {selectedCategory === "all" ? "All Books" : selectedCategory}
              </h2>
              <p className="text-gray-500 mt-1">
                {filteredBooks.length}{" "}
                {filteredBooks.length === 1 ? "book" : "books"} found
              </p>
            </div>

            {/* Books Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBooks.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200"
                >
                  {/* Book Cover */}
                  <div className="relative h-48 bg-linear-to-br from-gray-100 to-gray-50 flex items-center justify-center p-4 group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={item.image_url}
                      alt={item.title}
                      width={120}
                      height={160}
                      loading="eager"
                      className="object-contain max-h-full shadow-lg rounded w-[120px] h-[160px]"
                    />
                    {item.category && (
                      <span className="absolute top-3 right-3 bg-amber-500 text-white text-xs px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                    )}
                  </div>

                  {/* Book Details */}
                  <div className="p-5">
                    <h3 className="font-semibold text-gray-800 line-clamp-2 hover:text-rose-600 transition-colors min-h-12">
                      {item.title}
                    </h3>

                    {item.author && (
                      <p className="text-sm text-gray-500 mt-1">
                        by {item.author}
                      </p>
                    )}

                    <div className="mt-4">
                      <Link href={`/book/${item.id}`}>
                        <Button className="w-full bg-linear-to-r from-amber-500 to-rose-500 hover:scale-103 transform transition-all duration-300 text-white font-medium py-2.5 rounded-lg ">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-2xl text-center font-semibold text-rose-500 mt-5">
              {books.length === 0 && "No Books Found"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllBookPage;
