"use client";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const FLOATING_BOOKS = [
  {
    title: "The Lost Island",
    author: "Ayesha Rahman",
    image_url: "https://i.ibb.co.com/r2JWSxSg/RGB-The-Lost-Island-9780702271182-Cover.jpg",
    color: "#c8883a",
    top: "15%",
    left: "5%",
    rotate: "-8deg",
    delay: "0s",
  },
  {
    title: "The Final Journey",
    author: "Sadia Noor",
    image_url: "https://i.ibb.co.com/KphDnwt0/images-2.jpg",
    color: "#7c2d3e",
    top: "60%",
    left: "3%",
    rotate: "5deg",
    delay: "1s",
  },
  {
    title: "Physics Made Easy",
    author: "Dr. Shafiq Islam",
    image_url: "https://i.ibb.co.com/DcLMp71/71-Pz-RJTq-Uc-L-UF1000-1000-QL80.jpg",
    color: "#1a2744",
    top: "30%",
    right: "4%",
    rotate: "7deg",
    delay: "0.5s",
  },
  {
    title: "React for Beginners",
    author: "Sharmin Akter",
    image_url: "https://i.ibb.co.com/m53MGJKq/1-Zr-U9-Ue-g-vs5r-H6cy-V4ikw.png",
    color: "#6b7c6a",
    top: "70%",
    right: "3%",
    rotate: "-6deg",
    delay: "1.5s",
  },
];



export default function Hero() {
  return (
    <>
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: "var(--cream)" }}
      >
        {/* Background  */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, var(--amber) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div
          className="absolute rounded-full opacity-10"
          style={{
            width: "70vw",
            height: "70vw",
            maxWidth: "800px",
            maxHeight: "800px",
            background:
              "radial-gradient(circle, var(--amber) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Floating mini book cards (desktop only) */}
        {FLOATING_BOOKS.map((book, i) => (
          <div
            key={i}
            className="hidden lg:block absolute"
            style={{
              top: book.top,
              left: book.left,
              right: book.right,
              transform: `rotate(${book.rotate})`,
              animation: `float 6s ease-in-out ${book.delay} infinite`,
              animationFillMode: "both",
            }}
          >
            <div
              className="rounded-lg shadow-xl p-3 w-28"
              style={{ backgroundColor: book.color }}
            >
              <div
                className=" rounded opacity-30"
                style={{ backgroundColor: "white" }}
              />
              <Image src={book.image_url} alt={book.title} width={100} height={50} className="object-cover h-[100px] w-[100px]"/>
              <p className="text-white text-xs font-serif font-bold mt-2 leading-tight">
                {book.title}
              </p>
              <p className="text-white text-xs opacity-60 mt-0.5">
                {book.author}
              </p>
            </div>
          </div>
        ))}

        {/* Main hero content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24 pb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-widest uppercase mb-8"
            style={{
              backgroundColor: "rgba(200,136,58,0.12)",
              color: "var(--amber-dark)",
              border: "1px solid rgba(200,136,58,0.3)",
              animation: "fadeUp 0.6s ease-out",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" />
            Your Literary Sanctuary
          </div>

          {/* Headline */}
          <h1
            className="font-serif font-bold leading-[1.05] mb-6"
            style={{
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
              color: "var(--ink)",
              animation: "fadeUp 0.6s ease-out 0.1s",
              animationFillMode: "both",
            }}
          >
            {" "}
            Find <span className="italic">Your</span>
            <br />
            Next Read
          </h1>

          {/* descriptiojn */}
          <p
            className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 text-gray-600"
            style={{
              fontFamily: "DM Sans",
              animation: "fadeUp 0.6s ease-out 0.2s",
              animationFillMode: "both",
            }}
          >
            Discover, borrow, and immerse yourself in thousands of handpicked
            books spanning every genre and era. Your next great adventure begins
            here.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            style={{
              animation: "fadeUp 0.6s ease-out 0.3s",
              animationFillMode: "both",
            }}
          >
            <Link href="/all-books">
              <Button className="px-8 py-4 rounded-full bg-linear-to-r from-amber-500 to-rose-500 text-white font-medium text-base transition-all duration-300 hover:scale-105 active:scale-95">
                Browse Now <FaArrowRight className="text-xs group-hover/btn:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 max-w-lg mx-auto gap-8"
            style={{
              animation: "fadeUp 0.6s ease-out 0.4s",
              animationFillMode: "both",
            }}
          >
            {[
              { value: "12K+", label: "Books Available" },
              { value: "200+", label: "Genres & Categories" },
              { value: "50K+", label: "Happy Readers" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-serif font-bold text-3xl mb-1">{value}</p>
                <p className="text-xs uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none">
          <svg
            viewBox="0 0 1440 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M0 96L48 85.3C96 75 192 53 288 48C384 43 480 53 576 58.7C672 64 768 64 864 58.7C960 53 1056 43 1152 42.7C1248 43 1344 53 1392 58.7L1440 64V96H1392C1344 96 1248 96 1152 96C1056 96 960 96 864 96C768 96 672 96 576 96C480 96 384 96 288 96C192 96 96 96 48 96H0Z"
              fill="#f5f0e8"
              opacity="0.5"
            />
          </svg>
        </div>
      </section>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-14px);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
