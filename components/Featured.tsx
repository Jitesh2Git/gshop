import { getFeaturedGame } from "@/sanity/lib/games/getFeaturedGame";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Featured = async () => {
  const game = await getFeaturedGame();

  return (
    <section className="section px-3 mb-5">
      <div>
        <h1 className="section_heading">
          <span className="section_span">|</span>Featured Game
        </h1>
        <Link href={`/game/${game?.slug?.current}`} className="group">
          <div
            className="section_featured_container"
            style={{
              backgroundImage: game?.poster
                ? `url('${urlFor(game?.poster).url()}')`
                : "none",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              objectFit: "cover",
              WebkitBackgroundSize: "cover",
            }}
          >
            <div className="section_featured_overlay" />
            <Image
              src="/images/overlay.png"
              alt="overlay"
              width={1500}
              height={1500}
              priority
              className="section_featured_overlay_image"
            />
            <div className="section_featured_game_details">
              <h1 className="section_featured_game_name">{game?.name}</h1>
              <p className="section_featured_game_desc">{game?.details}</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Featured;
