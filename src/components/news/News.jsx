import { Button } from "@heroui/react";
import Marquee from "react-fast-marquee";


async function News() {
  const res = await fetch(
    "https://online-book-browing-platform.vercel.app/data.json",
  );
  const data = await res.json();

  const books = data.slice(4, 8);

  return (
    <div className="relative bg-linear-to-r from-amber-50 via-cream to-rose-50 border-b border-amber-200/50">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-amber-400 to-transparent" />

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-rose-300 to-transparent opacity-50" />

      <div className="max-w-7xl mx-auto flex items-center gap-4 px-4 py-3">
        <div className="shrink-0 relative">
          <div className=" bg-linear-to-r from-amber-300 to-rose-300 rounded-xl blur-md opacity-30 animate-pulse" />
          <Button className="relative px-3 py-2.5 bg-linear-to-r from-amber-500 to-rose-500 text-white rounded-xl font-semibold text-sm  border-0 shadow-lg shadow-amber-300/30 hover:shadow-amber-400/40 hover:scale-105 transition-all duration-300">
            Latest News
          </Button>
        </div>

        {/* Marquee */}
        <div className="flex-1 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-linear-to-r from-amber-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-linear-to-l from-rose-50 to-transparent z-10 pointer-events-none" />

          <Marquee
            pauseOnHover={true}
            speed={70}
            gradient={false}
            className="py-1"
          >
            <div className="flex items-center gap-8">
              {books.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 px-4 group cursor-pointer"
                >

                  {/* News text */}
                  <div className="flex items-center gap-2">
                    <p className="text-sm bg-amber-200 rounded-lg px-2 py-1 text-rose-700">New Arrivals:</p>
                    <p className="text-gray-700  font-medium group-hover:text-amber-700 transition-colors duration-300 whitespace-nowrap">
                        
                      {item.title}
                    </p>
                    <p className="text-sm">| Special Discount on Memberships...</p>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default News;
