import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";

const HeroBanner = ({ banner: { image, largeText, smallText } }) => {
  return (
    <section className="section">
      <div className="section_container">
        <Image
          alt="gaming overlay img"
          src="/gaming_overlay.svg"
          fill
          priority
          quality={95}
          className="section_hero_overlay_image"
        />
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
          className="z-10"
        />
      </div>
    </section>
  );
};

export default HeroBanner;
