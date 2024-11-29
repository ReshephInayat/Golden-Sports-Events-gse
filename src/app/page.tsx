import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import News from "@/components/Collabs";
import NotificationBanner from "@/components/NotificationBanner";
import { PhoneCallIcon } from "lucide-react";
import { TfiEmail } from "react-icons/tfi";
import Link from "next/link";

export default function Homepage() {
  return (
    <>
      <div className="overflow-x-hidden relative">
        {/* Fixed Contact Button */}
        <div className="fixed md:bottom-20 bottom-4 right-4 md:right-8 z-50">
          <Link href="/contact">
            <button className="bg-red-600 text-white px-3 py-3 rounded-full shadow-lg hover:bg-yellow-600 transition duration-300">
              <TfiEmail className="md:size-[30px]" />
            </button>
          </Link>
        </div>
        <NotificationBanner />
        <div>
          <Hero />
          <div className="relative z-[30]">
            <About />
          </div>
          <div className="relative z-[30]">
            <Events />
          </div>
          <div className="relative z-[30]">
            <News />
          </div>
          <div className="relative z-[30]">
            <Team />
          </div>
          <div className="relative z-[30]">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
