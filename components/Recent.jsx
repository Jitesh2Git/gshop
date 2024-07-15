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
    <section className="section px-3">
      <h1 className="section_heading">
        <span className="section_span">|</span>Recent Games
      </h1>
      <div className="section_recent_container">
        {games?.slice(0, 10).map((game) => (
          <div key={game._id} className="group min-w-[170px] section_grid">
            <HiMiniShoppingBag
              className="shopping_bag"
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
            <div className="section_game_details flex-col text-center h-[100px]">
              <p className="section_game_name">{game.name}</p>
              <p className="section_game_price">${game.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="section_button_container">
        <Link href="/library">
          <button className="section_nav_button">Explore All Our Games</button>
        </Link>
      </div>
    </section>
  );
};

export default Recent;
