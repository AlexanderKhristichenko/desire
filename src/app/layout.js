import { Open_Sans, Montserrat } from "next/font/google";
import "./globals.scss";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--open-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--montserrat",
});

export const metadata = {
  title: "Desire - Home",
  description: "Furniture collection",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${montserrat.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
