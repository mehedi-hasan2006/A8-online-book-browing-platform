import Search from "@/components/search/Search";
import { Button } from "@heroui/react";
import Image from "next/image";

async function AllBookPage() {
  const res = await fetch(
    "https://online-book-browing-platform.vercel.app/data.json",
  );
  const data = await res.json();

  return (
    <div className="container mx-auto">
      <div className="mt-5 font-semibold text-3xl">
        <h1>All Books</h1>
      </div>
      <div className="flex justify-center mt-5">
        <Search />
      </div>
      <div className="mt-6 grid grid-cols-4 gap-5">
        {data.map((item) => (
          <div key={item.id}>
            <div>
              <Image
                src={item.image_url}
                alt={item.title}
                width={100}
                height={100}
              />
            </div>
            <p> {item.title}</p>
            <Button>Details</Button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllBookPage;
