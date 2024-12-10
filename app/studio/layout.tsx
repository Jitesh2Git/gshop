import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GSHOP | Buy Top Video Games",
  description:
    "Unleash Your Gaming Potential. Elevate your gaming journey and immerse yourself in a world of limitless excitement and boundless creativity.",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
