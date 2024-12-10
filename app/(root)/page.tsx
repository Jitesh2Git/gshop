import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import Recent from "@/components/Recent";
import Trending from "@/components/Trending";
import { getAllGames } from "@/sanity/lib/games/getAllGames";
import React from "react";

const Home = async () => {
  const games = await getAllGames();

  return (
    <main>
      <Banner />
      <Trending games={games} />
      <Featured />
      <Recent games={games} />
    </main>
  );
};

export default Home;
