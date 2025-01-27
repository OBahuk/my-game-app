
import Layout from '../components/Layout';
import Link from "next/link";
import React from "react";
import { GAMES, PURCHASE} from "../routes";

const HomePage = () => {
  return (
      <Layout title="Home | Game App">
        <h1 className="text-2xl font-bold mb-4 bg-colo">Welcome to Game App</h1>
          <Link
              href={GAMES}
              className="m-4 inline-block text-center max-w-[440] w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
          >
              Here you can check list of available games
          </Link>
          <Link
              href={PURCHASE}
              className="m-4 inline-block text-center max-w-[440] w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-4"
          >
              Here you can buy game currency
          </Link>
        <p className="mb-4">
            We all love games and appreciate the enjoyment they bring, but at the same time, we understand the struggle that sometimes creeps behind even the best of us. Buy video game currency and points and get the boost you need for your character, additional materials, or items that offer useful utilities. You can invest in making your character stronger, maybe increase their level and ease their journey. Or get something to help you craft the perfect armour. And maybe utility is not your priority? Well, your game points can get you plenty of customization options. You may buy outfits, pets, mounts, and a whole array of aesthetic items that will ensure your character stands out in a crowd!
        </p>
        <p className="mb-4">
            Some games might offer dyes and similar items, others have costume sets, but when you buy video game currency and points, you are sure to get something to outfit your hero with! And last but not least, purchases for your game points can be mystery boxes. These RNG ruled packs can offer great rewards that would otherwise not be available, as well as provide the entertainment of opening something so exciting! Overall, the game points can function as an irreplaceable currency, opening the otherwise locked doors: utility, boosts, outfits, and other brilliant items are at your fingertips.
        </p>
      </Layout>
  );
};

export default HomePage;
