"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import News from "@/components/News";
// import Loading from "./loading";
export default function Homepage() {

   
   return (
     
     <>
      <div className="overflow-x-hidden">
        <div>
          {/* Navbar */}

          {/* Hero Section  */}
          <Hero />
          <div className="relative z-[30]">
            {/* About */}
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

