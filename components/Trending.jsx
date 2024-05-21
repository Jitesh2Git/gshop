"use client";

import { useStateContext } from "@/context/StateContext";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiMiniShoppingBag } from "react-icons/hi2";

const Trending = ({ games }) => {
  const { onAdd, qty } = useStateContext();

  return (
    <section className="px-3">
      <h1 className="text-[40px] font-bold pb-8 pt-3 max-sm:text-2xl max-sm:pt-0">
        <span className="p-4 text-5xl">|</span>Trending Games
      </h1>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 
        xl:grid-cols-5 px-5 mb-5"
      >
        {games?.slice(0, 10).map((game) => (
          <div
            key={game._id}
            className="relative group hover:bg-[#1e293b] rounded-xl 
            shadow shadow-[#94a3b8] flex flex-col items-center
            bg bg-[#f8fafc]"
          >
            <HiMiniShoppingBag
              className="absolute top-3 right-3 p-3 text-red text-[43px] 
            bg bg-[#f8fafc] rounded-xl hover:bg-[#1e293b] 
            hover:outline outline-[#f8fafc] cursor-pointer"
              onClick={() => onAdd(game, qty)}
            />
            <Link href={`/game/${game.slug.current}`}>
              <div className="rounded-xl">
                <Image
                  src={urlForImage(game.poster)}
                  alt="poster"
                  width={640}
                  height={360}
                  quality={95}
                  priority
                  className="rounded-t-xl"
                />
              </div>
            </Link>
            <div
              className="flex justify-between items-center p-3 w-full
            rounded-xl group-hover:text-[#f8fafc] group-hover:bg-[#1e293b]"
            >
              <p className="font-bold">{game.name}</p>
              <p className="font-bold text-2xl text-red">${game.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;
