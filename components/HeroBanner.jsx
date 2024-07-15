import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";

const HeroBanner = ({ banner: { image, largeText, smallText } }) => {
  return (
    <section className="section">
      <div className="section_container">
        <div className="section_banner">
          <h1 className="section_banner_large">{largeText}</h1>
          <h3 className="section_banner_small">{smallText}</h3>
        </div>
        <Image
          alt="banner img"
          src={urlForImage(image && image[0])}
          width={384}
          height={366}
          priority
          quality={95}
        />
      </div>
    </section>
  );
};

export default HeroBanner;
