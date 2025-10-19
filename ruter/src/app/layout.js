"use client"
import Link from "next/link";
import "./globals.css";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#e6e6e6]">
        <div className="p-1 flex space-x-10 text-3xl">
            <Image 
            src="/ruter logo.png"
            width="280"
            height="200"
            alt="RUTer logo"
            className="border-2 bg-blue-100 border-blue-950 rounded-full"
            />
            <div className="w-full flex flex-col">
              <div className="w-full h-1/4 flex justify-between space-x-6 my-3">
                <Link href="/" className="w-1/3 text-center bg-blue-200 p-4 text-blue-600 rounded-md border hover:bg-blue-300 hover:text-blue-700 transition-all duration-300">
                  Home
                </Link>
                <Link href="/about" className="w-1/3 text-center bg-blue-200 p-4 text-blue-600 rounded-md border hover:bg-blue-300 hover:text-blue-700 transition-all duration-300">
                  About
                </Link>
                <Link href="/posts" className="w-1/3 text-center bg-blue-200 p-4 text-blue-600 rounded-md border hover:bg-blue-300 hover:text-blue-700 transition-all duration-300">
                  Posts
                </Link>
              </div>
              <div className="flex justify-center items-center h-3/4">
                {usePathname() == "/" ? (
                  <h1 className="text-9xl w-full text-center">RUTeR</h1>
                ) : (
                  <></>
                )}
              </div>
            </div>
        </div>
        <main className="p-10">{children}</main>
      </body>
    </html>
  );
}
