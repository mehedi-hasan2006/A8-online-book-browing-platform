"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaDiscord,
  FaArrowUp,
  FaBookOpen,
  FaHeart,
} from "react-icons/fa";

const FOOTER_LINKS = {
  Library: [
    { label: "Browse All Books", href: "/all-books" },
    { label: "New Releases", href: "#" },
    { label: "Audiobooks", href: "#" },
    { label: "Login", href: "/login" },
    { label: "Register", href: "/signup" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Testimonial", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Support: [
    { label: "Help Center", href: "#" },
    { label: "FAQs", href: "/faqs" },
    { label: "Community Guidelines", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

const SOCIAL_LINKS = [
  { icon: FaTwitter, href: "#", label: "Twitter", color: "hover:text-sky-400" },
  {
    icon: FaInstagram,
    href: "#",
    label: "Instagram",
    color: "hover:text-pink-500",
  },
  { icon: FaGithub, href: "#", label: "GitHub", color: "hover:text-gray-900" },
  {
    icon: FaDiscord,
    href: "#",
    label: "Discord",
    color: "hover:text-indigo-500",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-linear-to-b from-white via-amber-50/30 to-amber-100/50 pt-20 pb-10">
      {/* Top section */}
      <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden -translate-y-1/2">
        <svg
          viewBox="0 0 1440 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M0 96L48 85.3C96 75 192 53 288 48C384 43 480 53 576 58.7C672 64 768 64 864 58.7C960 53 1056 43 1152 42.7C1248 43 1344 53 1392 58.7L1440 64V96H1392C1344 96 1248 96 1152 96C1056 96 960 96 864 96C768 96 672 96 576 96C480 96 384 96 288 96C192 96 96 96 48 96H0Z"
            fill="white"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/*  Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 mb-6 group"
            >
              <div className="w-10 h-10 bg-linear-to-br from-amber-500 to-rose-500 rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300">
                <FaBookOpen className="text-white text-xl" />
              </div>
              <span className="text-2xl font-serif font-bold bg-linear-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">
                eBookBorrow
              </span>
            </Link>

            <p className="text-gray-600 mb-6 max-w-sm leading-relaxed">
              Your digital sanctuary for discovering, borrowing, and losing
              yourself in thousands of handpicked books. Read anywhere, anytime.
            </p>

            {/* Subscribe */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wider">
                Stay in the loop
              </h3>
              <form className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-100 outline-none transition-all duration-300 text-sm placeholder:text-gray-400"
                  />
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-linear-to-r from-amber-500 to-rose-500 text-white rounded-xl font-medium text-sm hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  Join
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-gray-400 ${social.color} hover:shadow-lg hover:border-transparent transition-all duration-300 hover:-translate-y-1 group`}
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-gray-900 mb-6 uppercase tracking-wider">
                {category}
              </h3>
              <ul className="space-y-4">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-amber-600 transition-colors duration-200 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-amber-400 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200/60 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>© 2026 eBookBorrow.</span>
              <span className="hidden sm:inline">·</span>
              <span className="flex items-center gap-1">
                Crafted with{" "}
                <FaHeart className="text-rose-400 text-xs animate-pulse" /> for
                readers
              </span>
            </div>

            {/* Stats & Trust Indicators */}
            <div className="flex items-center gap-6">
              <div className="h-4 w-px bg-gray-300 hidden sm:block" />

              <div className="hidden sm:flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  Online Now
                </span>
                <span>·</span>
                <span>99.9% Uptime</span>
              </div>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl border border-gray-200 text-gray-600 hover:text-amber-600 hover:border-amber-300 hover:shadow-lg hover:shadow-amber-100/50 transition-all duration-300 text-sm font-medium group"
            >
              Back to Top
              <FaArrowUp className="text-xs group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Background color */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-amber-200/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-rose-200/10 rounded-full blur-3xl" />
      </div>
    </footer>
  );
}
