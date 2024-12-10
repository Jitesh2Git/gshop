import { defineQuery } from "next-sanity";
import { client } from "@/sanity/lib/client";

export const getFooterData = async () => {
  const FOOTER_QUERY = defineQuery(`
    *[_type == "footer"] {
      _id,
      categories,
      cat_name,
      top_games,
      support,
      support_name,
      copy,
      desc
    }
  `);

  try {
    const footer = await client.fetch(FOOTER_QUERY);
    return footer || null;
  } catch (error) {
    console.error("Error fetching footer data:", error);
    return null;
  }
};
