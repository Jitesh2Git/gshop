import { defineQuery } from "next-sanity";
import { client } from "../client";

export const getAllGames = async () => {
  const ALL_GAMES_QUERY = defineQuery(`
     *[_type == "games"] | order(name desc) {
    _id,
    name,
    slug {
      current
    },
    price,
    details,
    "image": image.asset->url,
    "poster": poster.asset->url
  }
  `);

  try {
    const games = await client.fetch(ALL_GAMES_QUERY);
    return games || null;
  } catch (error) {
    console.error("Error fetching all games:", error);
    return null;
  }
};
