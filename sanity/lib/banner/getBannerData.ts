import { defineQuery } from "next-sanity";
import { client } from "../client";

export const getBannerData = async () => {
  const BANNER_QUERY = defineQuery(`
    *[_type == "banner"][0] {
      _id,
      largeText,
      smallText,
      "image": image.asset->url,
      "overlay": overlay.asset->url
    }
  `);

  try {
    const banner = await client.fetch(BANNER_QUERY);
    return banner || null;
  } catch (error) {
    console.error("Error fetching banner data:", error);
    return null;
  }
};
