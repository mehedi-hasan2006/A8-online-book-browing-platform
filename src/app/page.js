import FeaturedBooks from "@/components/featuredBook/FeaturedBooks";
import Hero from "@/components/hero/Hero";
import HowItWorks from "@/components/howItWorks/HowItWorks";
import Testimonial from "@/components/testimonial/Testimonial";
export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedBooks />
      <HowItWorks />
      <Testimonial />
    </div>
  );
}
