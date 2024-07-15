import { Featured, HeroBanner, Recent, Trending } from "@/components";
import { fetchBannerData, fetchGamesData } from "@/lib/actions";

const Page = async () => {
  const banner = await fetchBannerData();
  const games = await fetchGamesData();

  return (
    <main>
      {banner?.map((banner) => (
        <HeroBanner key={banner._id} banner={banner} />
      ))}

      <Trending games={games} />

      <Featured games={games} />

      <Recent games={games} />
    </main>
  );
};

export default Page;
