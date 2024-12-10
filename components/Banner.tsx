import { getBannerData } from "@/sanity/lib/banner/getBannerData";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React from "react";

const Banner = async () => {
  const banner = await getBannerData();

  return (
    <section className="section">
      <div className="section_container">
        <Image
          alt="gaming overlay img"
          src={urlFor(banner!.overlay!).url()}
          fill
          priority
          quality={95}
          className="section_hero_overlay_image"
        />
        <div className="section_banner">
          <h1 className="section_banner_large">{banner?.largeText}</h1>
          <h3 className="section_banner_small">{banner?.smallText}</h3>
        </div>
        <Image
          alt="banner img"
          src={urlFor(banner!.image!).url()}
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

export default Banner;
