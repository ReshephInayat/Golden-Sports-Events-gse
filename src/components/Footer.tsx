"use client";
import { EnvelopeIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa";
import { TfiLocationPin } from "react-icons/tfi";
import { Element } from "react-scroll";

// const openGmail = () => {
//   window.location.href = "mailto:rasafinayat@gmail.com";
// };
const recipientEmail = "goldensportsevents.official@gmail.com";

const Footer = () => {
  return (
    <Element name="#contact">
      <div id="contact" className="pt-[8rem] pb-[4rem] bg-[#02050a] ">
        <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[80%] mx-auto gap-[3rem]">
          <div className="flex items-center space-x-6">
            <div
              className="md:w-[6rem] md:h-[6rem] w-[5rem] h-[5rem] flex items-center justify-center
            rounded-full bg-yellow-500 "
            >
              <TfiLocationPin className="md:w-[5rem] md:h-[5rem] w-[3rem] h-[3rem] text-black" />
            </div>
            <div>
              <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white] ">
                Address
              </h1>
              <p className="text-[17px] w-[100%] text-white opacity-60">
                Office No. 7,
                <br />
                Saima Bridge View,
                <br />
                Block-B, North Nazimabad,
                <br />
                Karachi, Pakistan
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div
              className="md:w-[6rem] md:h-[6rem] w-[5rem] h-[5rem] flex items-center justify-center
            rounded-full bg-yellow-500 "
            >
              <FaPhoneVolume className="md:w-[4rem] md:h-[4rem] w-[3rem] h-[3rem] text-black" />
            </div>
            <div>
              <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white] ">
                Phone
              </h1>
              <p className="text-[17px] w-[100%] text-white opacity-60">
                <a
                  href="tel:03007264746"
                  title="Click to Contact Golden Sports Events"
                >
                  0300-7264746
                </a>
                <br />
                <a
                  href="tel:03219436596"
                  title="Click to Contact Golden Sports Events"
                >
                  0321-9436596
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div
              className="md:w-[6rem] md:h-[6rem] w-[5rem] h-[5rem] flex items-center justify-center
            rounded-full bg-yellow-500 "
            >
              <EnvelopeIcon className="md:w-[4rem] md:h-[4rem] w-[3rem] h-[3rem] text-black" />
            </div>
            <a
              href={`mailto:${recipientEmail}`}
              title="Click to Email Golden Sports Events"
              target="_blank"
            >
              <div>
                <h1 className="text-[25px] mb-[0.2rem] font-semibold text-[white] ">
                  Email
                </h1>
                <p className="text-[17px] w-[100%] text-white opacity-60">
                  goldensportsevents.
                  <br />
                  official@gmail.com
                </p>
              </div>
            </a>
          </div>
        </div>
        <div className="w-[80%] mt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 items-center justify-between ">
          <div className="text-[18px] mb-[2rem] md:mb-0 text-white opacity-40 ">
            Golden Sports Events | All Rights Reserved
          </div>
          <div className="flex items-center space-x-10">
            <p className="text-[18px] text-white opacity-40">Follow Us on → </p>
            <Link
              href={
                "https://www.instagram.com/goldensportseventsgse?igsh=d29xOHR3dTZvZW5z"
              }
              target="_blank"
            >
              <p>
                <BsInstagram
                  className="text-3xl text-white"
                  title="Instagram"
                />
              </p>
            </Link>
          </div>
          <div className="flex items-center "></div>
        </div>
      </div>
    </Element>
  );
};

export default Footer;
