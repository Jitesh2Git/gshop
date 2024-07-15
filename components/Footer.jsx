import { fetchFooterData, fetchGamesData } from "@/lib/actions";
import Link from "next/link";

const Footer = async () => {
  const footer = await fetchFooterData();
  const games = await fetchGamesData();

  return (
    <footer className="footer">
      {footer?.map((footer) => (
        <div key={footer._id} className="footer_container">
          <div className="footer_wrapper">
            <div className="footer_section">
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
            <div className="footer_section">
              <h1 className="footer_headings">{footer.top_games}</h1>
              {games?.slice(10, 16).map((game, index) => (
                <Link key={index} href={`/game/${game.slug.current}`}>
                  <p className="footer_links">{game.name}</p>
                </Link>
              ))}
            </div>
            <div className="footer_section">
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
            <h1 className="text-4xl font-bold pb-2 dark:text-white">
              {footer.copy}
            </h1>
            <p className="text-[#797561]">{footer.desc}</p>
          </div>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
