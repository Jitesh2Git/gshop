"use client";

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [footer, setFooter] = useState(null);
  const [games, setGames] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await client.fetch(
          groq`
            *[_type=='footer'] {
              ...,
            }
          `
        );
        setFooter(data);
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
    <>
      {footer?.map((footer) => (
        <footer key={footer._id} className="flex flex-col pb-5">
          <div
            className="flex justify-evenly border-4 p-8
          border-x-0 border-b-0 border-t-red max-md:flex-col gap-5"
          >
            <div className="footer">
              <h1 className="footer_headings">{footer.categories}</h1>
              <Link href="#">
                {footer.cat_name.map((cname, index) => (
                  <p
                    key={index}
                    className="footer_links pb-4 cursor-not-allowed"
                  >
                    {cname}
                  </p>
                ))}
              </Link>
            </div>
            <div className="footer">
              <h1 className="footer_headings">{footer.top_games}</h1>
              {games?.slice(10, 16).map((game, index) => (
                <Link key={index} href={`/game/${game.slug.current}`}>
                  <p className="footer_links">{game.name}</p>
                </Link>
              ))}
            </div>
            <div className="footer">
              <h1 className="footer_headings">{footer.support}</h1>
              <Link href="#">
                {footer.support_name.map((sname, index) => (
                  <p
                    key={index}
                    className="footer_links pb-4 cursor-not-allowed"
                  >
                    {sname}
                  </p>
                ))}
              </Link>
            </div>
          </div>
          <div className="mx-auto text-center">
            <h1 className="text-4xl font-bold pb-2">{footer.copy}</h1>
            <p className="text-[#64748b]">{footer.desc}</p>
          </div>
        </footer>
      ))}
    </>
  );
};

export default Footer;
