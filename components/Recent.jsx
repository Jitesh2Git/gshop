"use client";

import { useStateContext } from "@/context/StateContext";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiMiniShoppingBag } from "react-icons/hi2";

const Recent = ({ games }) => {
  const { onAdd, qty } = useStateContext();

  return (
    <section className="px-3">
      <h1 className="text-[40px] font-bold pb-8 pt-3 max-sm:text-2xl max-sm:pt-0">
        <span className="p-4 text-5xl">|</span>Recent Games
      </h1>
      <div
        className="flex pb-8 gap-6 mx-6 px-1 overflow-x-scroll scrollbar
      scrollbar-thumb-red hover:scrollbar-thumb-[#9f9f9f]"
      >
        {games?.slice(0, 10).map((game) => (
          <div
            key={game._id}
            className="relative group hover:bg-[#1e293b] rounded-xl 
            shadow shadow-[#94a3b8] flex flex-col items-center
            bg bg-[#f8fafc] min-w-[170px]"
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
                  src={urlForImage(game.image)}
                  alt="poster"
                  width={640}
                  height={360}
                  quality={95}
                  priority
                  className="rounded-t-xl h-[200px]"
                />
              </div>
            </Link>
            <div
              className="flex flex-col justify-between items-center p-3 w-full
            rounded-xl group-hover:text-[#f8fafc] group-hover:bg-[#1e293b]
            text-center h-[100px]"
            >
              <p className="font-bold">{game.name}</p>
              <p className="font-bold text-2xl text-red">${game.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="min-w-[100%] text-center">
        <Link href="/library">
          <button
            className="px-4 border-2 py-4 m-10 rounded-xl bg bg-bgcol
     hover:bg-[#1e293b] hover:text-red text-[12px] font-bold
     border-red"
          >
            Explore All Our Games
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Recent;
