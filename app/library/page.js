"use client";

import { useStateContext } from "@/context/StateContext";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiMiniShoppingBag } from "react-icons/hi2";

const Library = () => {
  const [games, setGames] = useState(null);
  const { onAdd, qty } = useStateContext();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch(
          groq`
            *[_type=='games'] {
              ...,
            }
          `
        );
        setGames(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <section className="px-2">
      <h1 className="text-[40px] font-bold py-8 max-sm:text-3xl">
        <span className="p-4 text-5xl">|</span>Games Library
      </h1>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 
        xl:grid-cols-4 px-5"
      >
        {games?.map((game) => (
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
      <Link href="/">
        <div className="min-w-[100%] text-center">
          <button
            className="px-4 border-2 py-4 m-10 rounded-xl bg bg-bgcol
        hover:bg-[#1e293b] hover:text-red text-[12px] font-bold
        border-red"
          >
            Back To Home
          </button>
        </div>
      </Link>
    </section>
  );
};

export default Library;
