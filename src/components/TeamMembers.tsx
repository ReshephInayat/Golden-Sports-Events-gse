import React from "react";
import Image from "next/image";
interface Props {
  name: string;
  role: string;
  image: string;
}

export default function TeamMembers({ image, name, role }: Props) {
  return (
    <div className="flex flex-col text-center justify-center">
      <Image
        src={image}
        alt={name}
        width={200}
        height={200}
        className="mx-auto mb-[1rem] rounded-full h-auto"
      />

      <h1 className="text-[30px] text-white font-bold mt-[1rem] md:text-4xl">
        {name}
      </h1>
      <p className="text-[18px] text-white font-semibold opacity-75 mt-[0.5rem] mb-[1.4rem] md:text-3xl">
        {role}
      </p>
      <p className="text-[16px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto"></p>
    </div>
  );
}
