import Head from "next/head"; // For SEO elements

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" /> {/* Add favicon */}
      </Head>
      <body className="font-sans antialiased">
        <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
          <h1 className="text-xl font-bold">My Next app</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-400">
                  About
                </a>
              </li>
              {/* Add more navigation links as needed */}
            </ul>
          </nav>
        </header>
        <main className="container mx-auto ">{children}</main>
        <footer className="bg-gray-800 text-white py-4 px-6 flex justify-center items-center">
          <p>© {new Date().getFullYear()} Next.js</p>
        </footer>
      </body>
    </html>
  );
}
