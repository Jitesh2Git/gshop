"use client";

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import Link from "next/link";

const Search = () => {
  const [games, setGames] = useState([]);
  const [inputValue, setInputValue] = useState("");

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

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const clearInput = () => {
    setInputValue("");
  };

  const filteredGames =
    inputValue === ""
      ? []
      : games?.filter((game) =>
          game.name.toLowerCase().includes(inputValue.toLowerCase())
        );

  return (
    <div className="relative">
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search Games..."
          value={inputValue}
          onChange={handleInputChange}
          className="peer border-2 border-black rounded-xl px-12 py-[10px]
           bg-bgcol text-sm font-semibold focus:outline-red w-full"
        />
        <IoIosSearch className="absolute ml-3 peer-focus:text-red" />
        {inputValue && (
          <IoClose
            className="absolute right-3 cursor-pointer p-2 text-4xl 
            rounded-3xl hover:text-red hover:bg-[#e2e8f0]"
            onClick={clearInput}
          />
        )}
      </div>
      {inputValue && (
        <div
          className="absolute left-1/2 transform -translate-x-1/2 mt-2 
        w-[680px] max-h-[570px] bg-[#fffbfb] rounded-lg z-[99999]
        overflow-hidden overflow-y-scroll scrollbar-w-2 scrollbar
        scrollbar-thumb-red hover:scrollbar-thumb-[#9f9f9f]
        scrollbar-track-rounded-xl scrollbar-thumb-rounded-xl
        shadow-lg border border-[#cbd5e1]"
        >
          {filteredGames?.length === 0 ? (
            <div
              className="p-2 rounded-xl text-sm font-bold
            border-2 border-[#cbd5e1] m-3 text-center
            "
            >
              No games found !
            </div>
          ) : (
            filteredGames?.map((game) => (
              <Link
                key={game.name}
                href={`/game/${game.slug.current}`}
                onClick={clearInput}
                className="p-3 rounded-xl
              border-2 border-[#e5e7eb] m-3 flex gap-4
              bg bg-[#fffbfb] items-center hover:bg-[#e5e7eb]"
              >
                <Image
                  src={urlForImage(game.image)}
                  alt="game img"
                  width={264}
                  height={352}
                  priority
                  className="w-[90px] h-[100px] rounded-xl object-cover"
                />
                <div>
                  <h1 className="text-lg font-bold">{game.name}</h1>
                  <p className="mr-2 text-sm text-[#999999]">
                    {game.details.slice(0, game.details.length / 1.6)}...
                  </p>
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
