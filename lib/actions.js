"use server";

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const fetchBannerData = async () => {
  try {
    const data = await client.fetch(
      groq`
          *[_type=='banner'] {
            ...,
          }
        `
    );
    return data;
  } catch (error) {
    console.error("Error fetching banner data:", error);
    return null;
  }
};

export const fetchGamesData = async () => {
  try {
    const data = await client.fetch(
      groq`
          *[_type=='games'] {
            ...,
          }
        `
    );
    return data;
  } catch (error) {
    console.error("Error fetching games data:", error);
    return null;
  }
};

export const fetchFooterData = async () => {
  try {
    const data = await client.fetch(
      groq`
            *[_type=='footer'] {
              ...,
            }
          `
    );
    return data;
  } catch (error) {
    console.error("Error fetching footer data:", error);
    return null;
  }
};

export const fetchIndividualGameData = async (slug) => {
  try {
    const data = await client.fetch(
      groq`
            *[_type=='games' && slug.current == '${slug}'][0]`
    );

    return data;
  } catch (error) {
    console.error("Error fetching games data:", error);
    return null;
  }
};
