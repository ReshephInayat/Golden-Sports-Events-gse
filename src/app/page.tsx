"use client";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import News from "@/components/Collabs";
// import { useEffect, useState, } from "react";
// import { useLocation } from "react-router-dom";
// import Loading from "@/components/Loader";


export default function Homepage() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [initialLoadCompleted, setInitialLoadCompleted] = useState(false);

//   useEffect(() => {
//     // Check if the current path matches the specific path where you want to show the loader
//     const isSpecificPath = path === "#home";

//     // If it's the specific path, simulate an API call
//     if (isSpecificPath) {
//       setTimeout(() => {
//         setIsLoading(false);
//         setInitialLoadCompleted(true);
//       }, 9000);
//     } else {
//       // If it's not the specific path, set isLoading to false immediately
//       setIsLoading(false);
//       setInitialLoadCompleted(true);
//     }
//   }, [path]);

//   if (isLoading) {
//     return <Loading />;
//   }
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

