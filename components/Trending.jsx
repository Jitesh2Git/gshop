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
    <section className="section">
      <h1 className="section_heading">
        <span className="section_span">|</span>Trending Games
      </h1>

      <div className="section_trending_container">
        {games?.slice(0, 10).map((game) => (
          <div key={game._id} className="group section_grid">
            <HiMiniShoppingBag
              className="shopping_bag"
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
            <div className="section_game_details">
              <p className="section_game_name">{game.name}</p>
              <p className="section_game_price">${game.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trending;
