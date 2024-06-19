import React from "react";
import Head from "next/head"; // For SEO elements
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex justify-center items-center">
      <Head>
        <title>Your App Name - Home</title>
        <meta name="description" content="Your app description" />
        {/* Add other SEO meta tags as needed */}
      </Head>
      <div className="max-w-md text-center p-8 bg-white rounded-xl shadow-md">
        <h1 className="text-4xl font-bold text-gray-800">Welcome Home!</h1>
        <p className="text-gray-600 mt-4">
          This is my app's landing page. Explore more features or start using
          them right away!
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="/about"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Learn More
          </Link>
        </div>
        <div className="mt-8"> {/* Responsive image handling */}</div>
      </div>
    </div>
  );
};

export default HomePage;
