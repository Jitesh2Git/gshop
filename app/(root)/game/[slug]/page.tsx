"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useStateContext } from "@/context/StateContext";
import { getGameBySlug } from "@/sanity/lib/games/getGameBySlug";
import { urlFor } from "@/sanity/lib/image";
import { useParams } from "next/navigation";
import { Games } from "@/sanity.types";

const GamePage = () => {
  const { slug } = useParams();
  const [game, setGame] = useState<Games>();
  const { qty, setQty, incQty, decQty, onAdd } = useStateContext();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        const data = await getGameBySlug(slug);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        setGame(data);
      } catch (error) {
        console.error("Error fetching game data:", error);
      }
    };
    fetchData();
  }, [slug]);

  const { details, image, name, poster, price } = game ?? {};

  const handleAddClick = () => {
    onAdd(game, qty);
    setQty(1);
  };

  return (
    <section className="section">
      <div
        className="game_details_container"
        style={{
          backgroundImage: poster ? `url('${urlFor(poster).url()}')` : "none",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          objectFit: "cover",
          WebkitBackgroundSize: "cover",
        }}
      >
        <div className="game_details_overlay" />
        {image && (
          <Image
            src={urlFor(image).url()}
            alt="game img"
            width={264}
            height={352}
            priority
            className="game_details_image"
          />
        )}
        <div className="game_details_wrapper">
          <h1 className="game_details_name">{name}</h1>
          <p className="game_details_desc">{details}</p>
          <p className="game_details_price">${price}</p>
          <div className="game_add_cart_container">
            <button className="game_add_button" onClick={handleAddClick}>
              <HiMiniShoppingBag className="text-xl" />
              Add to cart
            </button>
            <p className="flex items-center gap-5 text-[#f8fafc] mt-4">
              <span className="game_quantity_button" onClick={decQty}>
                <FaMinus />
              </span>
              <span className="text-[40px]">{qty}</span>
              <span className="game_quantity_button" onClick={incQty}>
                <FaPlus />
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamePage;
