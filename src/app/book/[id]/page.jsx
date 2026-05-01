import BookBorrowBtn from "@/components/borrowBookBtn/BookBorrowBtn";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { LuClock } from "react-icons/lu";

async function SpecificBookDetailsPage({ params }) {
  const { id } = await params;

  const res = await fetch(
    "https://online-book-browing-platform.vercel.app/data.json",
  );
  const data = await res.json();
  const item = data.find((f) => f.id === parseInt(id));

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Book Not Found
          </h1>
          <Link
            href="/all-books"
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            ← Back to Books
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-8">
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-purple-600 transition-colors">
            Home
          </Link>
          <svg
            className="w-4 h-4 mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <Link
            href="/all-books"
            className="hover:text-purple-600 transition-colors"
          >
            {" "}
            All Books
          </Link>
          <svg
            className="w-4 h-4 mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
          <span className="text-gray-900 truncate">{item.title}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left Side - Book Cover */}
            <div className="relative bg-linear-to-br from-blue-50 to-purple-50 p-8 md:p-12 flex items-center justify-center min-h-100">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>

              {/* Book Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 rounded-xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <Image
                  src={item.image_url}
                  alt={item.title}
                  width={280}
                  height={370}
                  loading="eager"
                  className="relative h-92.5 w-70 rounded-xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                />

                {/* Availability Badge */}
                <div className="absolute -top-3 -right-3">
                  {item.available_quantity > 0 ? (
                    <span className="bg-green-500 text-white text-sm px-3 py-1 rounded-full shadow-lg flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                      Available
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full shadow-lg">
                      Unavailable
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side - Book Details */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              {/* Category Badge */}
              {item.category && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4 w-fit">
                  {item.category}
                </span>
              )}

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">
                {item.title}
              </h1>

              {/* Author */}
              {item.author && (
                <div className="flex items-center gap-2 mb-4">
                  <FaUser />
                  <p className="text-lg text-gray-600 font-medium">
                    by {item.author}
                  </p>
                </div>
              )}

              {/* Description */}
              {item.description && (
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-2">
                    About this book
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )}

              {/* Availability Info */}
              <div className="mb-6 space-y-2">
                <div className="flex items-center gap-2 text-gray-700">
                  <LuClock />
                  <span className="font-medium">{item.available_quantity}</span>
                  <span className="ml-1 text-gray-500">copies available</span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{
                      width: `${Math.min((item.available_quantity / 10) * 100, 100)}%`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <BookBorrowBtn item={item} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecificBookDetailsPage;
