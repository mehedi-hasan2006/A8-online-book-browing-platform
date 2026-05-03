import FeaturedBooks from "@/components/featuredBook/FeaturedBooks";
import Hero from "@/components/hero/Hero";
import HowItWorks from "@/components/howItWorks/HowItWorks";
import News from "@/components/news/News";
import Testimonial from "@/components/testimonial/Testimonial";
export default function Home() {
  return (
    <div>
      <Hero />
      <News />
      <FeaturedBooks />
      <HowItWorks />
      <Testimonial />
    </div>
  );
}
