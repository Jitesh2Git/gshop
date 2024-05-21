"use client";

import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { groq } from "next-sanity";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useStateContext } from "@/context/StateContext";

const Game = ({ params: { slug } }) => {
  const [game, setGame] = useState(null);
  const { qty, setQty, incQty, decQty, onAdd } = useStateContext();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch(
          groq`
          *[_type=='games' && slug.current == '${slug}'][0]`
        );
        setGame(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [slug]);

  const { details, image, name, poster, price } = game ?? {};

  const handleAddClick = () => {
    onAdd(game, qty);
    setQty(1);
  };

  return (
    <section
      className="relative m-10 px-[60px] py-[125px]
    rounded-3xl flex gap-20 items-center max-xl:flex-col 
    max-xl:py-[50px] max-xl:gap-10"
      style={{
        backgroundImage: poster ? `url('${urlForImage(poster)}')` : "none",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        objectFit: "cover",
        WebkitBackgroundSize: "cover",
      }}
    >
      <div
        className="absolute inset-0 opacity-50 rounded-3xl 
      bg-[#000]"
      />
      {image && (
        <Image
          src={urlForImage(image)}
          alt="game img"
          width={264}
          height={352}
          priority
          className="rounded-3xl outline outline-[5px] 
          outline-[#f8fafc] z-[99] relative"
        />
      )}
      <div
        className="text-[#f8fafc] z-[99] relative space-y-3
      max-xl:text-center"
      >
        <h1 className="text-[60px] max-xl:text-[40px] font-bold">{name}</h1>
        <p className="text-xl leading-8 max-xl:text-[15px]">{details}</p>
        <p className="text-[40px] font-semibold max-xl:text-[40px]">${price}</p>
        <div
          className="flex items-center gap-10 max-xl:flex-col
        max-xl:gap-3"
        >
          <button
            className="flex items-center gap-3 px-4 py-4 rounded-xl mt-4
            bg bg-[#f8fafc] hover:bg-[#1e293b] text-[15px] font-bold
            text-red hover:outline outline-[#f8fafc] max-xl:text-[14px]"
            onClick={handleAddClick}
          >
            <HiMiniShoppingBag className="text-xl" />
            Add to cart
          </button>
          <p className="flex items-center gap-5 text-[#f8fafc] mt-4">
            <span
              className="bg bg-[#808080] p-3
            rounded-[10px] border-2 hover:text-red hover:border-red
            cursor-pointer"
              onClick={decQty}
            >
              <FaMinus />
            </span>
            <span className="text-[40px]">{qty}</span>
            <span
              className="bg bg-[#020617] p-3
             rounded-[10px] border-2 hover:text-red hover:border-red
             cursor-pointer"
              onClick={incQty}
            >
              <FaPlus />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Game;
