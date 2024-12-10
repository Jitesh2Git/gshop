"use client";

import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { getAllGames } from "@/sanity/lib/games/getAllGames";
import { urlFor } from "@/sanity/lib/image";
import { Games } from "@/sanity.types";

const Search = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const data = await getAllGames();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        setGames(data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };
    fetchGames();
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  const filteredGames =
    inputValue === ""
      ? []
      : games.filter((game) =>
          game.name?.toLowerCase().includes(inputValue.toLowerCase())
        );

  return (
    <div className="relative">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search Games..."
          value={inputValue}
          onChange={handleInputChange}
          className="peer search_input"
        />
        <IoIosSearch className="search_icon" />
        {inputValue && (
          <IoClose className="search_close" onClick={clearInput} />
        )}
      </div>
      {inputValue && (
        <div className="search_conatiner">
          {filteredGames?.length === 0 ? (
            <div className="search_message">No games found!</div>
          ) : (
            filteredGames?.map((game, index) => (
              <Link
                key={index}
                href={`/game/${game.slug?.current}`}
                onClick={clearInput}
                className="search_game_container"
              >
                <Image
                  src={urlFor(game.image!).url()}
                  alt="game img"
                  width={264}
                  height={352}
                  priority
                  className="search_game_image"
                />
                <div>
                  <h1 className="search_game_name">{game.name}</h1>
                  <p className="search_game_details">{game.details}</p>
                  <p className="text-red">${game.price}</p>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
