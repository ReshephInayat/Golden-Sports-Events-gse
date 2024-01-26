import React from "react";
import Section from "@/components/Sections";

import Link from "next/link";
export default function page() {
  return (
    <div className="bg-black h-[100vh] ">
      <Section>

        <div
          className="flex items-center justify-center ">
        <h1 className="text-4xl md:text-8xl font-semibold text-white mt-64 mb-4 ">
          Error | 404 
        </h1>
        </div> 
      <p className="text-white text-center text-2xl">Page not Found</p>
      <div className="flex justify-center pt-8">

        <Link href={'/'}>
        <button className="bg-white px-4 py-4 font-semibold ">← Return</button>
        </Link>
      </div>
      </Section>
        </div>
     
   
  );
}
