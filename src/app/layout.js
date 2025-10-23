import { Geist, Geist_Mono, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/Component/Navbar";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
export const metadata = {
  title: {
    default: "Learning NextJS",
    template: "%s | Learning NextJS",
  },
  description: "All should learn Next.js",
};

 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar></Navbar>
        <main className="text-center "> {children}</main>
        <footer className="text-center">Powered by me</footer>
      </body>
    </html>
  );
}
