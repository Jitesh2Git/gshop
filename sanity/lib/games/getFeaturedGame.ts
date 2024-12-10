import { defineQuery } from "next-sanity";
import { client } from "../client";

export const getFeaturedGame = async () => {
  const FEATURED_GAME_QUERY = defineQuery(`
    *[
      _type == "games" && slug.current == "madden-nfl-24-deluxe-ed"
    ] | order(name asc) [0] {
      _id,
      name,
      slug,
      price,
      details,
     "image": image.asset->url,
      "poster": poster.asset->url
    }
  `);

  try {
    const featuredGame = await client.fetch(FEATURED_GAME_QUERY);
    return featuredGame || null;
  } catch (error) {
    console.error("Error fetching featured game:", error);
    return null;
  }
};
