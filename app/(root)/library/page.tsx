"use client";

import { useStateContext } from "@/context/StateContext";
import { Games } from "@/sanity.types";
import { getAllGames } from "@/sanity/lib/games/getAllGames";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiMiniShoppingBag } from "react-icons/hi2";

const LibraryPage = () => {
  const [games, setGames] = useState<Games[]>([]);
  const { onAdd, qty } = useStateContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllGames();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        setGames(data);
      } catch (error) {
        console.error("Error fetching games data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="px-2 section">
      <h1 className="library_section_heading">
        <span className="section_span">|</span>Games Library
      </h1>
      <div className="game_container">
        {games?.map((game) => (
          <div key={game._id} className="group game_wrapper">
            <HiMiniShoppingBag
              className="shopping_bag"
              onClick={() => onAdd(game, qty)}
            />
            <Link href={`/game/${game.slug?.current}`}>
              <div className="rounded-xl">
                <Image
                  src={urlFor(game.poster!).url()}
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
      <div className="section_button_container">
        <Link href="/">
          <button className="section_nav_button">Back To Home</button>
        </Link>
      </div>
    </section>
  );
};

export default LibraryPage;
