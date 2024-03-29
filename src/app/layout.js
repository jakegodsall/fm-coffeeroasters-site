import { Fraunces, Barlow } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["900"],
  variable: "--font-fraunces",
});
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-barlow",
});

export const metadata = {
  title: "Coffeeroasters",
  description: "Great coffee made simple",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${barlow.variable} flex flex-col`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
