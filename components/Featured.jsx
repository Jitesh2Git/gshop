import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Featured = ({ games }) => {
  return (
    <section className="px-3 mb-5">
      {games?.slice(13, 14).map((game) => (
        <Link key={game} href={`/game/${game.slug.current}`} className="group">
          <h1 className="text-[40px] font-bold pb-8 pt-3 max-sm:text-2xl max-sm:pt-0">
            <span className="p-4 text-5xl">|</span>Featured Game
          </h1>
          <div
            className="relative mx-5 rounded-[30px] overflow-hidden"
            style={{
              backgroundImage: game.poster
                ? `url('${urlForImage(game.poster)}')`
                : "none",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              objectFit: "cover",
              WebkitBackgroundSize: "cover",
            }}
          >
            <div
              className="absolute inset-0 opacity-50 rounded-[30px]
    bg-[#000]"
            />
            <Image
              src="/overlay.png"
              alt="overlay"
              width={1500}
              height={1500}
              priority
              className="absolute opacity-0 bottom-0 rounded-[30px]
              w-full h-[150px] max-md:h-[200px] object-cover 
              translate-y-[160px] group-hover:opacity-50 transition-all
              duration-300 group-hover:translate-y-0"
            />

            <div
              className="z-[99] relative text-[#fff] text-center
          py-20 space-y-5 max-lg:py-10 max-xl:py-16"
            >
              <h1
                className="text-[60px] px-4 max-lg:text-[45px] font-bold
              max-sm:text-[30px] max-md:text-[40px]"
              >
                {game.name}
              </h1>
              <p
                className="text-xl leading-8 max-lg:text-[20px]
            px-[310px] max-xl:px-[200px] max-lg:px-[100px] max-md:text-[15px]
            max-sm:px-[40px]"
              >
                {game.details}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default Featured;
