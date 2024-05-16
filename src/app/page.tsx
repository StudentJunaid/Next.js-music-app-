import Image from "next/image";
import HeroSection from "../components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooesus from "@/components/WhyChooesus";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcommingWebinar from "@/components/UpcommingWebinar";

export default function Home() {
  return (
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.0]">
    <HeroSection/>
    <FeaturedCourses/>
    <WhyChooesus/>
    <MusicSchoolTestimonials/>
    <UpcommingWebinar/>
  </main>
  );
}
