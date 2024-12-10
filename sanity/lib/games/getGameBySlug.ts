import { defineQuery } from "next-sanity";
import { client } from "@/sanity/lib/client";

export const getGameBySlug = async (slug: string) => {
  const GAME_BY_SLUG_QUERY = defineQuery(`
   *[ 
    _type == "games" && slug.current == $slug
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
    const game = await client.fetch(GAME_BY_SLUG_QUERY, { slug });
    return game || null;
  } catch (error) {
    console.error("Error fetching game by slug:", error);
    return null;
  }
};
