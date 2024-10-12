import { Work_Sans } from "next/font/google";
import "./globals.css";
import AOSProvider from "./components/AOSProvider";
import ScrollToTop from "./components/ScrollToTop";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Tobi Oladele",
  description: "Tobi Oladele's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={workSans.className}><ScrollToTop /><AOSProvider>{children}</AOSProvider></body>
    </html>
  );
}
