import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "RUTer site",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-800">
          <h1 className="text-xl font-bold">🌐 RUTer site</h1>
          <nav className="space-x-4">
            <Link href="/" className="text-blue-600 hover:underline">
              Home
            </Link>
            <Link href="/about" className="text-blue-600 hover:underline">
              About
            </Link>
            <Link href="/posts" className="text-blue-600 hover:underline">
              Posts
            </Link>
          </nav>
        <main className="p-10">{children}</main>
      </body>
    </html>
  );
}
