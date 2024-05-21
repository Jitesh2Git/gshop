"use client";

import { Featured, HeroBanner, Recent, Trending } from "@/components";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [banner, setBanner] = useState(null);
  const [games, setGames] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch(
          groq`
            *[_type=='banner'] {
              ...,
            }
          `
        );
        setBanner(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

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

  return (
    <div>
      {banner?.map((banner) => (
        <HeroBanner key={banner._id} banner={banner} />
      ))}

      <Trending games={games} />

      <Featured games={games} />

      <Recent games={games} />
    </div>
  );
};

export default Page;
