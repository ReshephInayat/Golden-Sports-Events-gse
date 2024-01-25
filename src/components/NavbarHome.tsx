"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";

export default function NavbarHome() {
  const [nav, setnav]: any = useState(false);
  const openNav = () => setnav(true);
  const closeNav = () => setnav(false);
  return (
    <div className="overflow-x-hidden">
      <div>
        {/* Navbar */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Navbar openNav={openNav} />
      </div>
    </div>
  );
}
