import React from "react";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

interface Props {
  openNav: () => void;
}

const Navbar: React.FC<Props> = ({ openNav }) => {
  return (
    <motion.div
      initial={{ backgroundColor: "transparent" }}
      animate={{ backgroundColor: "rgba(0, 0, 0, 0.0)" }}
      transition={{ duration: 0.5 }}
      className="w-[100%] fixed z-[10000] top-0 h-[12vh] shadow-md"
    >
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[50px] text-white font-bold">
          <span className="text-white">GSE</span>
        </h1>

        <ScrollLink to={`home`} smooth={true} duration={500}>
          <div className="nav-effect">Home</div>
        </ScrollLink>

        <ScrollLink to={`${"about"}`} smooth={true} duration={500}>
          <div className="nav-effect">About</div>{" "}
        </ScrollLink>

        <ScrollLink to="#events" smooth={true} duration={500}>
          <div className="nav-effect">Events</div>
        </ScrollLink>

             
        <ScrollLink to="#news" smooth={true} duration={500}>
          <div className="nav-effect">News / Collabs</div>
        </ScrollLink>
      
        <ScrollLink to="#team" smooth={true} duration={500}>
          <div className="nav-effect">Team</div>
        </ScrollLink>

        <ScrollLink to="#contact" smooth={true} duration={500}>
          <div className="nav-effect">Contacts Us</div>
        </ScrollLink>

        <div onClick={openNav}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-white" />
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
