import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Header from "@/components/Header";
import { StateContext } from "@/context/StateContext";
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "@/context/ThemeContext";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GSHOP | Buy Top Video Games",
  description:
    "Unleash Your Gaming Potential. Elevate your gaming journey and immerse yourself in a world of limitless excitement and boundless creativity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-[100%] font-sans overflow-y-scroll scrollbar-w-2 scrollbar
    scrollbar-thumb-red hover:scrollbar-thumb-[#9f9f9f]"
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = window.localStorage.getItem('theme');
                if (theme) {
                  document.documentElement.classList.add(theme === 'dark' ? 'dark' : '');
                } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeContextProvider>
          <StateContext>
            <Toaster />
            <Header />
            {children}
            <Footer />
          </StateContext>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
