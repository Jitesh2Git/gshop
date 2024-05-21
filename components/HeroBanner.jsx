import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";

const HeroBanner = ({ banner: { image, largeText, smallText } }) => {
  return (
    <section
      className="flex flex-wrap justify-around items-center m-10 py-16 
      gap-10 px-10 shadow-[1px_5px_10px_3px_rgba(227,34,33,0.8)] 
      rounded-[45px] max-xl:text-center max-md:px-8 bg-[#fffbfb]
      "
    >
      <div className="flex flex-col gap-5 w-[600px]">
        <h1
          className="text-6xl text-red font-extrabold
        max-md:text-4xl"
        >
          {largeText}
        </h1>
        <h3 className="text-lg font-bold text-[#64748b] max-md:text-sm italic">
          {smallText}
        </h3>
      </div>
      <Image
        alt="banner img"
        src={urlForImage(image && image[0])}
        width={384}
        height={366}
        priority
        quality={95}
      />
    </section>
  );
};

export default HeroBanner;
