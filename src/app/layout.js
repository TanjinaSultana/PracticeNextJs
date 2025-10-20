import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Component/Navbar";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <main className="text-center "> {children}</main>
        <footer className="text-center">Powered by me</footer>
      </body>
    </html>
  );
}
